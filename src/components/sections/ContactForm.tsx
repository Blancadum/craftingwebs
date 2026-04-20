'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const extras = [
  { id: 'seo',           label: 'SEO avanzado',            desc: 'Estrategia on-page + técnico completa',   precio: 500 },
  { id: 'blog',          label: 'Blog de contenidos',      desc: 'CMS para publicar artículos',             precio: 300 },
  { id: 'multilingue',   label: 'Web en dos idiomas',      desc: 'Versión completa en un segundo idioma',   precio: 450 },
  { id: 'analytics',     label: 'Analytics + Tag Manager', desc: 'Setup y configuración de medición',       precio: 150 },
  { id: 'reservas',      label: 'Sistema de reservas',     desc: 'Calendario y citas online integrado',     precio: 400 },
  { id: 'copywriting',   label: 'Copywriting',             desc: 'Textos optimizados para conversión',      precio: 350 },
  { id: 'mantenimiento', label: 'Mantenimiento anual',     desc: 'Actualizaciones, backups y soporte',      precio: 600 },
  { id: 'fotografia',    label: 'Fotografía profesional',  desc: 'Sesión fotográfica para la web',          precio: 800 },
]

const serviciosList = [
  'Web profesional', 'Posicionamiento SEO', 'Tienda online',
  'Identidad visual', 'Estrategia digital', 'Mantenimiento',
]

const contactInfo = [
  { label: 'EMAIL', val: 'hola@craftingwebs.es' },
  { label: 'UBICACIÓN', val: 'España — 100% online' },
]

const steps = [
  { n: '1', title: 'Escuchamos',   desc: 'Entendemos tu negocio antes de proponer nada.' },
  { n: '2', title: 'Proponemos',   desc: 'Estrategia y presupuesto claro en 48h.' },
  { n: '3', title: 'Ejecutamos',   desc: 'Con plazos reales y comunicación constante.' },
  { n: '4', title: 'Acompañamos',  desc: 'No desaparecemos tras entregar.' },
]

function formatEuros(n: number) {
  return n.toLocaleString('es-ES') + ' €'
}

