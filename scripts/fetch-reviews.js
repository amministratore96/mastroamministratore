import { writeFileSync, readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Carica .env.local se presente (Node non lo legge automaticamente)
const envLocalPath = resolve(__dirname, '../.env.local')
if (existsSync(envLocalPath)) {
  for (const line of readFileSync(envLocalPath, 'utf8').split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && !key.startsWith('#') && rest.length) {
      process.env[key.trim()] = rest.join('=').trim()
    }
  }
}

// Carica anche .env.production per VITE_GOOGLE_PLACE_ID
const envProdPath = resolve(__dirname, '../.env.production')
if (existsSync(envProdPath)) {
  for (const line of readFileSync(envProdPath, 'utf8').split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && !key.startsWith('#') && rest.length && !process.env[key.trim()]) {
      process.env[key.trim()] = rest.join('=').trim()
    }
  }
}

const PLACE_ID = process.env.VITE_GOOGLE_PLACE_ID
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

if (!PLACE_ID || !API_KEY) {
  console.warn('[fetch-reviews] VITE_GOOGLE_PLACE_ID o GOOGLE_PLACES_API_KEY mancanti — skip.')
  process.exit(0)
}

const url =
  `https://maps.googleapis.com/maps/api/place/details/json` +
  `?place_id=${PLACE_ID}` +
  `&fields=rating,user_ratings_total,reviews` +
  `&language=it` +
  `&reviews_sort=most_relevant` +
  `&key=${API_KEY}`

const res = await fetch(url)
const json = await res.json()

if (json.status !== 'OK') {
  console.error('[fetch-reviews] Errore API:', json.status, json.error_message)
  process.exit(1)
}

const { rating, user_ratings_total, reviews = [] } = json.result

const data = {
  rating,
  total: user_ratings_total,
  reviews: reviews
    .filter(r => r.rating >= 4)
    .slice(0, 6)
    .map(r => ({
      author: r.author_name,
      avatar: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
    })),
}

const outPath = resolve(__dirname, '../src/data/reviews.json')
writeFileSync(outPath, JSON.stringify(data, null, 2))
console.log(`[fetch-reviews] Salvate ${data.reviews.length} recensioni (media ${rating}★)`)
