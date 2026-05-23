import { useEffect, useRef, useState } from 'react'
import {
  Wifi, AlertTriangle,
  Activity, MapPin, BarChart3,
  CheckCircle2, Clock, Fuel, Wrench
} from 'lucide-react'

const FLEET = [
  { id: 'TG-SAG600-01', model: 'SAG600', location: 'Usina Solar Norte', status: 'online', hours: '256.3', fuel: 78, temp: 68, efficiency: 94 },
  { id: 'TG-SE35-02', model: 'SE-35', location: 'Obra Civil Bloco A', status: 'online', hours: '128.6', fuel: 45, temp: 72, efficiency: 87 },
  { id: 'TG-WZ3CX-01', model: 'WZ3CX', location: 'Rodovia BR-316', status: 'alert', hours: '389.1', fuel: 22, temp: 88, efficiency: 62 },
  { id: 'TG-SZ950-01', model: 'SZ950', location: 'Loteamento Verde', status: 'online', hours: '201.7', fuel: 67, temp: 70, efficiency: 91 },
  { id: 'TG-SH70-02', model: 'SH70', location: 'Indústria Zona Norte', status: 'maintenance', hours: '512.4', fuel: 0, temp: 45, efficiency: 0 },
  { id: 'TG-CPC30-01', model: 'CPC30', location: 'Porto Industrial', status: 'online', hours: '88.2', fuel: 89, temp: 64, efficiency: 97 },
]

const ALERTS = [
  { level: 'warn', msg: 'WZ3CX-01 — Temperatura acima de 85°C', time: '2min' },
  { level: 'warn', msg: 'WZ3CX-01 — Combustível crítico (22%)', time: '4min' },
  { level: 'info', msg: 'SH70-02 — Manutenção preventiva agendada', time: '1h' },
  { level: 'ok', msg: 'SAG600-01 — Ciclo diário concluído', time: '3h' },
]

