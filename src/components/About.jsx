import styles from './About.module.css'

const certs = [
  { name: 'ABICONF', desc: 'Associazione Nazionale Amministratori di Condominio e Fiduciari' },
]

export default function About() {
  return (
    <section id="chi-siamo" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">Chi sono</p>
            <h2 className="section-title">
              Una rete di professionisti al servizio del tuo condominio
            </h2>
            <p className={styles.text}>
              Dietro ogni condominio gestito c'è un team coeso: geometri, consulenti legali e
              specialisti fiscali che lavorano in sinergia per coprire ogni esigenza con
              competenza dedicata.
            </p>
            <p className={styles.text}>
              Una rete strutturata e sempre aggiornata, per garantire risposte precise e tempestive
              su qualsiasi fronte — dalla contabilità alle pratiche legali, dalla manutenzione
              alla conformità normativa.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
