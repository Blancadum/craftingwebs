import Link from 'next/link'
import { footerStyles as s} from '@/src/styles/footer'

const navLinks = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const social = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
]

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.container}>

        <div style={s.top}>

          {/* Brand */}
          <div>
            <div style={s.brand}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <polyline points="2,26 9,6 16,20 23,6 30,26"
                  stroke="#b4b2a9" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="2" cy="26" r="2" fill="#888780" />
                <circle cx="30" cy="26" r="2" fill="#888780" />
              </svg>
              <span style={s.brandText}>
                Crafting<span style={s.brandSpan}>Webs</span>
              </span>
            </div>
            <p style={s.brandDesc}>
              Agencia digital especializada en profesionales autónomos.
              Webs a medida, SEO y estrategia digital desde Estepona.
            </p>
            <p style={s.brandEmail}>hola@craftingwebs.es</p>
          </div>

          {/* Nav */}
          <div>
            <p style={s.colLabel}>NAVEGACIÓN</p>
            <div style={s.col}>
              {navLinks.map((l) => (
                <Link key={l.label} href={l.href} style={s.link}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={s.colLabel}>REDES</p>
            <div style={s.col}>
              {social.map((l) => (
                <a key={l.label} href={l.href}
                  target="_blank" rel="noopener noreferrer"
                  style={s.link}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div style={s.bottom}>
          <span style={s.bottomText}>
            © {new Date().getFullYear()} CraftingWebs — Estepona, España
          </span>
          <span style={s.bottomText}>craftingwebs.es</span>
        </div>

      </div>
    </footer>
  )
}