export default function Telemetry() {
  const ref = useRef(null)
  const [, setTick] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3000)
    return () => clearInterval(interval)
  }, [])

  const onlineCount = FLEET.filter((f) => f.status === 'online').length

  return (
    <section
      id="telemetria"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--tg-bg0)' }}
    >
      <div className="absolute inset-0 dashboard-grid opacity-60 pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(45,90,54,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div ref={ref} className="section-fade mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: 'var(--tg-green-strong)' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: 'var(--tg-green)', letterSpacing: '0.2em' }}>
              INTERFACE DE CONTROLE
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-black uppercase leading-none"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: 'var(--tg-text0)',
                lineHeight: '0.95',
              }}
            >
              Controle e
              <br />
              <span style={{ color: 'var(--tg-green)' }}>Telemetria</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--tg-text2)' }}>
              Monitoramento em tempo real da frota completa. Métricas operacionais,
              alertas e localização — tudo em um único painel de controle.
            </p>
          </div>
        </div>

        {/* DASHBOARD MOCK */}
        <div
          className="rounded border overflow-hidden"
          style={{ border: '1px solid var(--tg-border)', background: 'var(--tg-bg1)' }}
        >
          {/* Dashboard topbar */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{ borderBottom: '1px solid var(--tg-border)', background: 'var(--tg-bg2)' }}
          >
            <div className="flex items-center gap-3">
              <span className="blink w-2 h-2 rounded-full" style={{ background: 'var(--tg-green)' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: 'var(--tg-green)', letterSpacing: '0.15em' }}>
                TRACKTOR GREEN // CENTRAL DE CONTROLE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-text3)' }}>
                {new Date().toLocaleDateString('pt-BR')} — LIVE
              </span>
              <Wifi size={12} color="var(--tg-green)" />
            </div>
          </div>

          {/* Main dashboard area */}
          <div className="grid lg:grid-cols-3 gap-0">
            {/* LEFT: KPIs + alerts */}
            <div
              className="p-5 flex flex-col gap-4"
              style={{ borderRight: '1px solid var(--tg-border)' }}
            >
              {/* KPI row */}
              <div className="grid grid-cols-2 gap-2">
                <KpiCard icon={Activity} label="UNID. ONLINE" value={`${onlineCount}/${FLEET.length}`} color="#4CAF50" />
                <KpiCard icon={Clock} label="HORAS TOTAIS" value="1576h" color="#4CAF50" />
                <KpiCard icon={Fuel} label="CONS. MÉDIO" value="6.2L/h" color="#FF8A00" />
                <KpiCard icon={BarChart3} label="EFICIÊNCIA" value="86%" color="#4CAF50" />
              </div>

              {/* Efficiency bar */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-text3)', letterSpacing: '0.1em' }}>
                    EFICIÊNCIA DA FROTA
                  </span>
                  <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-green)' }}>86%</span>
                </div>
                <div style={{ height: '4px', background: 'var(--tg-bg3)', borderRadius: '2px' }}>
                  <div
                    className="bar-animate"
                    style={{ height: '4px', width: '86%', background: 'linear-gradient(to right, var(--tg-green-mid), var(--tg-green))', borderRadius: '2px' }}
                  />
                </div>
              </div>

              {/* Alerts */}
              <div>
                <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-green)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                  ALERTAS ATIVOS
                </span>
                <div className="flex flex-col gap-1.5">
                  {ALERTS.map((a, i) => (
                    <AlertRow key={i} alert={a} />
                  ))}
                </div>
              </div>

              {/* IoT connectivity */}
              <div
                className="p-3"
                style={{ background: 'var(--tg-bg4)', border: '1px solid var(--tg-border)', borderRadius: '2px' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text3)', letterSpacing: '0.1em' }}>CONECTIVIDADE IoT</span>
                  <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-green)' }}>SISTEMA ONLINE</span>
                </div>
                <div className="flex gap-2">
                  {['MQTT', 'GPS', '4G/LTE', 'EDGE'].map((p) => (
                    <span
                      key={p}
                      style={{
                        fontFamily: 'Space Mono',
                        fontSize: '7px',
                        background: 'var(--tg-green-dim)',
                        border: '1px solid var(--tg-border)',
                        color: 'var(--tg-green)',
                        padding: '2px 5px',
                        borderRadius: '2px',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CENTER: Map + fleet */}
            <div className="p-5 flex flex-col gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-text3)', letterSpacing: '0.1em' }}>
                    LOCALIZAÇÃO DA FROTA — BRASIL
                  </span>
                  <MapPin size={10} color="var(--tg-green)" />
                </div>
                <MapDisplay />
              </div>

              <div>
                <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-green)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                  STATUS DA FROTA
                </span>
                <div className="flex flex-col gap-1">
                  {FLEET.map((unit) => (
                    <FleetRow key={unit.id} unit={unit} />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Machine detail + predictive */}
            <div
              className="p-5 flex flex-col gap-4"
              style={{ borderLeft: '1px solid var(--tg-border)' }}
            >
              <div>
                <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-green)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                  MANUTENÇÃO PREDITIVA
                </span>
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'SAG600-01', task: 'Troca de lâmina', due: '120h', ok: true },
                    { name: 'SE-35-02', task: 'Revisão hidráulica', due: '45h', ok: true },
                    { name: 'WZ3CX-01', task: 'Troca filtro ar', due: 'VENCIDO', ok: false },
                    { name: 'SH70-02', task: 'Manutenção geral', due: 'HOJE', ok: false },
                    { name: 'SZ950-01', task: 'Calibração pneus', due: '200h', ok: true },
                  ].map((m) => (
                    <MaintenanceRow key={m.name} m={m} />
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'var(--tg-green)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                  CONSUMO ENERGÉTICO
                </span>
                <div className="flex flex-col gap-2">
                  {FLEET.filter((f) => f.status !== 'maintenance').map((f) => (
                    <FuelBar key={f.id} unit={f} />
                  ))}
                </div>
              </div>

              <div
                className="p-3 mt-auto"
                style={{ background: 'var(--tg-green-dim)', border: '1px solid var(--tg-border)', borderRadius: '2px' }}
              >
                <div className="grid grid-cols-3 gap-2 text-center">
                  <MiniStat label="TOTAL HRS" value="1576" unit="h" />
                  <MiniStat label="ÁREA COB." value="2.1" unit="km²" />
                  <MiniStat label="MAQUINAS" value="6" unit="ativas" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KpiCard({ icon: Icon, label, value, color }) {
  return (
    <div
      className="p-3"
      style={{
        background: 'var(--tg-bg4)',
        border: '1px solid var(--tg-border)',
        borderRadius: '2px',
      }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={10} color={color} />
        <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: 'var(--tg-text3)', letterSpacing: '0.1em' }}>{label}</span>
      </div>
      <span style={{ fontFamily: 'Barlow Condensed', fontSize: '22px', fontWeight: 800, color: 'var(--tg-text0)', lineHeight: 1 }}>
        {value}
      </span>
    </div>
  )
}

function AlertRow({ alert }) {
  const colors = { warn: '#FF8A00', ok: '#4CAF50', info: '#687177' }
  const icons = { warn: AlertTriangle, ok: CheckCircle2, info: Activity }
  const Icon = icons[alert.level]
  return (
    <div
      className="flex items-start gap-2 p-2"
      style={{
        background: alert.level === 'warn' ? 'rgba(255,138,0,0.06)' : 'var(--tg-bg4)',
        border: `1px solid ${colors[alert.level]}20`,
        borderRadius: '2px',
      }}
    >
      <Icon size={10} color={colors[alert.level]} className="mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text2)', lineHeight: '1.5' }}>{alert.msg}</p>
      </div>
      <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text3)', flexShrink: 0 }}>{alert.time}</span>
    </div>
  )
}

function FleetRow({ unit }) {
  const statusColors = { online: '#4CAF50', alert: '#FF8A00', maintenance: '#687177' }
  const statusLabel = { online: 'ONLINE', alert: 'ALERTA', maintenance: 'MANUTENÇÃO' }
  return (
    <div
      className="flex items-center gap-2 px-2 py-1.5"
      style={{ background: 'var(--tg-bg4)', border: '1px solid var(--tg-border)', borderRadius: '2px' }}
    >
      <span
        className={unit.status === 'online' ? 'blink' : ''}
        style={{ width: '5px', height: '5px', borderRadius: '50%', background: statusColors[unit.status], flexShrink: 0 }}
      />
      <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text2)', flex: 1 }}>{unit.model}</span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: 'var(--tg-text3)', flex: 2, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        {unit.location}
      </span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: statusColors[unit.status], flexShrink: 0 }}>
        {statusLabel[unit.status]}
      </span>
    </div>
  )
}

