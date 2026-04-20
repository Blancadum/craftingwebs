import Link from 'next/link'
import Logo from '@/src/components/ui/Logo'

const links = ['Servicios', 'Proyectos', 'Nosotros']

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
                    <Link key={item} href={`/${item.toLowerCase()}`} className="text-cw-gray-7 text-sm no-underline hover:text-cw-gray-9 transition-colors">
                        {item}
                    </Link>
                ))}
            </div>

            <Link href="/contacto" className="bg-cw-white text-cw-black text-xs font-medium px-4 py-1.5 rounded no-underline">
                Contactar
            </Link>

        </nav>
    )
}
