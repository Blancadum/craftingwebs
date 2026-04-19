import Logo from './Logo'

export default function FooterBrand() {
    return (
        <div>
            <div className="flex items-center gap-2.5 mb-4">
                <Logo size={24} />
                <span className="text-cw-white text-sm">
                    Crafting<span className="text-cw-gray-7 font-medium">Webs</span>
                </span>
            </div>
            <p className="text-cw-gray-5 text-xs leading-7 max-w-[260px] mt-2">
                Agencia digital especializada en profesionales autónomos.
                Webs a medida, SEO y estrategia digital desde Estepona.
            </p>
            <p className="text-cw-gray-4 text-[11px] mt-4">hola@craftingwebs.es</p>
        </div>
    )
}