export default function ContactForm() {
  const params = useSearchParams()
  const ref   = params.get('ref')
  const tipo  = params.get('tipo')
  const min   = parseInt(params.get('min') || '0')
  const max   = parseInt(params.get('max') || '0')
  const hasModel  = !!(ref && tipo)          // viene del catálogo o de planifica
  const hasBudget = !!(min && max)           // solo cuando viene de planifica (lleva rango)

  const [selectedServicios, setSelectedServicios] = useState<string[]>([])
  const [selectedExtras, setSelectedExtras]       = useState<string[]>([])
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(false)

  const toggleServicio = (s: string) =>
    setSelectedServicios(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s])

  const toggleExtra = (id: string) =>
    setSelectedExtras(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])

  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const e = extras.find(x => x.id === id)
    return sum + (e?.precio ?? 0)
  }, 0)

  const totalMin = min + extrasTotal
  const totalMax = max + extrasTotal

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('servicios',       selectedServicios.join(', '))
    data.append('extras',          selectedExtras.map(id => extras.find(x => x.id === id)?.label).join(', '))
    data.append('extras_importe',  extrasTotal > 0 ? `+${formatEuros(extrasTotal)}` : 'Ninguno')
    if (hasModel) {
      data.append('modelo_seleccionado', `${tipo} — ${ref}`)
    }
    if (hasBudget) {
      data.append('presupuesto_base',  `${formatEuros(min)} — ${formatEuros(max)}`)
      data.append('presupuesto_total', `${formatEuros(totalMin)} — ${formatEuros(totalMax)}`)
    }
    data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY!)

    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
    if (res.ok) setSent(true)
    else setError(true)
    setLoading(false)
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">

      {/* ── Columna izquierda ── */}
      <div className="bg-cw-gray-10 p-8 md:p-10 border-b md:border-b-0 md:border-r border-cw-gray-9">
        <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-5">CONTACTO DIRECTO</p>
        {contactInfo.map(item => (
          <div key={item.label} className="mb-6">
            <p className="text-[11px] font-medium text-cw-gray-4 mb-1 tracking-[0.05rem]">{item.label}</p>
            <p className="text-sm text-cw-gray-6">{item.val}</p>
          </div>
        ))}

        <div className="h-px bg-cw-gray-9 my-6" />

        <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-4">CÓMO TRABAJAMOS</p>
        {steps.map(p => (
          <div key={p.n} className="flex gap-3 mb-4">
            <div className="w-5 h-5 rounded-full bg-cw-gray-3 flex items-center justify-center shrink-0">
              <span className="text-cw-white text-[9px] font-medium">{p.n}</span>
            </div>
            <div>
              <p className="text-xs font-medium text-cw-gray-4 mb-0.5">{p.title}</p>
              <p className="text-xs text-cw-gray-6 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}

        <div className="mt-6 bg-white border border-cw-gray-9 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-cw-gray-4" />
            <span className="text-xs font-medium text-cw-gray-4">Plazas disponibles</span>
          </div>
          <p className="text-[11px] text-cw-gray-6">Aceptando proyectos para Q2 2026</p>
        </div>
      </div>

      {/* ── Columna derecha ── */}
      <div className="bg-white p-8 md:p-10">

        {sent ? (
          <div className="text-center py-12">
            <div className="w-10 h-10 rounded-full bg-cw-black flex items-center justify-center mx-auto mb-4">
              <span className="text-cw-white text-lg">✓</span>
            </div>
            <p className="text-[15px] font-medium text-cw-black mb-2">Solicitud recibida</p>
            <p className="text-sm text-cw-gray-6">Te contactamos en menos de 24h con una propuesta personalizada.</p>
          </div>
        ) : (
          <>
            {/* CTA catálogo — prominente, bloquea el formulario si no hay modelo */}
            {!hasModel && (
              <a
                href="/catalogo"
                className="group block bg-cw-black rounded-lg p-6 no-underline mb-8 hover:opacity-90 transition-opacity"
              >
                <p className="text-[10px] tracking-[0.18rem] text-cw-gray-5 mb-3">ANTES DE ESCRIBIRNOS</p>
                <p className="text-[17px] font-medium text-cw-white leading-snug mb-2">
                  ¿Tienes algún ejemplo que te inspire?
                </p>
                <p className="text-sm text-cw-gray-6 leading-[1.8] mb-5">
                  Elige un modelo del catálogo como referencia visual. Así podemos darte una propuesta mucho más precisa desde el primer contacto.
                </p>
                <span className="inline-flex items-center gap-2 text-xs text-cw-gray-7 tracking-[0.08rem] group-hover:text-cw-white transition-colors">
                  Ir al catálogo →
                </span>
              </a>
            )}

            <form onSubmit={handleSubmit} className={`flex flex-col gap-6 ${!hasModel ? 'opacity-40 pointer-events-none select-none' : ''}`}>

            {/* Modelo seleccionado (viene del catálogo o de planifica) */}
            {hasModel && (
              <div className="bg-cw-gray-10 border border-cw-gray-9 rounded-lg p-4">
                <p className="text-[10px] tracking-[0.12rem] text-cw-gray-6 mb-2">MODELO SELECCIONADO</p>
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-sm font-medium text-cw-black">{tipo}</p>
                    <p className="text-[11px] text-cw-gray-6 mt-0.5">Referencia: {ref}</p>
                  </div>
                  {hasBudget && (
                    <div className="text-right">
                      <p className="text-[10px] text-cw-gray-6">Inversión base</p>
                      <p className="text-xs font-medium text-cw-black">{formatEuros(min)} — {formatEuros(max)}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Datos personales */}
            <div>
              <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-3">TUS DATOS</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { name: 'nombre',    label: 'NOMBRE',    placeholder: 'Nombre y apellidos' },
                  { name: 'profesion', label: 'PROFESIÓN', placeholder: 'Ej: abogada, arquitecto…' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">{f.label}</label>
                    <input name={f.name} placeholder={f.placeholder} required
                      className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none" />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">EMAIL PROFESIONAL</label>
                  <input name="email" type="email" placeholder="tu@email.com" required
                    className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none" />
                </div>
              </div>
            </div>

            {/* Tu propuesta */}
            <div>
              <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-3">TU PROYECTO</p>
              <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">
                CUÉNTANOS CON TUS PALABRAS QUÉ BUSCAS
              </label>
              <textarea name="propuesta" rows={3} required
                placeholder="Describe tu negocio, a quién va dirigido y qué quieres conseguir con la web…"
                className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none resize-none font-[inherit] leading-relaxed" />
            </div>

            {/* Webs de referencia */}
            <div>
              <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">
                WEBS QUE TE GUSTEN COMO REFERENCIA VISUAL <span className="text-cw-gray-8">(opcional)</span>
              </label>
              <p className="text-[11px] text-cw-gray-7 mb-2.5 leading-relaxed">
                Si no tienes palabras para describir el estilo, comparte hasta 3 URLs de webs que te inspiren.
              </p>
              <div className="flex flex-col gap-2">
                {['ref_web_1', 'ref_web_2', 'ref_web_3'].map((name, i) => (
                  <input key={name} name={name} type="url" placeholder={`https://ejemplo${i + 1}.com`}
                    className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none" />
                ))}
              </div>
            </div>

            {/* Servicios que necesita */}
            <div>
              <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-2">¿QUÉ NECESITAS?</label>
              <div className="grid grid-cols-2 gap-2">
                {serviciosList.map(srv => (
                  <div key={srv} onClick={() => toggleServicio(srv)} className="flex items-center gap-2 cursor-pointer">
                    <div
                      className={`w-4 h-4 rounded-[3px] shrink-0 border border-cw-gray-8 flex items-center justify-center transition-colors ${selectedServicios.includes(srv) ? 'checkbox-on' : 'checkbox-off'}`}
                    >
                      {selectedServicios.includes(srv) && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    <span className="text-xs text-cw-gray-6">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extras con precio */}
            <div>
              <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-1">SERVICIOS ADICIONALES</p>
              <p className="text-[11px] text-cw-gray-7 mb-3 leading-relaxed">
                Selecciona los que quieras incluir. El importe se sumará al presupuesto base.
              </p>
              <div className="flex flex-col gap-2">
                {extras.map(ex => {
                  const active = selectedExtras.includes(ex.id)
                  return (
                    <div
                      key={ex.id}
                      onClick={() => toggleExtra(ex.id)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded border cursor-pointer transition-colors ${
                        active ? 'border-cw-gray-5 bg-cw-gray-10' : 'border-cw-gray-9 hover:border-cw-gray-7'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-[3px] shrink-0 border border-cw-gray-8 flex items-center justify-center transition-colors ${active ? 'checkbox-on' : 'checkbox-off'}`}
                        >
                          {active && <span className="text-white text-[10px]">✓</span>}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-cw-black">{ex.label}</p>
                          <p className="text-[11px] text-cw-gray-6">{ex.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-cw-gray-5 ml-4 shrink-0">+{ex.precio.toLocaleString('es-ES')} €</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Presupuesto estimado */}
            {hasBudget ? (
              <div className="bg-cw-gray-10 border border-cw-gray-9 rounded-lg p-4">
                <p className="text-[10px] tracking-[0.12rem] text-cw-gray-6 mb-3">INVERSIÓN ESTIMADA</p>
                <div className="flex flex-col gap-1.5 text-[11px]">
                  <div className="flex justify-between text-cw-gray-6">
                    <span>Base ({tipo})</span>
                    <span>{formatEuros(min)} — {formatEuros(max)}</span>
                  </div>
                  {selectedExtras.length > 0 && (
                    <div className="flex justify-between text-cw-gray-6">
                      <span>Extras seleccionados</span>
                      <span>+{formatEuros(extrasTotal)}</span>
                    </div>
                  )}
                  <div className="h-px bg-cw-gray-9 my-1" />
                  <div className="flex justify-between font-medium text-cw-black text-xs">
                    <span>Total estimado</span>
                    <span>{formatEuros(totalMin)} — {formatEuros(totalMax)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">INVERSIÓN PREVISTA</label>
                <select name="presupuesto"
                  className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none">
                  <option value="">Selecciona un rango</option>
                  <option>Menos de 1.000 €</option>
                  <option>1.000 € — 3.000 €</option>
                  <option>3.000 € — 6.000 €</option>
                  <option>Más de 6.000 €</option>
                  <option>Aún no lo sé</option>
                </select>
              </div>
            )}

            {/* Diferencial */}
            <div>
              <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">
                ¿QUÉ TE DIFERENCIA EN TU SECTOR? <span className="text-cw-gray-8">(opcional)</span>
              </label>
              <textarea name="mensaje" rows={3}
                placeholder="Cuéntanos qué haces, a quién ayudas y qué te hace único. Nos ayuda a diseñar algo que realmente te represente."
                className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none resize-none font-[inherit] leading-relaxed" />
            </div>

            {error && (
              <p className="text-xs text-red-500">
                Ha habido un error al enviar. Inténtalo de nuevo o escríbenos directamente a hola@craftingwebs.es.
              </p>
            )}

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t border-cw-gray-9 gap-4">
              <span className="text-[11px] text-cw-gray-7 max-w-[180px] leading-relaxed">
                Primera consulta gratuita y sin compromiso.
              </span>
              <button type="submit" disabled={loading}
                className="bg-cw-black text-cw-white text-sm font-medium px-7 py-3 rounded border-none cursor-pointer tracking-[0.02em] disabled:opacity-60 hover:opacity-80 transition-opacity">
                {loading ? 'Enviando…' : 'Solicitar consulta →'}
              </button>
            </div>

          </form>
          </>
        )}
      </div>
    </section>
  )
}
