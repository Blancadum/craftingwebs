interface SectionLabelProps {
    text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
    return (
        <p className="text-[10px] tracking-widest text-cw-gray-6 mb-4">
            {text.toUpperCase()}
        </p>
    )
}
