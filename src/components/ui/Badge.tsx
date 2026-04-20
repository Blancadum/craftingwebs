interface BadgeProps {
    text: string
}

export default function Badge({ text }: BadgeProps) {
    return (
        <p className="text-[10px] tracking-[0.22rem] text-cw-gray-5 uppercase mb-7">
            {text}
        </p>
    )
}
