import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={styles.label}>Amministrazione Condominiale Professionale</p>
        <h1 className={styles.title}>
          Il tuo condominio,<br />gestito con cura.
        </h1>
        <p className={styles.sub}>
          Trasparenza, competenza e disponibilità costante.<br />
          Affidati a un professionista certificato per la gestione del tuo immobile.
        </p>
        <div className={styles.actions}>
          <a href="#contatti" className="btn btn-primary">Richiedi Preventivo Gratuito</a>
          <a href="#servizi" className="btn btn-outline">Scopri i Servizi</a>
        </div>
        <div className={styles.stats}>
          {[
            { value: '20+', label: 'Anni di esperienza' },
            { value: '150+', label: 'Condomini gestiti' },
            { value: '3.000+', label: 'Unità immobiliari' },
            { value: '24/7', label: 'Reperibilità' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
