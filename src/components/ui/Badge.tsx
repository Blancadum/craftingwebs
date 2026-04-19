interface BadgeProps {
    text: string
}

export default function Badge({ text }: BadgeProps) {
    return (
        <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '0.5px solid #333', borderRadius: '100px',
            padding: '5px 14px', marginBottom: '20px',
        }}>
            <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#888780', display: 'inline-block',
            }} />
            <span style={{ color: '#888780', fontSize: '11px', letterSpacing: '0.12rem' }}>
                {text}
            </span>
        </div>
    )
}