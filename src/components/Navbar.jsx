import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Chi Sono',    href: '#chi-siamo' },
  { label: 'Servizi',     href: '#servizi' },
  { label: 'Perché Me',   href: '#perche-noi' },
  { label: 'Recensioni',  href: '#recensioni' },
  { label: 'Contatti',    href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>⬡</span>
          <span>Mastro<strong>Amministratore</strong></span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contatti" className={`btn btn-primary ${styles.cta}`} onClick={() => setOpen(false)}>
            Preventivo Gratuito
          </a>
        </nav>

        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
