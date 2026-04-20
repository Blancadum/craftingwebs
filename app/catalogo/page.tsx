export const metadata = { title: 'Catálogo — CraftingWebs' }

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import ProyectosContent from '@/src/components/sections/ProyectosContent'

export default function Catalogo() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="CATÁLOGO"
                title="Nuestro trabajo."
                subtitle="Modelos de referencia."
                description="Cada modelo tiene su propio código de referencia. Si ves algo que te inspire, dinos el código — «quiero algo como el Nácar 02» — y lo adaptamos a tu marca y sector desde cero."
            />
            <ProyectosContent />
            <Footer />
        </main>
    )
}
