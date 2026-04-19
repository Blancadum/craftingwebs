import FooterBrand from '@/src/components/ui/FooterBrand'
import FooterCol from '@/src/components/ui/FooterCol'

const navLinks = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const social = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="bg-cw-black border-t border-cw-gray-2">
      <div className="max-w-[1100px] mx-auto px-8 pt-12">

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-12 border-b border-cw-gray-2">

          <FooterBrand />

          <FooterCol label="NAVEGACIÓN" links={navLinks} />
          <FooterCol label="REDES" links={social} external />

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-2">
          <span className="text-cw-gray-3 text-[11px]">
            © {new Date().getFullYear()} CraftingWebs — Estepona, España
          </span>
          <span className="text-cw-gray-3 text-[11px]">craftingwebs.es</span>
        </div>

      </div>
    </footer>
  )
}
