type Variant = 'corporate' | 'shop' | 'landing' | 'portfolio'

interface ProyectoCardProps {
  codigo: string
  sector: string
  variant: Variant
  tags: string[]
  onClick?: () => void
}

export function Mockup({ variant }: { variant: Variant }) {
  if (variant === 'corporate') {
    return (
      <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="220" fill="#111111"/>
        {/* navbar */}
        <rect width="360" height="22" fill="#161616"/>
        <rect x="0" y="22" width="360" height="0.5" fill="#1e1e1e"/>
        <rect x="14" y="8" width="44" height="7" rx="1" fill="#252525"/>
        <rect x="240" y="9" width="28" height="5" rx="1" fill="#1d1d1d"/>
        <rect x="276" y="9" width="28" height="5" rx="1" fill="#1d1d1d"/>
        <rect x="316" y="7" width="32" height="9" rx="2" fill="#222222"/>
        {/* headline */}
        <rect x="20" y="38" width="218" height="13" rx="1" fill="#d3d1c7"/>
        <rect x="20" y="56" width="172" height="13" rx="1" fill="#d3d1c7"/>
        {/* subtitle */}
        <rect x="20" y="77" width="185" height="6" rx="1" fill="#2e2e2c"/>
        <rect x="20" y="88" width="145" height="6" rx="1" fill="#2e2e2c"/>
        {/* CTA */}
        <rect x="20" y="103" width="90" height="18" rx="3" fill="#1e1e1e"/>
        <rect x="30" y="109" width="55" height="5" rx="1" fill="#3a3a38"/>
        {/* feature cards */}
        <rect x="14" y="136" width="100" height="72" rx="2" fill="#161616"/>
        <rect x="130" y="136" width="100" height="72" rx="2" fill="#161616"/>
        <rect x="246" y="136" width="100" height="72" rx="2" fill="#161616"/>
        <rect x="14" y="136" width="100" height="2" fill="#222222"/>
        <rect x="130" y="136" width="100" height="2" fill="#222222"/>
        <rect x="246" y="136" width="100" height="2" fill="#222222"/>
        <rect x="24" y="148" width="50" height="6" rx="1" fill="#2a2a2a"/>
        <rect x="24" y="160" width="72" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="24" y="168" width="60" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="24" y="176" width="45" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="140" y="148" width="50" height="6" rx="1" fill="#2a2a2a"/>
        <rect x="140" y="160" width="72" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="140" y="168" width="60" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="140" y="176" width="45" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="256" y="148" width="50" height="6" rx="1" fill="#2a2a2a"/>
        <rect x="256" y="160" width="72" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="256" y="168" width="60" height="4" rx="1" fill="#1e1e1e"/>
        <rect x="256" y="176" width="45" height="4" rx="1" fill="#1e1e1e"/>
      </svg>
    )
  }

  if (variant === 'shop') {
    return (
      <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="220" fill="#f9f9f7"/>
        {/* navbar */}
        <rect width="360" height="22" fill="#ffffff"/>
        <rect x="0" y="22" width="360" height="0.5" fill="#e8e7e3"/>
        <rect x="14" y="8" width="40" height="7" rx="1" fill="#d3d1c7"/>
        <rect x="148" y="9" width="64" height="5" rx="1" fill="#e8e7e3"/>
        <rect x="290" y="9" width="22" height="5" rx="1" fill="#e0ded8"/>
        <rect x="320" y="9" width="22" height="5" rx="1" fill="#e0ded8"/>
        <rect x="348" y="7" width="8" height="8" rx="1" fill="#d3d1c7"/>
        {/* hero banner */}
        <rect x="0" y="28" width="360" height="72" fill="#e0ded8"/>
        <rect x="20" y="44" width="150" height="12" rx="1" fill="#c8c6bd"/>
        <rect x="20" y="62" width="100" height="9" rx="1" fill="#c8c6bd"/>
        {/* product grid */}
        <rect x="14" y="112" width="76" height="80" rx="2" fill="#e8e7e3"/>
        <rect x="98" y="112" width="76" height="80" rx="2" fill="#e8e7e3"/>
        <rect x="182" y="112" width="76" height="80" rx="2" fill="#e8e7e3"/>
        <rect x="270" y="112" width="76" height="80" rx="2" fill="#e8e7e3"/>
        <rect x="14" y="196" width="50" height="5" rx="1" fill="#888780"/>
        <rect x="98" y="196" width="50" height="5" rx="1" fill="#888780"/>
        <rect x="182" y="196" width="50" height="5" rx="1" fill="#888780"/>
        <rect x="270" y="196" width="50" height="5" rx="1" fill="#888780"/>
        <rect x="14" y="204" width="34" height="4" rx="1" fill="#b4b2a9"/>
        <rect x="98" y="204" width="34" height="4" rx="1" fill="#b4b2a9"/>
        <rect x="182" y="204" width="34" height="4" rx="1" fill="#b4b2a9"/>
        <rect x="270" y="204" width="34" height="4" rx="1" fill="#b4b2a9"/>
      </svg>
    )
  }

  if (variant === 'landing') {
    return (
      <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="220" fill="#0e0e0c"/>
        <rect width="360" height="130" fill="#131310"/>
        {/* minimal nav */}
        <rect x="14" y="10" width="40" height="6" rx="1" fill="#1e1e1a"/>
        <rect x="296" y="8" width="52" height="12" rx="3" fill="#2a2218"/>
        <rect x="308" y="12" width="30" height="4" rx="1" fill="#5a4a28"/>
        {/* centered headline */}
        <rect x="55" y="36" width="250" height="13" rx="1" fill="#e8e3d8"/>
        <rect x="75" y="54" width="210" height="13" rx="1" fill="#e8e3d8"/>
        <rect x="95" y="72" width="170" height="13" rx="1" fill="#e8e3d8"/>
        {/* subtitle */}
        <rect x="100" y="94" width="160" height="6" rx="1" fill="#3a3830"/>
        <rect x="115" y="104" width="130" height="6" rx="1" fill="#3a3830"/>
        {/* CTA centered */}
        <rect x="118" y="118" width="124" height="20" rx="3" fill="#3a2e18"/>
        <rect x="140" y="124" width="80" height="6" rx="1" fill="#7a6438"/>
        {/* divider */}
        <rect x="0" y="151" width="360" height="0.5" fill="#1a1a16"/>
        {/* steps */}
        <rect x="20" y="162" width="96" height="48" rx="2" fill="#141412"/>
        <rect x="132" y="162" width="96" height="48" rx="2" fill="#141412"/>
        <rect x="244" y="162" width="96" height="48" rx="2" fill="#141412"/>
        <rect x="28" y="170" width="14" height="10" rx="1" fill="#2a2218"/>
        <rect x="140" y="170" width="14" height="10" rx="1" fill="#2a2218"/>
        <rect x="252" y="170" width="14" height="10" rx="1" fill="#2a2218"/>
        <rect x="28" y="186" width="70" height="5" rx="1" fill="#1e1e1a"/>
        <rect x="28" y="195" width="55" height="4" rx="1" fill="#1a1a16"/>
        <rect x="140" y="186" width="70" height="5" rx="1" fill="#1e1e1a"/>
        <rect x="140" y="195" width="55" height="4" rx="1" fill="#1a1a16"/>
        <rect x="252" y="186" width="70" height="5" rx="1" fill="#1e1e1a"/>
        <rect x="252" y="195" width="55" height="4" rx="1" fill="#1a1a16"/>
      </svg>
    )
  }

  // portfolio
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="360" height="220" fill="#ffffff"/>
      {/* minimal nav */}
      <rect x="14" y="9" width="36" height="6" rx="1" fill="#d3d1c7"/>
      <rect x="298" y="10" width="22" height="4" rx="1" fill="#e8e7e3"/>
      <rect x="328" y="10" width="22" height="4" rx="1" fill="#e8e7e3"/>
      {/* large left image */}
      <rect x="0" y="26" width="210" height="130" fill="#e8e7e3"/>
      {/* right text */}
      <rect x="226" y="40" width="120" height="13" rx="1" fill="#111111"/>
      <rect x="226" y="58" width="90" height="13" rx="1" fill="#111111"/>
      <rect x="226" y="80" width="110" height="6" rx="1" fill="#d3d1c7"/>
      <rect x="226" y="91" width="100" height="6" rx="1" fill="#d3d1c7"/>
      <rect x="226" y="102" width="115" height="6" rx="1" fill="#d3d1c7"/>
      <rect x="226" y="113" width="95" height="6" rx="1" fill="#d3d1c7"/>
      <rect x="226" y="130" width="80" height="12" rx="1" fill="#111111"/>
      {/* bottom grid */}
      <rect x="0" y="164" width="114" height="52" fill="#e8e7e3"/>
      <rect x="122" y="164" width="114" height="52" fill="#d3d1c7"/>
      <rect x="244" y="164" width="116" height="52" fill="#e8e7e3"/>
    </svg>
  )
}

export default function ProyectoCard({ codigo, sector, variant, tags, onClick }: ProyectoCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 w-[260px] md:w-[290px] rounded-lg overflow-hidden border border-cw-gray-9 bg-white group snap-start ${onClick ? 'cursor-pointer hover:border-cw-gray-6 transition-colors' : ''}`}
    >
      <div className="w-full overflow-hidden bg-cw-gray-10 aspect-mockup">
        <Mockup variant={variant} />
      </div>
      <div className="px-4 py-3 border-t border-cw-gray-9">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[11px] font-medium text-cw-black tracking-[0.08rem]">{codigo}</span>
          <span className="text-[10px] text-cw-gray-5 tracking-[0.03rem]">{sector}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] text-cw-gray-5 bg-cw-gray-10 border border-cw-gray-9 rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
