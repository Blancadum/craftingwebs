'use client'

import { useState } from 'react'
import Link from 'next/link'

type RespuestaKey = 'objetivo' | 'negocio' | 'presupuesto'
type Respuestas = Partial<Record<RespuestaKey, string>>
type ResultKey = 'corporate' | 'shop' | 'landing-shop' | 'landing' | 'portfolio'

const pasos: { id: RespuestaKey; pregunta: string; opciones: { id: string; texto: string }[] }[] = [
  {
    id: 'objetivo',
    pregunta: '¿Cuál es tu objetivo principal?',
    opciones: [
      { id: 'A', texto: 'Generar contactos o consultas' },
      { id: 'B', texto: 'Vender productos online' },
      { id: 'C', texto: 'Lanzar un servicio o proyecto concreto' },
      { id: 'D', texto: 'Mostrar mi trabajo y atraer clientes' },
    ],
  },
  {
    id: 'negocio',
    pregunta: '¿Cómo describes tu negocio?',
    opciones: [
      { id: 'A', texto: 'Soy profesional autónomo (abogado, coach, terapeuta…)' },
      { id: 'B', texto: 'Tengo productos físicos o digitales que vender' },
      { id: 'C', texto: 'Ofrezco formación o servicios online' },
      { id: 'D', texto: 'Soy creativo (fotógrafo, diseñador, artista…)' },
    ],
  },
  {
    id: 'presupuesto',
    pregunta: '¿Cuánto quieres invertir?',
    opciones: [
      { id: 'A', texto: 'Menos de 1.000 €' },
      { id: 'B', texto: '1.000 € — 3.000 €' },
      { id: 'C', texto: '3.000 € — 6.000 €' },
      { id: 'D', texto: 'Más de 6.000 €' },
    ],
  },
]

const resultados: Record<ResultKey, {
  tipo: string
  codigo: string
  ejemplo: string
  descripcion: string
  incluye: string[]
  rango: string
  min: number
  max: number
}> = {
  corporate: {
    tipo: 'Web Corporativa',
    codigo: 'Ébano',
    ejemplo: 'Ébano 02',
    descripcion: 'Una web sólida y elegante que transmite autoridad y genera consultas cualificadas desde el primer día.',
    incluye: ['Diseño a medida', 'Páginas de servicios', 'Formulario de contacto', 'SEO básico', 'Optimización móvil'],
    rango: '1.500 € — 4.000 €',
    min: 1500,
    max: 4000,
  },
  shop: {
    tipo: 'Tienda Online',
    codigo: 'Nácar',
    ejemplo: 'Nácar 01',
    descripcion: 'E-commerce completo con catálogo, carrito y pasarela de pago. Listo para vender desde el día uno.',
    incluye: ['Catálogo de productos', 'Carrito y checkout', 'Pasarela de pago', 'Gestión de stock', 'SEO de producto'],
    rango: '3.000 € — 7.000 €',
    min: 3000,
    max: 7000,
  },
  'landing-shop': {
    tipo: 'Landing + Catálogo básico',
    codigo: 'Cobre',
    ejemplo: 'Cobre 03',
    descripcion: 'La forma más eficiente de empezar a vender sin una gran inversión. Una landing con productos clave y pago integrado.',
    incluye: ['Página de producto destacado', 'Enlace o formulario de compra', 'SEO básico', 'Optimización móvil'],
    rango: '800 € — 2.500 €',
    min: 800,
    max: 2500,
  },
  landing: {
    tipo: 'Landing Page',
    codigo: 'Cobre',
    ejemplo: 'Cobre 01',
    descripcion: 'Una sola página, un solo objetivo. Perfecta para lanzar algo rápido y medir resultados antes de escalar.',
    incluye: ['Diseño orientado a conversión', 'Formulario o CTA principal', 'SEO on-page', 'Optimización móvil'],
    rango: '600 € — 2.000 €',
    min: 600,
    max: 2000,
  },
  portfolio: {
    tipo: 'Portfolio & Marca Personal',
    codigo: 'Cuarzo',
    ejemplo: 'Cuarzo 01',
    descripcion: 'Un portfolio que trabaja por ti. Muestra tu trabajo, comunica quién eres y atrae a tus clientes ideales.',
    incluye: ['Galería de proyectos', 'Página de servicios', 'Bio y contacto', 'SEO básico'],
    rango: '1.000 € — 3.000 €',
    min: 1000,
    max: 3000,
  },
}

