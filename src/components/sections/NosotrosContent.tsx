import Link from 'next/link'

const credencialesBlanca = [
  { titulo: 'Bootcamp Desarrollo Web Fullstack', sub: 'Ironhack · 2024', badge: 'Becada con prueba de acceso' },
  { titulo: 'Máster SEO y Marketing Digital', sub: 'Bigschool · 2024', badge: null },
  { titulo: 'CFGS Desarrollo de Aplicaciones Web', sub: 'IOC · En curso', badge: null },
]

const perfiles = [
  {
    num: '01',
    nombrePartes: ['Blanca', 'de Uña Martín'],
    rol: 'Desarrolladora web fullstack & especialista SEO',
    bio: 'Código limpio, arquitectura bien pensada y un ojo siempre puesto en el rendimiento. Me muevo con comodidad entre el front y el back, y me gusta que todo sea medible desde el día uno. Soy consciente de la importancia del SEO técnico en el desarrollo web y que el posicionamiento orgánico es clave para el éxito de cualquier proyecto.',
    skills: ['Next.js', 'React', 'Node.js', 'WordPress', 'SEO técnico', 'Figma'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/blancadum/' },
      { label: 'psiqfly.com', href: 'https://www.psiqfly.com/autora/' },
    ],
  },
  {
    num: '02',
    nombrePartes: ['Isamar', 'Dimas'],
    rol: 'Diseño & Estrategia Digital',
    bio: 'Los detalles que la mayoría pasa por alto son exactamente los que me obsesionan: tipografía, espacio, jerarquía visual. Creo que el diseño, cuando está bien hecho, no necesita explicarse. Compagino mi enfoque creativo con una estrategia digital sólida al servicio del cliente para crear un producto único y diferenciado.',
    skills: ['Figma', 'Canva', 'UX · UI', 'Estrategia de contenido'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/isamar-dimas/' },
      { label: 'Mi web', href: 'https://www.renart.es/'}
    ],
  },
]

const values = [
  {
    num: '01',
    name: 'A medida, siempre',
    desc: 'Cada proyecto empieza desde cero. No hay plantillas genéricas ni soluciones de copia-pega. Lo que funciona para otro negocio puede no funcionar para el tuyo.',
  },
  {
    num: '02',
    name: 'Sin intermediarios',
    desc: 'Hablas directamente con quien hace el trabajo. Sin account managers, sin malentendidos. Sabes en todo momento en qué punto está tu proyecto.',
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
  { label: 'DISEÑO', items: ['Figma', 'Canva', 'Photoshop', 'Lightroom'] },
  { label: 'SEO', items: ['Screaming Frog', 'Semrush', 'Ahrefs', 'Google Search Console', 'GA4', 'Surfer SEO'] },
  { label: 'ARQUITECTURA SEO', items: ['Sitemaps XML', 'Schema markup', 'Core Web Vitals', 'Link building', 'Keyword research'] },
]

export default function NosotrosContent() {
  return (
    <>
      {/* Nosotras */}
      <section className="bg-cw-black py-16 px-8 md:py-[80px] border-t border-cw-gray-2">
        <div className="max-w-[1100px] mx-auto">

          {/* Perfiles — dos columnas iguales */}
          <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-8">QUIÉNES SOMOS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-cw-gray-2">
            {perfiles.map((p, i) => (
              <div
                key={p.num}
                className={`pb-12 md:pb-0 ${i === 0 ? 'md:pr-14' : 'md:pl-14 pt-12 md:pt-0 border-t border-cw-gray-2 md:border-t-0'}`}
              >
                <p className="text-[10px] tracking-[0.18rem] text-cw-gray-5 mb-6">{p.num}</p>

                <div className="mb-1">
                  <h2 className="text-[32px] md:text-[36px] font-medium text-cw-white leading-[1.1] tracking-[-0.04rem]">
                    {p.nombrePartes[0]}
                  </h2>
                  <h2 className="text-[32px] md:text-[36px] font-medium text-cw-gray-5 leading-[1.1] tracking-[-0.04rem]">
                    {p.nombrePartes[1]}
                  </h2>
                </div>

                <p className="text-xs text-cw-gray-6 mt-3 mb-6 leading-[1.6]">{p.rol}</p>
                <div className="h-px bg-cw-gray-2 mb-6" />
                <p className="text-sm text-cw-gray-6 leading-[1.9] mb-6">{p.bio}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.skills.map(s => (
                    <span key={s} className="text-[10px] text-cw-gray-7 border border-cw-gray-2 rounded-full px-3 py-1 tracking-[0.04rem]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  {p.links.map(l => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-cw-gray-6 hover:text-cw-white transition-colors no-underline tracking-[0.04rem] flex items-center gap-1"
                    >
                      {l.label}
                      <span className="text-[10px] opacity-60">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Origen — después de los perfiles */}
          <div className="h-px bg-cw-gray-2 mt-12 mb-10" />
          <p className="text-cw-white text-sm leading-[1.9] text-center max-w-[520px] mx-auto">
            Nos conocimos haciendo el ciclo de DAW. Desde el primer momento conectamos: nos complementábamos
            de una forma que pocas veces pasa. Seguimos aprendiendo juntas, y eso, más que cualquier otra cosa,
            es lo que hace que CraftingWebs funcione.
          </p>

          {/* Formación — sin atribución, centrada */}
          <div className="h-px bg-cw-gray-2 mt-10 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cw-gray-2 border border-cw-gray-2 rounded-lg overflow-hidden">
            {credencialesBlanca.map(c => (
              <div key={c.titulo} className="bg-cw-gray-1 px-5 py-4">
                <p className="text-xs text-cw-white font-medium leading-[1.4] mb-1">{c.titulo}</p>
                <p className="text-[11px] text-cw-gray-5">{c.sub}</p>
                {c.badge && (
                  <span className="inline-block mt-2 text-[10px] text-cw-gray-7 border border-cw-gray-2 rounded px-2 py-0.5">
                    {c.badge}
                  </span>
                )}
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
          <p className="text-right text-sm italic text-cw-gray-6 mt-4">
            Y lo que surja, aceptamos propuestas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cw-black py-16 px-8 text-center">
        <div className="max-w-[520px] mx-auto">
          <h2 className="text-cw-white text-2xl md:text-[26px] font-medium tracking-[-0.03rem] mb-3 leading-[1.3]">¿Hablamos?</h2>
          <p className="text-cw-gray-6 text-sm leading-7 mb-7">
            Primera consulta gratuita y sin compromiso.
            Cuéntanos tu proyecto y te decimos con honestidad si podemos ayudarte.
          </p>
          <Link href="/contacto" className="inline-block bg-cw-white text-cw-black text-sm font-medium px-7 py-3 rounded no-underline hover:opacity-80 transition-opacity">
            Solicitar consulta gratuita →
          </Link>
        </div>
      </section>
    </>
  )
}
