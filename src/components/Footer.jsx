import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>⬡ Mastro<strong>Amministratore</strong></span>
          <p>Amministrazione condominiale professionale.<br />Certificato ANACI · UNI 10801 · UNI 11777</p>
        </div>

        <div className={styles.links}>
          <div>
            <strong>Servizi</strong>
            <a href="#servizi">Amministrazione</a>
            <a href="#servizi">Contabilità</a>
            <a href="#servizi">Consulenza legale</a>
            <a href="#servizi">Portale online</a>
          </div>
          <div>
            <strong>Professionista</strong>
            <a href="#chi-siamo">Chi sono</a>
            <a href="#perche-noi">Perché me</a>
            <a href="#contatti">Contatti</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© {year} MastroAmministratore — P.IVA 00000000000</p>
        <p>Via Roma 1, Milano · info@mastroamministratore.it</p>
      </div>
    </footer>
  )
}
