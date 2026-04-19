interface BadgeProps {
    text: string
}

export default function Badge({ text }: BadgeProps) {
    return (
        <div className="inline-flex items-center gap-2 border border-cw-gray-3 rounded-full px-3.5 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cw-gray-6 inline-block" />
            <span className="text-cw-gray-6 text-[11px] tracking-[0.12rem]">
                {text}
            </span>
        </div>
    )
}
