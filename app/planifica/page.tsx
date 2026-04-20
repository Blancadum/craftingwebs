export const metadata = {
    title: 'Planifica tu web — CraftingWebs',
    description: 'Responde 3 preguntas y te decimos qué tipo de web necesitas según tu negocio y presupuesto.',
}

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import PageHero from '@/src/components/ui/PageHero'
import Configurador from '@/src/components/sections/Configurador'

export default function Planifica() {
    return (
        <main>
            <Navbar />
            <PageHero
                badge="HERRAMIENTA GRATUITA"
                title="Define tu web."
                subtitle="En 3 preguntas."
                description="Dinos cuál es tu objetivo, cómo es tu negocio y cuánto quieres invertir. Te decimos qué tipo de web necesitas y qué incluiría."
            />

            <section className="bg-white py-16 px-8">
                <Configurador />
            </section>

            <Footer />
        </main>
    )
}
