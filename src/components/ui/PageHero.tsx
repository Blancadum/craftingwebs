import Badge from './Badge'

interface PageHeroProps {
    badge: string
    title: string
    subtitle: string
    description?: string
}

export default function PageHero({ badge, title, subtitle, description }: PageHeroProps) {
    return (
        <section className="bg-cw-black py-20 px-8 md:py-[96px]">
            <div className="max-w-[1100px] mx-auto">
                <Badge text={badge} />
                <h1 className="text-cw-white text-[40px] md:text-[54px] font-medium tracking-[-0.06rem] leading-[1.12]">
                    {title}<br />
                    <span className="text-cw-gray-6">{subtitle}</span>
                </h1>
                {description && (
                    <p className="text-cw-gray-6 text-sm leading-[1.9] max-w-[500px] mt-8">
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}
