import SectionLabel from '../ui/SectionLabel'
import { servicesStyles as s} from '@/src/styles/services'

const services = [
  { num: '01', name: 'Desarrollo web', desc: 'Webs rápidas, accesibles y optimizadas. WordPress, Next.js o custom según tu proyecto.' },
  { num: '02', name: 'SEO & posicionamiento', desc: 'Estrategia orgánica para aparecer donde tus clientes te buscan. On-page, técnico y contenidos.' },
  { num: '03', name: 'Diseño UI/UX', desc: 'Interfaces que guían al usuario hacia la conversión. Limpio, funcional y a tu imagen.' },
  { num: '04', name: 'Identidad digital', desc: 'Logo, paleta, tipografía y guía de marca. Todo lo que necesitas para comunicar con coherencia.' },
  { num: '05', name: 'E-commerce', desc: 'Tiendas online que venden. Integración de pasarelas de pago, gestión de stock y más.' },
  { num: '06', name: 'Mantenimiento', desc: 'Nos quedamos contigo después de entregar. Actualizaciones, backups y soporte continuo.' },
]

export default function Services() {
  return (
    <section style={s.section}>
      <div style={s.container}>

        <SectionLabel text="Lo que hacemos" />

        <h2 style={s.title}>
          Soluciones digitales<br />
          para profesionales reales.
        </h2>

        <div style={s.grid}>
          {services.map((sv) => (
            <div key={sv.num} style={s.card}>
              <span style={s.cardNum}>{sv.num}</span>
              <h3 style={s.cardName}>{sv.name}</h3>
              <p style={s.cardDesc}>{sv.desc}</p>
              <span style={s.cardLink}>Ver más →</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}