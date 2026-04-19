import Link from 'next/link'

interface FooterColProps {
    label: string
    links: { label: string; href: string }[]
    external?: boolean
}

export default function FooterCol({ label, links, external }: FooterColProps) {
    return (
        <div>
            <span className="text-[10px] tracking-[0.16rem] text-cw-gray-4 mb-4 block">
                {label}
            </span>
            <div className="flex flex-col gap-2.5">
                {links.map((l) =>
                    external ? (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cw-gray-6 text-sm no-underline hover:text-cw-gray-4 transition-colors"
                        >
                            {l.label}
                        </a>
                    ) : (
                        <Link
                            key={l.label}
                            href={l.href}
                            className="text-cw-gray-6 text-sm no-underline hover:text-cw-gray-4 transition-colors"
                        >
                            {l.label}
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}
