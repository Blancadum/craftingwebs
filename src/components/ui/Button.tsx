import Link from 'next/link'

interface ButtonProps {
    label: string
    href: string
    variant?: 'primary' | 'ghost'
}

export default function Button({ label, href, variant = 'primary' }: ButtonProps) {
    const isPrimary = variant === 'primary'

    return (
        <Link href={href} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: isPrimary ? '#f5f5f3' : 'transparent',
            color: isPrimary ? '#111' : '#888780',
            fontSize: '13px', fontWeight: isPrimary ? 500 : 400,
            padding: isPrimary ? '10px 22px' : '10px 0',
            borderRadius: isPrimary ? '4px' : '0',
            textDecoration: 'none', letterSpacing: '0.02em',
        }}>
            {label}
        </Link>
    )
}