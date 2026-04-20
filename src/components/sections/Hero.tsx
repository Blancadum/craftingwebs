import Badge from '../ui/Badge'
import Button from '../ui/Button'

const stats = [
  { num: '+80', label: 'Proyectos' },
  { num: '98%', label: 'Satisfacción' },
  { num: '5 años', label: 'Experiencia' },
]

const diferencial = [
  { num: '01', text: 'Sin plantillas genéricas.\nTodo hecho a medida.' },
  { num: '02', text: 'Interlocutor único.\nSin intermediarios.' },
  { num: '03', text: 'Resultados medibles.\nNo solo diseño bonito.' },
]

export default function Hero() {
  return (
    <section className="bg-cw-black py-16 px-8 md:py-[72px] md:pb-20">
      <div className="max-w-[1100px] mx-auto">

        <Badge text="AGENCIA DIGITAL — ESTEPONA" />

        <h1 className="text-cw-white text-[36px] md:text-[42px] font-medium tracking-[-0.05rem] leading-[1.15] mb-4 max-w-[560px]">
          No somos una agencia más.<br />
          <span className="text-cw-gray-6">Somos tu equipo digital.</span>
        </h1>

        <p className="text-cw-gray-6 text-sm md:text-[15px] leading-7 max-w-[440px] mb-7">
          Si eres profesional autónomo y necesitas una presencia digital
          que refleje exactamente quién eres, estás en el lugar correcto.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
          {diferencial.map((d) => (
            <div key={d.num} className="flex gap-2.5 items-start">
              <span className="text-cw-gray-5 text-[11px] font-medium tracking-[0.08rem] pt-0.5">{d.num}</span>
              <span className="text-cw-gray-6 text-xs leading-relaxed whitespace-pre-line">{d.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-12">
          <Button href="/contacto" label="Solicitar consulta gratuita →" variant="primary" />
          <Button href="/proyectos" label="Ver proyectos" variant="ghost" />
        </div>

        <div className="grid grid-cols-3 gap-px bg-cw-gray-2 border border-cw-gray-2 rounded-lg overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-cw-gray-1 p-5 md:px-6">
              <div className="text-cw-white text-2xl md:text-[26px] font-medium tracking-[-0.03rem]">{stat.num}</div>
              <div className="text-cw-gray-5 text-[11px] mt-1 tracking-[0.08rem]">{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
