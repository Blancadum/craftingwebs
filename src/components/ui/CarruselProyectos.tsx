'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import ProyectoCard, { Mockup } from './ProyectoCard'

type Variant = 'corporate' | 'shop' | 'landing' | 'portfolio'

interface Proyecto {
  codigo: string
  sector: string
  tags: string[]
}

interface Props {
  proyectos: Proyecto[]
  variant: Variant
  tipo: string
  fadeColor: string
}

const paletas = [
  { name: 'Grafito', colors: ['#111111', '#f5f5f3'] },
  { name: 'Bosque', colors: ['#1a3a2a', '#f0f4f0'] },
  { name: 'Ciruela', colors: ['#2a1533', '#f7f0f9'] },
  { name: 'Terracota', colors: ['#3a1a0a', '#f9f2ee'] },
  { name: 'Marino', colors: ['#0a1a3a', '#f0f4f9'] },
  { name: 'Desierto', colors: ['#3a2a0a', '#f9f6ee'] },
]

export default function CarruselProyectos({ proyectos, variant, tipo, fadeColor }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [modal, setModal] = useState<Proyecto | null>(null)

  function slide(dir: -1 | 1) {
    scrollRef.current?.scrollBy({ left: dir * 308, behavior: 'smooth' })
  }

  return (
    <>
      {/* Carrusel con flechas laterales */}
      <div className="relative">

        {/* Flecha izquierda */}
        <button
          onClick={() => slide(-1)}
          aria-label="Anterior"
          className="absolute left-3 top-[45%] -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-cw-gray-9 shadow-sm flex items-center justify-center text-cw-gray-5 hover:text-cw-black hover:border-cw-gray-6 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Fades laterales */}
        <div
          className="carousel-fade absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ '--fade-color': fadeColor } as React.CSSProperties}
        />

        {/* Scroll */}
        <div
          ref={scrollRef}
          className="carousel-scroll flex gap-4 overflow-x-auto px-14"
        >
          {proyectos.map(p => (
            <ProyectoCard
              key={p.codigo}
              codigo={p.codigo}
              sector={p.sector}
              variant={variant}
              tags={p.tags}
              onClick={() => setModal(p)}
            />
          ))}
          <div className="flex-shrink-0 w-10" />
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => slide(1)}
          aria-label="Siguiente"
          className="absolute right-3 top-[45%] -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-cw-gray-9 shadow-sm flex items-center justify-center text-cw-gray-5 hover:text-cw-black hover:border-cw-gray-6 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-full max-w-[640px] shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Mockup ampliado */}
            <div className="w-full aspect-mockup">
              <Mockup variant={variant} />
            </div>

            {/* Info */}
            <div className="px-6 pt-5 pb-5 border-b border-cw-gray-9">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-cw-black tracking-[0.04rem]">{modal.codigo}</h3>
                  <p className="text-[11px] text-cw-gray-5 mt-0.5">{modal.sector}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {modal.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-cw-gray-5 bg-cw-gray-10 border border-cw-gray-9 rounded px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Paleta de colores */}
              <div>
                <p className="text-[10px] tracking-[0.1rem] text-cw-gray-6 mb-2.5 flex items-center gap-2">
                  PALETA DE COLOR
                  <span className="text-[10px] tracking-normal font-normal text-cw-gray-7 border border-cw-gray-9 rounded px-1.5 py-0.5">
                    próximamente
                  </span>
                </p>
                <div className="flex gap-2">
                  {paletas.map(pal => (
                    <button
                      key={pal.name}
                      title={pal.name}
                      disabled
                      className="flex rounded overflow-hidden border border-cw-gray-9 opacity-40 cursor-not-allowed"
                    >
                      <span className="block w-5 h-5" style={{ background: pal.colors[0] }} />
                      <span className="block w-5 h-5" style={{ background: pal.colors[1] }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div className="px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setModal(null)}
                className="text-[11px] text-cw-gray-6 hover:text-cw-gray-8 transition-colors"
              >
                Cerrar
              </button>
              <Link
                href={`/contacto?ref=${encodeURIComponent(modal.codigo)}&tipo=${encodeURIComponent(tipo)}`}
                className="inline-flex items-center gap-1.5 bg-cw-black text-cw-white text-sm font-medium px-5 py-2.5 rounded no-underline hover:opacity-80 transition-opacity"
              >
                Quiero este modelo →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
