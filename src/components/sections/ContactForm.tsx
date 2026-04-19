'use client'

import { useState } from 'react'

const serviciosList = [
    'Web profesional',
    'Posicionamiento SEO',
    'Tienda online',
    'Identidad visual',
    'Estrategia digital',
    'Mantenimiento',
]

const contactInfo = [
    { label: 'EMAIL', val: 'hola@craftingwebs.es' },
    { label: 'UBICACIÓN', val: 'Estepona, Málaga — España' },
]

const steps = [
    { n: '1', title: 'Escuchamos', desc: 'Entendemos tu negocio antes de proponer nada.' },
    { n: '2', title: 'Proponemos', desc: 'Estrategia y presupuesto claro en 48h.' },
    { n: '3', title: 'Ejecutamos', desc: 'Con plazos reales y comunicación constante.' },
    { n: '4', title: 'Acompañamos', desc: 'No desaparecemos tras entregar.' },
]

const formFields = [
    { name: 'nombre', label: 'TU NOMBRE', placeholder: 'Nombre y apellidos' },
    { name: 'profesion', label: 'PROFESIÓN', placeholder: 'Ej: abogada, arquitecto...' },
    { name: 'email', label: 'EMAIL PROFESIONAL', placeholder: 'tu@email.com', type: 'email' },
]

export default function ContactForm() {
    const [selected, setSelected] = useState<string[]>([])
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const toggle = (srv: string) =>
        setSelected((prev) =>
            prev.includes(srv) ? prev.filter((x) => x !== srv) : [...prev, srv]
        )

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        const form = e.currentTarget
        const data = new FormData(form)
        data.append('servicios', selected.join(', '))
        data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY!)

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
        })

        if (res.ok) {
            setSent(true)
        } else {
            setError(true)
        }
        setLoading(false)
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">
            <div className="bg-cw-gray-10 p-8 md:p-10 border-b md:border-b-0 md:border-r border-cw-gray-9">
                <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-5">CONTACTO DIRECTO</p>
                {contactInfo.map((item) => (
                    <div key={item.label} className="mb-6">
                        <p className="text-[11px] font-medium text-cw-gray-4 mb-1 tracking-[0.05rem]">{item.label}</p>
                        <p className="text-sm text-cw-gray-6">{item.val}</p>
                    </div>
                ))}

                <div className="h-px bg-cw-gray-9 my-6" />

                <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-4">CÓMO TRABAJAMOS</p>
                {steps.map((p) => (
                    <div key={p.n} className="flex gap-3 mb-4">
                        <div className="w-5 h-5 rounded-full bg-cw-black flex items-center justify-center shrink-0">
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

            <div className="bg-white p-8 md:p-10">
                <p className="text-[10px] tracking-[0.16rem] text-cw-gray-6 mb-6">CUÉNTANOS TU SITUACIÓN</p>

                {sent ? (
                    <div className="text-center py-12">
                        <div className="w-10 h-10 rounded-full bg-cw-black flex items-center justify-center mx-auto mb-4">
                            <span className="text-cw-white text-lg">✓</span>
                        </div>
                        <p className="text-[15px] font-medium text-cw-black mb-2">Solicitud recibida</p>
                        <p className="text-sm text-cw-gray-6">Te contactamos en menos de 24h con una propuesta personalizada.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {formFields.map((f) => (
                                <div key={f.name}>
                                    <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">{f.label}</label>
                                    <input
                                        name={f.name}
                                        type={f.type}
                                        placeholder={f.placeholder}
                                        required
                                        className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">¿QUÉ NECESITAS?</label>
                            <div className="grid grid-cols-2 gap-2">
                                {serviciosList.map((srv) => (
                                    <div key={srv} onClick={() => toggle(srv)} className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-4 h-4 rounded-[3px] shrink-0 border border-cw-gray-8 flex items-center justify-center transition-colors"
                                            style={{ background: selected.includes(srv) ? '#111111' : '#f9f9f7' }}
                                        >
                                            {selected.includes(srv) && <span className="text-white text-[10px]">✓</span>}
                                        </div>
                                        <span className="text-xs text-cw-gray-6">{srv}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">INVERSIÓN PREVISTA</label>
                            <select
                                name="presupuesto"
                                className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none"
                            >
                                <option value="">Selecciona un rango</option>
                                <option>Menos de 1.000 €</option>
                                <option>1.000 € — 3.000 €</option>
                                <option>3.000 € — 6.000 €</option>
                                <option>Más de 6.000 €</option>
                                <option>Aún no lo sé</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-[11px] text-cw-gray-6 tracking-[0.05rem] block mb-1.5">¿QUÉ TE DIFERENCIA EN TU SECTOR?</label>
                            <textarea
                                name="mensaje"
                                rows={4}
                                placeholder="Cuéntanos qué haces, a quién ayudas y qué te hace único..."
                                required
                                className="w-full bg-cw-gray-10 border border-cw-gray-9 rounded-md px-3.5 py-2.5 text-sm text-cw-black outline-none resize-none font-[inherit] leading-relaxed"
                            />
                        </div>

                        {error && (
                            <p className="text-xs text-red-500">
                                Ha habido un error al enviar. Inténtalo de nuevo o escríbenos directamente a hola@craftingwebs.es.
                            </p>
                        )}

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t border-[#f0efeb] gap-4">
                            <span className="text-[11px] text-cw-gray-7 max-w-[180px] leading-relaxed">
                                Primera consulta gratuita y sin compromiso.
                            </span>
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-cw-black text-cw-white text-sm font-medium px-7 py-3 rounded border-none cursor-pointer tracking-[0.02em] disabled:opacity-60"
                            >
                                {loading ? 'Enviando...' : 'Solicitar consulta →'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}
