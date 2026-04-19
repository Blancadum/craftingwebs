export const metadata = { title: 'Nosotros' }

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import NosotrosContent from '@/src/components/sections/NosotrosContent'

export default function Nosotros() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="NOSOTROS"
                title="Quiénes somos."
                subtitle="Y por qué lo hacemos."
            />
            <NosotrosContent />
            <Footer />
        </main>
    )
}
