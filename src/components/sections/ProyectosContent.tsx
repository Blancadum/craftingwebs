import CarruselProyectos from '@/src/components/ui/CarruselProyectos'
import Link from 'next/link'

type Variant = 'corporate' | 'shop' | 'landing' | 'portfolio'

const categorias: {
  num: string
  tipo: string
  slug: string
  descripcion: string
  variant: Variant
  proyectos: { codigo: string; sector: string; tags: string[] }[]
}[] = [
  {
    num: '01',
    slug: 'corporativa',
    tipo: 'Web Corporativa',
    descripcion: 'Presencia sólida para despachos, clínicas y consultoras. Diseñadas para transmitir autoridad y generar contactos cualificados.',
    variant: 'corporate',
    proyectos: [
      { codigo: 'Ébano 01', sector: 'Despacho de abogados',     tags: ['Legal', 'Servicios'] },
      { codigo: 'Ébano 02', sector: 'Clínica de psicología',    tags: ['Salud', 'Terapia'] },
      { codigo: 'Ébano 03', sector: 'Consultoría empresarial',  tags: ['B2B', 'Consultoría'] },
      { codigo: 'Ébano 04', sector: 'Estudio de arquitectura',  tags: ['Arquitectura', 'Diseño'] },
    ],
  },
  {
    num: '02',
    slug: 'tienda',
    tipo: 'Tienda Online',
    descripcion: 'E-commerce con catálogo, carrito y pasarela de pago. Desde productos artesanales hasta colecciones de temporada.',
    variant: 'shop',
    proyectos: [
      { codigo: 'Nácar 01', sector: 'Joyería artesanal',   tags: ['Moda', 'Artesanía'] },
      { codigo: 'Nácar 02', sector: 'Cosmética natural',   tags: ['Belleza', 'Eco'] },
      { codigo: 'Nácar 03', sector: 'Decoración hogar',    tags: ['Lifestyle', 'Retail'] },
      { codigo: 'Nácar 04', sector: 'Moda sostenible',     tags: ['Moda', 'Ecommerce'] },
    ],
  },
  {
    num: '03',
    slug: 'landing',
    tipo: 'Landing Page',
    descripcion: 'Una sola página, un solo objetivo. Ideal para lanzar cursos, servicios o productos digitales con máxima conversión.',
    variant: 'landing',
    proyectos: [
      { codigo: 'Cobre 01', sector: 'Programa de formación',    tags: ['Formación', 'Digital'] },
      { codigo: 'Cobre 02', sector: 'Consultoría express',      tags: ['Servicios', 'Lead gen'] },
      { codigo: 'Cobre 03', sector: 'Lanzamiento de producto',  tags: ['SaaS', 'Tech'] },
      { codigo: 'Cobre 04', sector: 'Evento o masterclass',     tags: ['Evento', 'Conversión'] },
    ],
  },
  {
    num: '04',
    slug: 'portfolio',
    tipo: 'Portfolio & Marca Personal',
    descripcion: 'Para fotógrafos, diseñadores, coaches y cualquier profesional que quiera mostrar su trabajo y atraer a sus clientes ideales.',
    variant: 'portfolio',
    proyectos: [
      { codigo: 'Cuarzo 01', sector: 'Fotógrafa de boda',    tags: ['Fotografía', 'Creativos'] },
      { codigo: 'Cuarzo 02', sector: 'Diseñadora gráfica',   tags: ['Diseño', 'Portfolio'] },
      { codigo: 'Cuarzo 03', sector: 'Coach de vida',        tags: ['Coaching', 'Personal brand'] },
      { codigo: 'Cuarzo 04', sector: 'Nutricionista',        tags: ['Salud', 'Servicios'] },
    ],
  },
]

export default function ProyectosContent() {
  return (
    <div>
      {/* Nav inpage */}
      <nav className="sticky top-0 z-20 bg-white border-b border-cw-gray-9">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="scrollbar-none flex gap-0 overflow-x-auto">
            {categorias.map(cat => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-3.5 text-xs text-cw-gray-5 no-underline border-b-2 border-transparent hover:text-cw-black hover:border-cw-gray-4 transition-colors"
              >
                <span className="text-[10px] text-cw-gray-8 tracking-[0.06rem]">{cat.num}</span>
                {cat.tipo}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Categorías */}
      {categorias.map((cat, i) => (
        <section
          key={cat.num}
          id={cat.slug}
          className={`py-14 px-0 border-b border-cw-gray-9 scroll-mt-12 ${i % 2 === 0 ? 'bg-white' : 'bg-cw-gray-10'}`}
        >
          <div className="max-w-[1100px] mx-auto px-8 mb-8">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-[10px] text-cw-gray-5 tracking-[0.16rem]">{cat.num}</span>
              <h2 className="text-lg font-medium text-cw-black tracking-[-0.02rem]">{cat.tipo}</h2>
            </div>
            <p className="text-sm text-cw-gray-6 leading-7 max-w-[480px] mt-1">{cat.descripcion}</p>
          </div>

          {/* Carrusel */}
          <CarruselProyectos
            proyectos={cat.proyectos}
            variant={cat.variant}
            tipo={cat.tipo}
            fadeColor={i % 2 === 0 ? '#ffffff' : '#f9f9f7'}
          />
        </section>
      ))}

      {/* CTA herramienta */}
      <section className="bg-cw-black py-14 px-8">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-2">SIGUIENTE PASO</p>
            <h2 className="text-cw-white text-lg md:text-xl font-medium tracking-[-0.03rem] mb-2">
              Solo te falta saber cuál es el tuyo.
            </h2>
            <p className="text-cw-gray-6 text-sm leading-7 max-w-[400px]">
              Ya tienes los modelos en la cabeza. Ahora responde tres preguntas sobre tu negocio y presupuesto — te decimos exactamente qué tipo de web necesitas y qué incluiría.
            </p>
          </div>
          <Link
            href="/planifica"
            className="inline-flex items-center gap-1.5 bg-transparent text-cw-gray-8 border border-cw-gray-5 text-sm font-medium px-5 py-2.5 rounded no-underline tracking-[0.02em] hover:border-cw-gray-7 hover:text-cw-white transition-colors flex-shrink-0"
          >
            Encontrar mi modelo →
          </Link>
        </div>
      </section>

      {/* Más proyectos en marcha */}
      <section className="bg-cw-gray-10 py-16 px-8">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center py-20 border border-cw-gray-9 rounded-lg bg-white">
          <p className="text-lg font-medium text-cw-black mb-2.5">Más modelos en camino.</p>
          <p className="text-sm text-cw-gray-6 leading-7 max-w-[360px] mb-7">
            Estamos preparando más referencias.
            Mientras tanto, si ves algo que te inspire o quieres saber cómo trabajamos,
            cuéntanos tu proyecto.
          </p>
          <Link href="/contacto" className="inline-block bg-cw-black text-cw-white text-sm font-medium px-6 py-2.5 rounded no-underline hover:opacity-80 transition-opacity">
            Hablemos →
          </Link>
        </div>
      </section>
    </div>
  )
}
