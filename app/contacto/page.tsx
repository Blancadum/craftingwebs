import { Suspense } from 'react'
import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import ContactForm from '@/src/components/sections/ContactForm'

export const metadata = { title: 'Contacto — CraftingWebs' }

export default function Contacto() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="TRABAJEMOS JUNTOS"
                title="No somos una agencia más."
                subtitle="Somos tu equipo digital."
                description="Primera consulta gratuita y sin compromiso. Te respondemos en menos de 24h."
            />
            <Suspense fallback={null}>
                <ContactForm />
            </Suspense>
            <Footer />
        </main>
    )
}
