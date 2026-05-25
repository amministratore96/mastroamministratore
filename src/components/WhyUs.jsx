import styles from './WhyUs.module.css'

const reasons = [
  {
    icon: '🔍',
    title: 'Trasparenza totale',
    desc: 'Ogni spesa documentata. Rendiconti chiari, accessibili online in ogni momento. Nessuna sorpresa in assemblea.',
  },
  {
    icon: '📱',
    title: 'Portale digitale incluso',
    desc: 'Area riservata per ogni condomino: documenti, verbali, estratti conto e comunicazioni sempre disponibili da smartphone.',
  },
  {
    icon: '⚡',
    title: 'Risposta garantita in 24h',
    desc: 'Per le richieste ordinarie rispondo entro 24 ore lavorative. Per le emergenze sono reperibile 24/7.',
  },
  {
    icon: '🤝',
    title: 'Rete di collaboratori qualificati',
    desc: 'Mi avvalgo di geometri e consulenti legali di fiducia per offrirti una gestione completa a 360°.',
  },
  {
    icon: '📋',
    title: 'Conformità normativa',
    desc: 'Aggiornamento continuo su Legge 220/2012, normativa fiscale, sicurezza e superbonus. Nessun rischio di inadempienza.',
  },
  {
    icon: '🛡️',
    title: 'Polizza professionale',
    desc: 'Copertura assicurativa di responsabilità civile professionale. La tua proprietà è al sicuro in ogni circostanza.',
  },
]

export default function WhyUs() {
  return (
    <section id="perche-noi" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Perché scegliermi</p>
            <h2 className="section-title">Cosa mi rende diverso</h2>
          </div>
          <p className={styles.headerSub}>
            Non sono solo un amministratore. Sono il punto di riferimento della tua comunità condominiale.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map(r => (
            <div key={r.title} className={styles.item}>
              <span className={styles.icon}>{r.icon}</span>
              <div>
                <h3 className={styles.title}>{r.title}</h3>
                <p className={styles.desc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Pronto a cambiare amministratore?</p>
          <a href="#contatti" className="btn btn-primary">Richiedi un preventivo senza impegno</a>
        </div>
      </div>
    </section>
  )
}
