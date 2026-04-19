import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { heroStyles as s} from '@/src/styles/hero'

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
    <section style={s.section}>
      <div style={s.container}>

        <Badge text="AGENCIA DIGITAL — ESTEPONA" />

        <h1 style={s.title}>
          No somos una agencia más.<br />
          <span style={s.titleMuted}>Somos tu equipo digital.</span>
        </h1>

        <p style={s.subtitle}>
          Si eres profesional autónomo y necesitas una presencia digital
          que refleje exactamente quién eres, estás en el lugar correcto.
        </p>

        <div style={s.diferencial}>
          {diferencial.map((d) => (
            <div key={d.num} style={s.diferencialItem}>
              <span style={s.diferencialNum}>{d.num}</span>
              <span style={s.diferencialText}>{d.text}</span>
            </div>
          ))}
        </div>

        <div style={s.ctas}>
          <Button href="/contacto" label="Solicitar consulta gratuita →" variant="primary" />
          <Button href="/proyectos" label="Ver proyectos" variant="ghost" />
        </div>

        <div style={s.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} style={s.statItem}>
              <div style={s.statNum}>{stat.num}</div>
              <div style={s.statLabel}>{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}