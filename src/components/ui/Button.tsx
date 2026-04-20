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
                    ? 'inline-flex items-center gap-2 bg-transparent text-cw-gray-8 border border-cw-gray-4 text-xs font-medium px-6 py-2.5 rounded-full no-underline tracking-[0.06em] hover:border-cw-gray-7 hover:text-cw-white transition-colors'
                    : 'inline-flex items-center gap-2 bg-transparent text-cw-gray-5 text-xs font-normal px-0 py-2.5 no-underline tracking-[0.04em] hover:text-cw-gray-8 transition-colors'
            }
        >
            {label}
        </Link>
    )
}
