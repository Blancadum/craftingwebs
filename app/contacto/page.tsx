import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import ContactForm from '@/src/components/sections/ContactForm'

export const metadata = { title: 'Contacto' }

export default function Contacto() {
    return (
        <main>
            <Navbar />

            <section className="bg-cw-black py-14 px-8">
                <div className="max-w-[1100px] mx-auto">
                    <div className="inline-flex items-center gap-2 border border-cw-gray-3 rounded-full px-3.5 py-1 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cw-gray-6 inline-block" />
                        <span className="text-cw-gray-6 text-[11px] tracking-[0.12rem]">TRABAJEMOS JUNTOS</span>
                    </div>
                    <h1 className="text-cw-white text-3xl md:text-[36px] font-medium tracking-[-0.05rem] leading-[1.2] mb-3">
                        No somos una agencia más.<br />
                        <span className="text-cw-gray-6">Somos tu equipo digital.</span>
                    </h1>
                    <p className="text-cw-gray-5 text-sm leading-7 max-w-[460px]">
                        Primera consulta gratuita y sin compromiso.
                        Te respondemos en menos de 24h.
                    </p>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </main>
    )
}
