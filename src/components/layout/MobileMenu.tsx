'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = ['Servicios', 'Proyectos', 'Nosotros']

export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="text-cw-gray-6 p-1"
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
                {open ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                        <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                )}
            </button>

            {open && (
                <div className="absolute top-14 left-0 right-0 bg-cw-black border-b border-cw-gray-2 px-8 py-4 flex flex-col gap-4">
                    {links.map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className="text-cw-gray-6 text-sm no-underline"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/contacto"
                        onClick={() => setOpen(false)}
                        className="text-cw-gray-6 text-sm no-underline"
                    >
                        Contacto
                    </Link>
                </div>
            )}
        </div>
    )
}
