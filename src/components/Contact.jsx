import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '', tipo: 'preventivo' })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    // TODO: collegare a backend/email service
    setSent(true)
  }

  return (
    <section id="contatti" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className="section-label">Contatti</p>
            <h2 className="section-title">Parliamo del tuo condominio</h2>
            <p className={styles.sub}>
              Compila il modulo per ricevere un preventivo gratuito oppure contattami
              direttamente. Risposta garantita entro 24 ore lavorative.
            </p>

            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <span>📞</span>
                <div>
                  <strong>Telefono</strong>
                  <a href="tel:+390000000000">+39 00 0000 0000</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@mastroamministratore.it">info@mastroamministratore.it</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/390000000000" target="_blank" rel="noreferrer">Scrivimi su WhatsApp</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <div>
                  <strong>Sede</strong>
                  <span>Via Roma 1, Milano (MI)</span>
                </div>
              </div>
            </div>

            <div className={styles.hours}>
              <strong>Orari di ricevimento</strong>
              <p>Lun–Ven: 9:00 – 18:00</p>
              <p>Emergenze: 24/7</p>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {sent ? (
              <div className={styles.success}>
                <span>✅</span>
                <h3>Messaggio inviato!</h3>
                <p>Ti risponderò entro 24 ore lavorative.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={submit}>
                <h3 className={styles.formTitle}>Richiedi Preventivo Gratuito</h3>

                <div className={styles.row}>
                  <label>
                    Nome e Cognome *
                    <input name="nome" value={form.nome} onChange={handle} required placeholder="Mario Rossi" />
                  </label>
                  <label>
                    Email *
                    <input type="email" name="email" value={form.email} onChange={handle} required placeholder="mario@email.it" />
                  </label>
                </div>

                <label>
                  Telefono
                  <input name="telefono" value={form.telefono} onChange={handle} placeholder="+39 000 000 0000" />
                </label>

                <label>
                  Tipo di richiesta
                  <select name="tipo" value={form.tipo} onChange={handle}>
                    <option value="preventivo">Preventivo amministrazione</option>
                    <option value="revisione">Revisione contabile</option>
                    <option value="consulenza">Consulenza</option>
                    <option value="altro">Altro</option>
                  </select>
                </label>

                <label>
                  Messaggio *
                  <textarea name="messaggio" value={form.messaggio} onChange={handle} required rows={4}
                    placeholder="Descrivici il tuo condominio: numero di unità, indirizzo, eventuali problemi attuali..." />
                </label>

                <button type="submit" className="btn btn-primary">
                  Invia richiesta →
                </button>

                <p className={styles.privacy}>
                  Inviando il modulo accetti la nostra{' '}
                  <a href="#privacy">Privacy Policy</a>. I dati non saranno ceduti a terzi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
