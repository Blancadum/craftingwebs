'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'


const servicios = [
    'Web profesional',
    'Posicionamiento SEO',
    'Tienda online',
    'Identidad visual',
    'Estrategia digital',
    'Mantenimiento',
]

export default function Contacto() {
    const [selected, setSelected] = useState<string[]>([])
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const toggle = (s: string) =>
        setSelected((prev) =>
            prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
        )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const form = e.currentTarget
        const data = new FormData(form)
        data.append('servicios', selected.join(', '))
        data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY!)

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
        })

        if (res.ok) setSent(true)
        setLoading(false)
    }

    return (
        <main>
            <Navbar />

            <section style={{ background: '#111', padding: '56px 2rem 48px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        border: '0.5px solid #333', borderRadius: '100px',
                        padding: '5px 14px', marginBottom: '20px',
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#888780', display: 'inline-block' }} />
                        <span style={{ color: '#888780', fontSize: '11px', letterSpacing: '0.12rem' }}>TRABAJEMOS JUNTOS</span>
                    </div>
                    <h1 style={{
                        color: '#f5f5f3', fontSize: '36px', fontWeight: 500,
                        letterSpacing: '-0.05rem', lineHeight: 1.2, marginBottom: '12px',
                    }}>
                        No somos una agencia más.<br />
                        <span style={{ color: '#888780' }}>Somos tu equipo digital.</span>
                    </h1>
                    <p style={{ color: '#5f5e5a', fontSize: '14px', lineHeight: 1.7, maxWidth: '460px' }}>
                        Primera consulta gratuita y sin compromiso.
                        Te respondemos en menos de 24h.
                    </p>
                </div>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr' }}>
                <div style={{ background: '#f9f9f7', padding: '40px 32px', borderRight: '0.5px solid #e8e7e3' }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.16rem', color: '#888780', marginBottom: '20px' }}>CONTACTO DIRECTO</p>
                    {[
                        { label: 'EMAIL', val: 'hola@craftingwebs.es' },
                        { label: 'TELÉFONO', val: '+34 600 000 000' },
                        { label: 'UBICACIÓN', val: 'Estepona, Málaga — España' },
                    ].map((item) => (
                        <div key={item.label} style={{ marginBottom: '24px' }}>
                            <p style={{ fontSize: '11px', fontWeight: 500, color: '#444441', marginBottom: '4px', letterSpacing: '0.05rem' }}>{item.label}</p>
                            <p style={{ fontSize: '13px', color: '#888780' }}>{item.val}</p>
                        </div>
                    ))}

                    <div style={{ height: '0.5px', background: '#e8e7e3', margin: '24px 0' }} />

                    <p style={{ fontSize: '10px', letterSpacing: '0.16rem', color: '#888780', marginBottom: '16px' }}>CÓMO TRABAJAMOS</p>
                    {[
                        { n: '1', title: 'Escuchamos', desc: 'Entendemos tu negocio antes de proponer nada.' },
                        { n: '2', title: 'Proponemos', desc: 'Estrategia y presupuesto claro en 48h.' },
                        { n: '3', title: 'Ejecutamos', desc: 'Con plazos reales y comunicación constante.' },
                        { n: '4', title: 'Acompañamos', desc: 'No desaparecemos tras entregar.' },
                    ].map((p) => (
                        <div key={p.n} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                            <div style={{
                                width: 20, height: 20, borderRadius: '50%', background: '#111',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}>
                                <span style={{ color: '#f5f5f3', fontSize: '9px', fontWeight: 500 }}>{p.n}</span>
                            </div>
                            <div>
                                <p style={{ fontSize: '12px', fontWeight: 500, color: '#444441', marginBottom: '2px' }}>{p.title}</p>
                                <p style={{ fontSize: '12px', color: '#888780', lineHeight: 1.5 }}>{p.desc}</p>
                            </div>
                        </div>
                    ))}

                    <div style={{
                        marginTop: '24px', background: '#fff', border: '0.5px solid #e8e7e3',
                        borderRadius: '8px', padding: '16px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#444441' }} />
                            <span style={{ fontSize: '12px', fontWeight: 500, color: '#444441' }}>Plazas disponibles</span>
                        </div>
                        <p style={{ fontSize: '11px', color: '#888780' }}>Aceptando proyectos para Q2 2025</p>
                    </div>
                </div>

                <div style={{ background: '#fff', padding: '40px 36px' }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.16rem', color: '#888780', marginBottom: '24px' }}>CUÉNTANOS TU SITUACIÓN</p>

                    {sent ? (
                        <div style={{ textAlign: 'center', padding: '48px 0' }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: '50%', background: '#111',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                            }}>
                                <span style={{ color: '#f5f5f3', fontSize: '18px' }}>✓</span>
                            </div>
                            <p style={{ fontSize: '15px', fontWeight: 500, color: '#111', marginBottom: '8px' }}>Solicitud recibida</p>
                            <p style={{ fontSize: '13px', color: '#888780' }}>Te contactamos en menos de 24h con una propuesta personalizada.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {[
                                    { name: 'nombre', label: 'TU NOMBRE', placeholder: 'Nombre y apellidos' },
                                    { name: 'profesion', label: 'PROFESIÓN', placeholder: 'Ej: abogada, arquitecto...' },
                                ].map((f) => (
                                    <div key={f.name}>
                                        <label style={{ fontSize: '11px', color: '#888780', letterSpacing: '0.05rem', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                                        <input name={f.name} placeholder={f.placeholder} required style={{
                                            width: '100%', background: '#f9f9f7', border: '0.5px solid #e8e7e3',
                                            borderRadius: '6px', padding: '10px 14px', fontSize: '13px', color: '#111', outline: 'none',
                                        }} />
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {[
                                    { name: 'email', label: 'EMAIL PROFESIONAL', placeholder: 'tu@email.com', type: 'email' },
                                    { name: 'telefono', label: 'TELÉFONO', placeholder: '+34 600 000 000', type: 'tel' },
                                ].map((f) => (
                                    <div key={f.name}>
                                        <label style={{ fontSize: '11px', color: '#888780', letterSpacing: '0.05rem', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                                        <input name={f.name} type={f.type} placeholder={f.placeholder} required style={{
                                            width: '100%', background: '#f9f9f7', border: '0.5px solid #e8e7e3',
                                            borderRadius: '6px', padding: '10px 14px', fontSize: '13px', color: '#111', outline: 'none',
                                        }} />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label style={{ fontSize: '11px', color: '#888780', letterSpacing: '0.05rem', display: 'block', marginBottom: '10px' }}>¿QUÉ NECESITAS?</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {servicios.map((s) => (
                                        <div key={s} onClick={() => toggle(s)} style={{
                                            display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
                                        }}>
                                            <div style={{
                                                width: 16, height: 16, borderRadius: '3px', flexShrink: 0,
                                                border: '0.5px solid #d3d1c7',
                                                background: selected.includes(s) ? '#111' : '#f9f9f7',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                {selected.includes(s) && <span style={{ color: '#fff', fontSize: '10px' }}>✓</span>}
                                            </div>
                                            <span style={{ fontSize: '12px', color: '#888780' }}>{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ fontSize: '11px', color: '#888780', letterSpacing: '0.05rem', display: 'block', marginBottom: '6px' }}>INVERSIÓN PREVISTA</label>
                                <select name="presupuesto" style={{
                                    width: '100%', background: '#f9f9f7', border: '0.5px solid #e8e7e3',
                                    borderRadius: '6px', padding: '10px 14px', fontSize: '13px', color: '#111', outline: 'none',
                                }}>
                                    <option value="">Selecciona un rango</option>
                                    <option>Menos de 1.000 €</option>
                                    <option>1.000 € — 3.000 €</option>
                                    <option>3.000 € — 6.000 €</option>
                                    <option>Más de 6.000 €</option>
                                    <option>Aún no lo sé</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ fontSize: '11px', color: '#888780', letterSpacing: '0.05rem', display: 'block', marginBottom: '6px' }}>¿QUÉ TE DIFERENCIA EN TU SECTOR?</label>
                                <textarea name="mensaje" rows={4} placeholder="Cuéntanos qué haces, a quién ayudas y qué te hace único..." required style={{
                                    width: '100%', background: '#f9f9f7', border: '0.5px solid #e8e7e3',
                                    borderRadius: '6px', padding: '10px 14px', fontSize: '13px', color: '#111',
                                    outline: 'none', resize: 'none', fontFamily: 'inherit', lineHeight: 1.6,
                                }} />
                            </div>

                            <div style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                paddingTop: '16px', borderTop: '0.5px solid #f0efeb',
                            }}>
                                <span style={{ fontSize: '11px', color: '#b4b2a9', maxWidth: '180px', lineHeight: 1.5 }}>
                                    Primera consulta gratuita y sin compromiso.
                                </span>
                                <button type="submit" disabled={loading} style={{
                                    background: '#111', color: '#f5f5f3', fontSize: '13px', fontWeight: 500,
                                    padding: '11px 28px', borderRadius: '4px', border: 'none', cursor: 'pointer',
                                    letterSpacing: '0.02em', opacity: loading ? 0.6 : 1,
                                }}>
                                    {loading ? 'Enviando...' : 'Solicitar consulta →'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}