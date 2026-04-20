import Link from 'next/link'
import Logo from '@/src/components/ui/Logo'
import MobileMenu from './MobileMenu'

const links = [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: 'Nosotros', href: '/nosotros' },
]

export default function Navbar() {
    return (
        <nav className="bg-cw-black flex items-center justify-between px-8 h-14 border-b border-cw-gray-2">

            <Link href="/" className="flex items-center gap-2.5 no-underline">
                <Logo size={28} tail />
                <span className="text-cw-white text-sm font-normal tracking-[-0.3px]">
                    Crafting<span className="text-cw-gray-7 font-medium">Webs</span>
                </span>
            </Link>

            <div className="hidden md:flex gap-7">
                {links.map((item) => (
                    <Link key={item.href} href={item.href} className="text-cw-gray-7 text-xs no-underline hover:text-cw-gray-9 transition-colors">
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <Link href="/contacto" className="hidden md:inline-flex bg-cw-white text-cw-black text-xs font-medium px-4 py-1.5 rounded no-underline">
                    Contactar
                </Link>
                <MobileMenu />
            </div>

        </nav>
    )
}
