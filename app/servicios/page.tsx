export const metadata = { title: 'Servicios' }

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import ServicesDetail from '@/src/components/sections/ServicesDetail'

export default function Servicios() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="SERVICIOS"
                title="Lo que hacemos."
                subtitle="Y cómo lo hacemos."
            />
            <ServicesDetail />
            <Footer />
        </main>
    )
}
