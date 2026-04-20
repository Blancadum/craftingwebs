import Link from 'next/link'
import SectionLabel from '../ui/SectionLabel'

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
    <section className="bg-cw-gray-10 py-16 px-8 md:py-[80px]">
      <div className="max-w-[1100px] mx-auto">

        <SectionLabel text="Lo que hacemos" />

        <h2 className="text-[26px] md:text-[32px] font-medium text-cw-black mb-14 tracking-[-0.04rem] leading-[1.2]">
          Soluciones digitales<br />
          para profesionales reales.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cw-gray-9 border border-cw-gray-9 rounded-lg overflow-hidden">
          {services.map((sv) => (
            <div key={sv.num} className="bg-cw-white p-8 flex flex-col gap-3.5">
              <span className="text-[10px] font-medium text-cw-gray-7 tracking-[0.14rem]">{sv.num}</span>
              <h3 className="text-sm font-medium text-cw-black leading-snug">{sv.name}</h3>
              <p className="text-xs text-cw-gray-6 leading-[1.8] m-0">{sv.desc}</p>
              <Link href="/servicios" className="text-[10px] text-cw-gray-5 mt-auto pt-1 tracking-[0.06rem] no-underline hover:text-cw-gray-7 transition-colors">Ver más →</Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
