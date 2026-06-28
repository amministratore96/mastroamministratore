import data from '../data/reviews.json'
import styles from './Reviews.module.css'

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID

function Stars({ count }) {
  return (
    <span className={styles.stars} aria-label={`${count} stelle su 5`}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Reviews() {
  const writeUrl = PLACE_ID
    ? `https://search.google.com/local/writereview?placeid=${PLACE_ID}`
    : 'https://maps.google.com'

  return (
    <section id="recensioni" className={styles.section}>
      <div className="container">
        <p className="section-label">Recensioni</p>
        <div className={styles.header}>
          <div>
            <h2 className="section-title">Cosa dicono i condomini</h2>
            {data.total > 0 && (
              <p className={styles.summary}>
                <span className={styles.bigRating}>{data.rating}</span>
                <Stars count={Math.round(data.rating)} />
                <span className={styles.totalCount}>su {data.total} recensioni Google</span>
              </p>
            )}
          </div>
          <a
            href={writeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            ⭐ Lascia una recensione
          </a>
        </div>

        {data.reviews.length > 0 ? (
          <div className={styles.grid}>
            {data.reviews.map((r, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  {r.avatar
                    ? <img src={r.avatar} alt={r.author} className={styles.avatar} referrerPolicy="no-referrer" />
                    : <div className={styles.avatarFallback}>{r.author[0]}</div>
                  }
                  <div>
                    <strong className={styles.author}>{r.author}</strong>
                    <span className={styles.time}>{r.time}</span>
                  </div>
                </div>
                <Stars count={r.rating} />
                <p className={styles.text}>{r.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Sii il primo a lasciare una recensione!</p>
            <a href={writeUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              ⭐ Scrivi una recensione su Google
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
