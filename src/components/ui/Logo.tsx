interface LogoProps {
    size?: number
    tail?: boolean
}

export default function Logo({ size = 28, tail = false }: LogoProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
            <polyline points="2,26 9,6 16,20 23,6 30,26"
                stroke="#b4b2a9" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="2" cy="26" r="2" fill="#888780" />
            <circle cx="30" cy="26" r="2" fill="#888780" />
            {tail && <>
                <path d="M30,26 Q36,18 35,8"
                    stroke="#5f5e5a" strokeWidth="1.2"
                    strokeDasharray="2.5,2" strokeLinecap="round" fill="none" />
                <circle cx="35" cy="8" r="1.8" fill="#888780" />
            </>}
        </svg>
    )
}
