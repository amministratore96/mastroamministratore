import styles from './Services.module.css'

const services = [
  {
    icon: '🏢',
    title: 'Amministrazione Condominiale',
    desc: 'Gestione completa di assemblee, delibere, manutenzione ordinaria e straordinaria, rapporti con fornitori e rispetto della normativa vigente (L. 220/2012).',
  },
  {
    icon: '📊',
    title: 'Rendiconti e Contabilità',
    desc: 'Bilanci preventivi e consuntivi trasparenti, gestione incassi e pagamenti, rendicontazione chiara e accessibile per ogni condomino.',
  },
  {
    icon: '⚖️',
    title: 'Consulenza Legale e Fiscale',
    desc: 'Assistenza su controversie condominiali, recupero morosità, adempimenti fiscali del condominio (CU, 770, IMU) in collaborazione con professionisti qualificati.',
  },
  {
    icon: '🔧',
    title: 'Manutenzione e Sinistri',
    desc: 'Coordinamento interventi di manutenzione, gestione pratiche assicurative e sinistri, supervisione lavori straordinari.',
  },
  {
    icon: '💻',
    title: 'Portale Online Riservato',
    desc: "Area privata per ogni condomino: accesso 24/7 a documenti, convocazioni, verbali, estratti conto e comunicazioni dello studio.",
  },
  {
    icon: '🚨',
    title: 'Reperibilità 24/7',
    desc: 'Linea dedicata per emergenze: guasti, allagamenti, incendi e situazioni urgenti. Intervento garantito entro 2 ore.',
  },
]

export default function Services() {
  return (
    <section id="servizi" className={styles.section}>
      <div className="container">
        <p className="section-label">Cosa facciamo</p>
        <h2 className="section-title">Servizi completi per il tuo condominio</h2>
        <p className="section-sub">
          Un unico interlocutore per tutte le esigenze della tua proprietà condivisa.
        </p>
        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.title} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
