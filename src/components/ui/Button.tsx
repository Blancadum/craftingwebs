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
                    ? 'inline-flex items-center gap-1.5 bg-cw-white text-cw-black text-sm font-medium px-5 py-2.5 rounded no-underline tracking-[0.02em]'
                    : 'inline-flex items-center gap-1.5 bg-transparent text-cw-gray-6 text-sm font-normal px-0 py-2.5 no-underline'
            }
        >
            {label}
        </Link>
    )
}
