import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import Badge from '@/src/components/ui/Badge'

export default function Contacto() {
    return (
        <main>
            <Navbar />
            <section style={{ background: '#111', minHeight: '60vh', padding: '72px 2rem' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <Badge text="CONTACTO" />
                    <h1 style={{ color: '#f5f5f3', fontSize: '42px', fontWeight: 500, letterSpacing: '-0.05rem' }}>
                        Hablemos.<br />
                        <span style={{ color: '#888780' }}>Sin compromiso.</span>
                    </h1>
                    <p style={{ color: '#888780', marginTop: '1.5rem', fontSize: '18px' }}>
                        hola@craftingwebs.es
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    )
}
