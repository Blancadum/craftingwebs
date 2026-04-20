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
      {/* Flechas */}
      <div className="flex justify-end gap-2 px-8 mb-4">
        <button
          onClick={() => slide(-1)}
          aria-label="Anterior"
          className="w-8 h-8 flex items-center justify-center rounded border border-cw-gray-9 text-cw-gray-6 hover:border-cw-gray-5 hover:text-cw-black transition-colors text-sm leading-none"
        >
          ←
        </button>
        <button
          onClick={() => slide(1)}
          aria-label="Siguiente"
          className="w-8 h-8 flex items-center justify-center rounded border border-cw-gray-9 text-cw-gray-6 hover:border-cw-gray-5 hover:text-cw-black transition-colors text-sm leading-none"
        >
          →
        </button>
      </div>

      {/* Carrusel */}
      <div className="relative">
        <div
          className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
          style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
        />
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-8"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
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
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-full max-w-[640px] shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Mockup ampliado */}
            <div className="w-full" style={{ aspectRatio: '360/220' }}>
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
                      <span style={{ width: 20, height: 20, background: pal.colors[0], display: 'block' }} />
                      <span style={{ width: 20, height: 20, background: pal.colors[1], display: 'block' }} />
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