function calcularResultado(r: Respuestas): ResultKey {
  if (r.objetivo === 'D' || r.negocio === 'D') return 'portfolio'
  if (r.objetivo === 'B') {
    if (r.presupuesto === 'C' || r.presupuesto === 'D') return 'shop'
    return 'landing-shop'
  }
  if (r.objetivo === 'C' || r.negocio === 'C') return 'landing'
  return 'corporate'
}

export default function Configurador() {
  const [paso, setPaso] = useState(0)
  const [respuestas, setRespuestas] = useState<Respuestas>({})
  const [resultado, setResultado] = useState<ResultKey | null>(null)

  const pasoActual = pasos[paso]

  function responder(id: string) {
    const nuevas = { ...respuestas, [pasoActual.id]: id }
    setRespuestas(nuevas)

    if (paso < pasos.length - 1) {
      setPaso(paso + 1)
    } else {
      setResultado(calcularResultado(nuevas))
    }
  }

  function reiniciar() {
    setPaso(0)
    setRespuestas({})
    setResultado(null)
  }

  const res = resultado ? resultados[resultado] : null

  return (
    <div className="max-w-[600px] mx-auto">

      {!resultado ? (
        <div className="border border-cw-gray-9 rounded-lg overflow-hidden bg-white">

          {/* Progress */}
          <div className="px-8 py-4 border-b border-cw-gray-9 flex items-center justify-between">
            <div className="flex gap-2">
              {pasos.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i < paso ? 'w-8 bg-cw-black' : i === paso ? 'w-8 bg-cw-gray-5' : 'w-4 bg-cw-gray-9'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] tracking-[0.1rem] text-cw-gray-6">
              {paso + 1} / {pasos.length}
            </span>
          </div>

          {/* Pregunta */}
          <div className="px-8 pt-8 pb-6">
            <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-3">
              {pasoActual.id.toUpperCase()}
            </p>
            <h2 className="text-base font-medium text-cw-black mb-6 leading-snug">
              {pasoActual.pregunta}
            </h2>

            <div className="flex flex-col gap-2">
              {pasoActual.opciones.map(op => (
                <button
                  key={op.id}
                  onClick={() => responder(op.id)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded border border-cw-gray-9 text-left hover:border-cw-gray-6 hover:bg-cw-gray-10 transition-colors group"
                >
                  <span className="text-[10px] font-medium text-cw-gray-7 tracking-[0.08rem] w-4 flex-shrink-0">
                    {op.id}
                  </span>
                  <span className="text-sm text-cw-gray-4 group-hover:text-cw-black transition-colors">
                    {op.texto}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Back */}
          {paso > 0 && (
            <div className="px-8 pb-6">
              <button
                onClick={() => setPaso(paso - 1)}
                className="text-[11px] text-cw-gray-6 hover:text-cw-gray-8 transition-colors"
              >
                ← Volver
              </button>
            </div>
          )}
        </div>

      ) : res && (
        <div className="border border-cw-gray-9 rounded-lg overflow-hidden bg-white">

          {/* Header resultado */}
          <div className="bg-cw-black px-8 py-6">
            <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-1">TU RECOMENDACIÓN</p>
            <h2 className="text-cw-white text-xl font-medium tracking-[-0.03rem]">{res.tipo}</h2>
            <p className="text-cw-gray-6 text-[11px] mt-1">Referencia: <span className="text-cw-gray-8">{res.ejemplo}</span></p>
          </div>

          {/* Contenido */}
          <div className="px-8 py-6 border-b border-cw-gray-9">
            <p className="text-sm text-cw-gray-6 leading-7 mb-6">{res.descripcion}</p>

            <p className="text-[10px] tracking-[0.12rem] text-cw-gray-5 mb-3">INCLUYE</p>
            <ul className="flex flex-col gap-2 mb-6">
              {res.incluye.map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-cw-black">
                  <span className="w-1 h-1 rounded-full bg-cw-gray-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-cw-gray-10 border border-cw-gray-9 rounded px-4 py-3 inline-block">
              <p className="text-[10px] tracking-[0.1rem] text-cw-gray-6 mb-0.5">INVERSIÓN ESTIMADA</p>
              <p className="text-sm font-medium text-cw-black">{res.rango}</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="px-8 py-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <Link
              href={`/contacto?ref=${encodeURIComponent(res.ejemplo)}&tipo=${encodeURIComponent(res.tipo)}&min=${res.min}&max=${res.max}`}
              className="inline-flex items-center gap-1.5 bg-cw-black text-cw-white text-sm font-medium px-5 py-2.5 rounded no-underline hover:opacity-80 transition-opacity"
            >
              Quiero este modelo →
            </Link>
            <button
              onClick={reiniciar}
              className="text-[11px] text-cw-gray-6 hover:text-cw-black transition-colors"
            >
              Volver a empezar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
