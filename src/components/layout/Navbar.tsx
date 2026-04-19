import Link from 'next/link'
import { navStyles as s } from '@/src/styles/navbar'

const links = ['Servicios', 'Proyectos', 'Nosotros']

export default function Navbar() {
    return (
        <nav style={s.nav}>

            <Link href="/" style={s.logo}>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <polyline points="2,26 9,6 16,20 23,6 30,26"
                        stroke="#b4b2a9" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="2" cy="26" r="2" fill="#888780" />
                    <circle cx="30" cy="26" r="2" fill="#888780" />
                    <path d="M30,26 Q36,18 35,8"
                        stroke="#5f5e5a" strokeWidth="1.2"
                        strokeDasharray="2.5,2" strokeLinecap="round" fill="none" />
                    <circle cx="35" cy="8" r="1.8" fill="#888780" />
                </svg>
                <span style={s.logoText}>
                    Crafting<span style={s.logoSpan}>Webs</span>
                </span>
            </Link>

            <div style={s.links}>
                {links.map((item) => (
                    <Link key={item} href={`/${item.toLowerCase()}`} style={s.link}>
                        {item}
                    </Link>
                ))}
            </div>

            <Link href="/contacto" style={s.cta}>
                Contactar
            </Link>

        </nav>
    )
}