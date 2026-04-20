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
    <section className="bg-cw-black py-20 px-8 md:py-[96px] md:pb-24">
      <div className="max-w-[1100px] mx-auto">

        <Badge text="Agencia Digital" />

        <h1 className="text-cw-white text-[40px] md:text-[56px] font-medium tracking-[-0.06rem] leading-[1.1] mb-5 max-w-[620px]">
          No somos una agencia más.<br />
          <span className="text-cw-gray-6">Somos tu equipo digital.</span>
        </h1>

        <p className="text-cw-gray-6 text-sm leading-[1.9] max-w-[420px] mb-10">
          Si eres profesional autónomo y necesitas una presencia digital
          que refleje exactamente quién eres, estás en el lugar correcto.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
          {diferencial.map((d) => (
            <div key={d.num} className="flex gap-3 items-start">
              <span className="text-cw-gray-4 text-[10px] tracking-[0.1rem] pt-0.5 shrink-0">{d.num}</span>
              <span className="text-cw-gray-6 text-xs leading-[1.8] whitespace-pre-line">{d.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-16">
          <Button href="/contacto" label="Solicitar consulta gratuita →" variant="primary" />
          <Button href="/catalogo" label="Ver catálogo" variant="ghost" />
        </div>

        <div className="grid grid-cols-3 divide-x divide-cw-gray-2 border border-cw-gray-2 rounded-lg overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-cw-gray-1 px-6 py-5 md:px-8 md:py-6">
              <div className="text-cw-white text-[22px] md:text-[26px] font-medium tracking-[-0.04rem]">{stat.num}</div>
              <div className="text-cw-gray-5 text-[10px] mt-1.5 tracking-[0.12rem]">{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
