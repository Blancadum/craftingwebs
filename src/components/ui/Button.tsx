import Link from 'next/link'

interface ButtonProps {
    label: string
    href: string
    variant?: 'primary' | 'ghost'
}

export default function Button({ label, href, variant = 'primary' }: ButtonProps) {
    const isPrimary = variant === 'primary'

    return (
        <Link
            href={href}
            className={
                isPrimary
                    ? 'inline-flex items-center gap-1.5 bg-transparent text-cw-gray-8 border border-cw-gray-5 text-sm font-medium px-5 py-2.5 rounded no-underline tracking-[0.02em] hover:border-cw-gray-7 hover:text-cw-white transition-colors'
                    : 'inline-flex items-center gap-1.5 bg-transparent text-cw-gray-3 text-sm font-normal px-0 py-2.5 no-underline hover:text-cw-gray-9 transition-colors'
            }
        >
            {label}
        </Link>
    )
}
