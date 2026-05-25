import styles from './About.module.css'

const certs = [
  { name: 'ANACI', desc: 'Associazione Nazionale Amministratori Condominiali e Immobiliari' },
  { name: 'UNI 10801', desc: 'Certificazione professionale per amministratori di condominio' },
  { name: 'UNI 11777', desc: 'Certificazione revisori contabili condominiali' },
]

export default function About() {
  return (
    <section id="chi-siamo" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">Chi sono</p>
            <h2 className="section-title">
              Un professionista al servizio del tuo condominio da oltre 20 anni
            </h2>
            <p className={styles.text}>
              Ho fondato questa attività dalla passione per la gestione immobiliare e dal rispetto per i
              diritti di ogni condomino. Mi avvalgo di una rete di collaboratori qualificati — geometri
              e consulenti legali di fiducia — per garantire una gestione trasparente, efficiente e
              conforme a tutte le normative vigenti.
            </p>
            <p className={styles.text}>
              Credo che un buon amministratore non sia solo un gestore, ma un mediatore,
              un consulente di fiducia e un punto di riferimento per tutta la comunità condominiale.
            </p>
            <div className={styles.certs}>
              {certs.map(c => (
                <div key={c.name} className={styles.cert}>
                  <span className={styles.certBadge}>{c.name}</span>
                  <span className={styles.certDesc}>{c.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span>📸</span>
                <p>Foto del professionista</p>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeValue}>20+</span>
                <span className={styles.badgeLabel}>Anni di<br />esperienza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
