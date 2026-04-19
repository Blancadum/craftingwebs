import Link from 'next/link'

interface Proyecto {
    titulo: string
    sector: string
    descripcion: string
    tags: string[]
    url?: string
}

const proyectos: Proyecto[] = [
    // Añade aquí tus proyectos cuando los tengas:
    // {
    //     titulo: 'Nombre del proyecto',
    //     sector: 'Sector · Tipo de trabajo',
    //     descripcion: 'Descripción breve de qué se hizo y qué resultado tuvo.',
    //     tags: ['Next.js', 'SEO', 'Diseño UI'],
    //     url: 'https://...',
    // },
]

export default function ProyectosContent() {
    if (proyectos.length === 0) {
        return (
            <section className="bg-cw-gray-10 py-16 px-8 md:py-[72px]">
                <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center py-20 border border-cw-gray-9 rounded-lg bg-white">
                    <p className="text-lg font-medium text-cw-black mb-2.5">Proyectos en camino.</p>
                    <p className="text-sm text-cw-gray-6 leading-7 max-w-[360px] mb-7">
                        Estamos preparando los casos de estudio.
                        Mientras tanto, si quieres ver cómo trabajamos,
                        cuéntanos tu proyecto.
                    </p>
                    <Link href="/contacto" className="inline-block bg-cw-black text-cw-white text-sm font-medium px-6 py-2.5 rounded no-underline">
                        Hablemos →
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-white py-16 px-8 md:py-[72px]">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cw-gray-9 border border-cw-gray-9 rounded-lg overflow-hidden">
                    {proyectos.map((p) => (
                        <div key={p.titulo} className="bg-white p-9 flex flex-col gap-4 min-h-[280px]">
                            <span className="text-[10px] tracking-[0.12rem] text-cw-gray-6">{p.sector}</span>
                            <h2 className="text-lg font-medium text-cw-black leading-snug">{p.titulo}</h2>
                            <p className="text-sm text-cw-gray-6 leading-7">{p.descripcion}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.tags.map((tag) => (
                                    <span key={tag} className="text-[11px] text-cw-gray-5 bg-cw-gray-10 border border-cw-gray-9 rounded px-2.5 py-0.5">{tag}</span>
                                ))}
                            </div>
                            {p.url && (
                                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-cw-black font-medium no-underline mt-2 inline-block">
                                    Ver proyecto →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
