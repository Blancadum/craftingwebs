import Badge from './Badge'

interface PageHeroProps {
    badge: string
    title: string
    subtitle: string
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
    return (
        <section className="bg-cw-black min-h-[60vh] py-16 px-8 md:py-[72px] md:px-8">
            <div className="max-w-[1100px] mx-auto">
                <Badge text={badge} />
                <h1 className="text-cw-white text-4xl md:text-[42px] font-medium tracking-[-0.05rem]">
                    {title}<br />
                    <span className="text-cw-gray-6">{subtitle}</span>
                </h1>
            </div>
        </section>
    )
}
