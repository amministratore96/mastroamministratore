import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // In produzione su GitHub Pages il base deve essere /nome-repo/
  // Impostalo in .env.production come VITE_BASE_PATH=/mastroamministratore/
  const base = env.VITE_BASE_PATH || '/'

  return {
    plugins: [react()],
    base,
  }
})
