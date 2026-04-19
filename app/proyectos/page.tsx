export const metadata = { title: 'Proyectos' }

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import ProyectosContent from '@/src/components/sections/ProyectosContent'

export default function Proyectos() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="PROYECTOS"
                title="Nuestro trabajo."
                subtitle="Resultados reales."
            />
            <ProyectosContent />
            <Footer />
        </main>
    )
}
