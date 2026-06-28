import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '', tipo: 'preventivo' })
  const formRef = useRef(null)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setSent(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
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
                  <a href="tel:+393341357928">+39 334 135 7928</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:federicomastrostefano96@gmail.com">federicomastrostefano96@gmail.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/393341357928" target="_blank" rel="noreferrer">Scrivimi su WhatsApp</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <div>
                  <strong>Sede</strong>
                  <span>Via Edgardo Zauli Sajani 5, Velletri (RM)</span>
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
              <form ref={formRef} className={styles.form} onSubmit={submit}>
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

                {error && (
                  <p className={styles.errorMsg}>
                    Invio fallito. Riprova oppure scrivimi direttamente a{' '}
                    <a href="mailto:federicomastrostefano96@gmail.com">federicomastrostefano96@gmail.com</a>.
                  </p>
                )}

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Invio in corso…' : 'Invia richiesta →'}
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
