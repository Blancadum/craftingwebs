import Link from 'next/link'

const services = [
    {
        num: '01',
        name: 'Desarrollo web',
        desc: 'Webs rápidas, accesibles y optimizadas para autónomos que quieren destacar. Diseñadas para convertir.',
        includes: [
            'Diseño a medida con Next.js o WordPress',
            'Responsive para móvil, tablet y escritorio',
            'Optimización de velocidad y Core Web Vitals',
            'Integración con formularios, CRM y analytics',
        ],
    },
    {
        num: '02',
        name: 'SEO & posicionamiento',
        desc: 'Estrategia orgánica para aparecer donde tus clientes te buscan, con resultados medibles.',
        includes: [
            'Auditoría técnica completa (Search Console, Screaming Frog)',
            'Keyword research y arquitectura de contenidos',
            'Optimización on-page y metadatos',
            'Seguimiento mensual con GA4',
        ],
    },
    {
        num: '03',
        name: 'Diseño UI/UX',
        desc: 'Interfaces que guían al usuario hacia la acción. Limpio, funcional y alineado con tu marca.',
        includes: [
            'Wireframes y prototipo navegable en Figma',
            'Sistema de componentes reutilizables',
            'Revisión de usabilidad y accesibilidad',
            'Entrega de diseño listo para desarrollo',
        ],
    },
    {
        num: '04',
        name: 'Identidad digital',
        desc: 'Todo lo que necesitas para comunicar con coherencia desde el primer día.',
        includes: [
            'Logotipo y variantes (horizontal, icono, negativo)',
            'Paleta de colores y tipografía',
            'Manual de marca básico',
            'Aplicación a web y plantillas de redes',
        ],
    },
    {
        num: '05',
        name: 'E-commerce',
        desc: 'Tiendas online pensadas para vender, sin fricciones y con la gestión más sencilla posible.',
        includes: [
            'Catálogo de productos y gestión de stock',
            'Pasarela de pago integrada (Stripe, PayPal)',
            'SEO para producto y categorías',
            'Panel de administración sin complicaciones',
        ],
    },
    {
        num: '06',
        name: 'Mantenimiento',
        desc: 'No desaparecemos tras entregar. Tu web siempre actualizada, segura y funcionando.',
        includes: [
            'Actualizaciones de seguridad y plugins',
            'Backups periódicos automatizados',
            'Soporte ante incidencias',
            'Informe mensual de rendimiento',
        ],
    },
]

export default function ServicesDetail() {
    return (
        <>
            <section className="bg-white py-16 px-8 md:py-[72px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cw-gray-9 border border-cw-gray-9 rounded-lg overflow-hidden max-w-[1100px] mx-auto">
                    {services.map((sv) => (
                        <div key={sv.num} className="bg-white p-7 md:p-9 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-medium text-cw-gray-8 tracking-[0.1rem]">{sv.num}</span>
                                <h2 className="text-base font-medium text-cw-black">{sv.name}</h2>
                            </div>
                            <p className="text-sm text-cw-gray-6 leading-7">{sv.desc}</p>
                            <div className="h-px bg-cw-gray-9" />
                            <div>
                                <p className="text-[10px] tracking-[0.12rem] text-cw-gray-6 mb-2.5">INCLUYE</p>
                                {sv.includes.map((item) => (
                                    <div key={item} className="flex items-start gap-2.5 mb-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cw-gray-7 mt-1.5 shrink-0" />
                                        <span className="text-xs text-cw-gray-5 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-cw-black py-16 px-8 text-center">
                <div className="max-w-[560px] mx-auto">
                    <h2 className="text-cw-white text-2xl md:text-[26px] font-medium tracking-[-0.03rem] mb-3 leading-[1.3]">
                        ¿No sabes exactamente<br />qué necesitas?
                    </h2>
                    <p className="text-cw-gray-6 text-sm leading-7 mb-7">
                        Primera consulta gratuita. Te escuchamos, analizamos tu situación
                        y te proponemos lo que tiene sentido para tu negocio.
                    </p>
                    <Link href="/contacto" className="inline-block bg-cw-white text-cw-black text-sm font-medium px-7 py-3 rounded no-underline">
                        Solicitar consulta gratuita →
                    </Link>
                </div>
            </section>
        </>
    )
}
