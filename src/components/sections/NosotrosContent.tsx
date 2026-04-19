import Link from 'next/link'

const credentials = [
    { title: 'Bootcamp Desarrollo Web Fullstack', sub: 'Ironhack', year: '2024', badge: 'Becada por mérito' },
    { title: 'Máster SEO y Marketing Digital', sub: 'Bigschool', year: '2024', badge: null },
    { title: 'CFGS Desarrollo de Aplicaciones Web', sub: 'IOC', year: 'En curso', badge: null },
]

const values = [
    {
        num: '01',
        name: 'A medida, siempre',
        desc: 'Cada proyecto empieza desde cero. No hay plantillas genéricas ni soluciones de copia-pega. Lo que funciona para otro negocio puede no funcionar para el tuyo.',
    },
    {
        num: '02',
        name: 'Un interlocutor, sin intermediarios',
        desc: 'Hablas directamente con quien hace el trabajo. Sin account managers, sin malentendidos. Tú sabes en todo momento en qué punto está tu proyecto.',
    },
    {
        num: '03',
        name: 'Resultados medibles',
        desc: 'El diseño bonito no paga facturas. Cada decisión tiene una razón detrás: velocidad, conversión, posicionamiento. Y lo podemos medir.',
    },
    {
        num: '04',
        name: 'No desaparecemos al entregar',
        desc: 'El lanzamiento es el principio, no el final. Seguimiento, soporte y mejora continua para que tu web siga rindiendo con el tiempo.',
    },
]

const stack = [
    { label: 'DESARROLLO', items: ['Next.js', 'React', 'WordPress', 'Node.js', 'HTML · CSS · JS'] },
    { label: 'DISEÑO', items: ['Figma', 'Canva'] },
    { label: 'SEO', items: ['Screaming Frog', 'Semrush', 'Ahrefs', 'Google Search Console', 'GA4', 'Surfer SEO'] },
    { label: 'HERRAMIENTAS', items: ['Git', 'Vercel', 'Postman', 'VS Code'] },
]

export default function NosotrosContent() {
    return (
        <>
            {/* Bio */}
            <section className="bg-cw-black py-16 px-8 md:py-[72px] border-t border-cw-gray-2">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
                    <div>
                        <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-5">QUIÉN HAY DETRÁS</p>
                        <h2 className="text-cw-white text-3xl md:text-[32px] font-medium tracking-[-0.04rem] leading-[1.2] mb-2">Blanca De Uña.</h2>
                        <p className="text-cw-gray-6 text-sm mb-6">Desarrolladora web fullstack & especialista SEO</p>
                        <p className="text-cw-gray-5 text-sm leading-[1.8] mb-4">
                            CraftingWebs nació de una convicción simple: los profesionales autónomos merecen
                            una presencia digital a la altura de su trabajo, sin pagar precios de gran agencia
                            ni conformarse con plantillas genéricas.
                        </p>
                        <p className="text-cw-gray-5 text-sm leading-[1.8] mb-4">
                            Combino desarrollo web con estrategia SEO para entregar proyectos completos —
                            desde el diseño hasta el posicionamiento — sin que tengas que coordinar
                            a tres proveedores distintos.
                        </p>
                        <p className="text-cw-gray-5 text-sm leading-[1.8] mb-4">
                            Con base en Estepona, trabajo con autónomos y pequeños negocios
                            de toda España que quieren una web que realmente trabaje para ellos.
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-4">FORMACIÓN</p>
                        {credentials.map((c) => (
                            <div key={c.title} className="flex justify-between items-baseline pb-3 mb-3 border-b border-cw-gray-2">
                                <div>
                                    <p className="text-xs text-cw-white font-medium">{c.title}</p>
                                    <p className="text-[11px] text-cw-gray-6">{c.sub}</p>
                                    {c.badge && (
                                        <span className="inline-block bg-cw-gray-2 border border-cw-gray-3 rounded px-2 py-0.5 text-[10px] text-cw-gray-7 mt-1">
                                            {c.badge}
                                        </span>
                                    )}
                                </div>
                                <span className="text-[11px] text-cw-gray-4 shrink-0 ml-4">{c.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="bg-white py-16 px-8 md:py-[72px]">
                <div className="max-w-[1100px] mx-auto">
                    <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-5">CÓMO TRABAJAMOS</p>
                    <h2 className="text-2xl md:text-[28px] font-medium text-cw-black tracking-[-0.03rem] leading-[1.3] mb-12 max-w-[480px]">
                        Lo que nos diferencia<br />
                        de una agencia grande.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cw-gray-9 border border-cw-gray-9 rounded-lg overflow-hidden">
                        {values.map((v) => (
                            <div key={v.num} className="bg-white p-8">
                                <p className="text-[10px] font-medium text-cw-gray-8 tracking-[0.1rem] mb-4">{v.num}</p>
                                <h3 className="text-[15px] font-medium text-cw-black mb-2.5">{v.name}</h3>
                                <p className="text-sm text-cw-gray-6 leading-7">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section className="bg-cw-gray-10 py-16 px-8 md:py-[72px]">
                <div className="max-w-[1100px] mx-auto">
                    <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-5">HERRAMIENTAS</p>
                    <h2 className="text-xl md:text-[22px] font-medium text-cw-black tracking-[-0.03rem] mb-9">Con qué trabajamos.</h2>
                    <div className="flex flex-col gap-px border border-cw-gray-9 rounded-lg overflow-hidden">
                        {stack.map((row) => (
                            <div key={row.label} className="flex flex-col md:flex-row md:items-center bg-white px-6 py-4 gap-3 md:gap-6">
                                <span className="text-[10px] tracking-[0.12rem] text-cw-gray-6 md:w-[120px] shrink-0">{row.label}</span>
                                <div className="flex flex-wrap gap-2">
                                    {row.items.map((item) => (
                                        <span key={item} className="text-xs text-cw-gray-4 bg-cw-gray-10 border border-cw-gray-9 rounded px-2.5 py-1">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-cw-black py-16 px-8 text-center">
                <div className="max-w-[520px] mx-auto">
                    <h2 className="text-cw-white text-2xl md:text-[26px] font-medium tracking-[-0.03rem] mb-3 leading-[1.3]">¿Hablamos?</h2>
                    <p className="text-cw-gray-6 text-sm leading-7 mb-7">
                        Primera consulta gratuita y sin compromiso.
                        Cuéntame tu proyecto y te digo con honestidad si puedo ayudarte.
                    </p>
                    <Link href="/contacto" className="inline-block bg-cw-white text-cw-black text-sm font-medium px-7 py-3 rounded no-underline">
                        Solicitar consulta gratuita →
                    </Link>
                </div>
            </section>
        </>
    )
}
