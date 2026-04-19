interface SectionLabelProps {
    text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
    return (
        <p style={{
            fontSize: '10px',
            letterSpacing: '0.16rem',
            color: '#888780',
            marginBottom: '16px',
        }}>
            {text.toUpperCase()}
        </p>
    )
}