function MapDisplay() {
  const units = [
    { x: 55, y: 35, status: 'online', model: 'SAG600' },
    { x: 35, y: 60, status: 'online', model: 'SE-35' },
    { x: 70, y: 55, status: 'alert', model: 'WZ3CX' },
    { x: 45, y: 45, status: 'online', model: 'SZ950' },
    { x: 60, y: 70, status: 'maintenance', model: 'SH70' },
    { x: 80, y: 40, status: 'online', model: 'CPC30' },
  ]

  return (
    <div
      className="relative dashboard-grid overflow-hidden"
      style={{
        height: '160px',
        background: 'var(--tg-bg1)',
        border: '1px solid var(--tg-border)',
        borderRadius: '2px',
      }}
    >
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <polyline points="0,80 50,60 120,90 200,50 300,75 400,55 500,70" stroke="rgba(76,175,80,0.35)" strokeWidth="1" fill="none" />
        <polyline points="0,120 80,100 150,115 250,90 350,110 450,95 500,105" stroke="rgba(76,175,80,0.35)" strokeWidth="1" fill="none" />
      </svg>

      {units.map((u, i) => (
        <div
          key={i}
          className={u.status === 'online' ? 'map-dot' : ''}
          style={{
            position: 'absolute',
            left: `${u.x}%`,
            top: `${u.y}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: u.status === 'online' ? '#4CAF50' : u.status === 'alert' ? '#FF8A00' : '#687177',
            border: `1px solid ${u.status === 'online' ? '#5CB85C' : u.status === 'alert' ? '#FF8A00' : '#9AA0A6'}`,
            transform: 'translate(-50%,-50%)',
            zIndex: 10,
          }}
        />
      ))}

      <div className="absolute bottom-2 left-2 flex gap-2">
        {[['#4CAF50', 'Online'], ['#FF8A00', 'Alerta'], ['#687177', 'Manutenção']].map(([c, l]) => (
          <div key={l} className="flex items-center gap-1">
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: c }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: 'var(--tg-text3)' }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MaintenanceRow({ m }) {
  return (
    <div
      className="flex items-center justify-between gap-2 px-2 py-1.5"
      style={{
        background: m.ok ? 'var(--tg-bg4)' : 'rgba(255,138,0,0.06)',
        border: `1px solid ${m.ok ? 'var(--tg-border)' : 'rgba(255,138,0,0.2)'}`,
        borderRadius: '2px',
      }}
    >
      <div className="flex items-center gap-1.5">
        <Wrench size={9} color={m.ok ? 'var(--tg-text3)' : '#FF8A00'} />
        <div>
          <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text2)', display: 'block' }}>{m.name}</span>
          <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: 'var(--tg-text3)' }}>{m.task}</span>
        </div>
      </div>
      <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: m.ok ? 'var(--tg-text3)' : '#FF8A00', flexShrink: 0 }}>
        {m.due}
      </span>
    </div>
  )
}

function FuelBar({ unit }) {
  const pct = unit.fuel
  const color = pct > 50 ? '#4CAF50' : pct > 25 ? '#FF8A00' : '#cc3300'
  return (
    <div>
      <div className="flex justify-between mb-0.5">
        <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text3)' }}>{unit.model}</span>
        <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color }}>🔋 {pct}%</span>
      </div>
      <div style={{ height: '3px', background: 'var(--tg-bg3)', borderRadius: '2px' }}>
        <div style={{ height: '3px', width: `${pct}%`, background: color, borderRadius: '2px', transition: 'width 1s ease' }} />
      </div>
    </div>
  )
}

function MiniStat({ label, value, unit }) {
  return (
    <div>
      <span style={{ fontFamily: 'Barlow Condensed', fontSize: '20px', fontWeight: 800, color: 'var(--tg-green)', display: 'block', lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: 'var(--tg-text3)', letterSpacing: '0.05em' }}>{unit}</span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '7px', color: 'var(--tg-green)', letterSpacing: '0.08em', display: 'block', marginTop: '2px' }}>{label}</span>
    </div>
  )
}
