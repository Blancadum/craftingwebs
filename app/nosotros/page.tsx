export const metadata = { title: 'Nosotras' }

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import NosotrosContent from '@/src/components/sections/NosotrosContent'

export default function Nosotros() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="NOSOTRAS"
                title="Quiénes somos."
                subtitle="Y por qué lo hacemos."
                description="Nació de una convicción simple: los profesionales autónomos merecen una presencia digital a la altura de su trabajo, sin pagar precios de gran agencia ni conformarse con plantillas genéricas. Diseño, desarrollo y SEO en el mismo equipo, para que no tengas que coordinar a tres proveedores distintos."
            />
            <NosotrosContent />
            <Footer />
        </main>
    )
}
