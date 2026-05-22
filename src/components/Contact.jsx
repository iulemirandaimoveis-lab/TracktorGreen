import { useState, useEffect, useRef } from 'react'
import { Send, MessageSquare, Phone, Mail, ChevronDown, CheckCircle2 } from 'lucide-react'

const EQUIPMENT_OPTIONS = [
  'SAG600 — Cortador Remoto',
  'SE-35 — Mini Escavadora',
  'WZ3CX — Retroescavadora',
  'SZ950 — Carregadora de Rodas',
  'SH70 — Skid Steer',
  'SZJ35 — Betoneira',
  'SY-1200 — Rolo Compactador',
  'YH-500 — Mini Dumper',
  'TZ-12 — Trator',
  'CPC30 — Empilhador',
  'Frota Completa',
  'Outro / A definir',
]

const OPERATION_TYPES = [
  'Usina Solar',
  'Obra Civil',
  'Agricultura / Fazenda',
  'Município / Prefeitura',
  'Indústria',
  'Rodovias / Infraestrutura',
  'Logística',
  'Outro',
]

const INITIAL = {
  name: '', company: '', whatsapp: '', email: '',
  operation: '', equipment: '', message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simula envio — integrar com CRM/WhatsApp API aqui
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0A0D0A' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 dashboard-grid opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(45,90,54,0.1) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="section-fade mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: 'rgba(76,175,80,0.35)' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: '#4CAF50', letterSpacing: '0.2em' }}>
              CANAL DIRETO
            </span>
          </div>
          <h2
            className="font-black uppercase leading-none mb-4"
            style={{
              fontFamily: 'Barlow Condensed',
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: '#F0F0F0',
              lineHeight: '0.95',
            }}
          >
            Fale com um
            <br />
            <span style={{ color: '#4CAF50' }}>Especialista</span>
          </h2>
          <p style={{ color: '#9AA0A6', fontSize: '14px', maxWidth: '480px' }}>
            Nossa equipe técnica analisa sua operação e indica a configuração de frota
            mais eficiente para o seu caso. Sem pitch de vendas — apenas dados e soluções.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: Contact info */}
          <div className="flex flex-col gap-5">
            <ContactInfoCard
              icon={MessageSquare}
              title="WhatsApp Direto"
              value="+55 (XX) XXXXX-XXXX"
              sub="Seg–Sex, 8h–18h"
              color="#4CAF50"
              action="WhatsApp"
            />
            <ContactInfoCard
              icon={Mail}
              title="E-mail Técnico"
              value="operacoes@tracktorgreen.com.br"
              sub="Resposta em até 4h úteis"
              color="#4CAF50"
              action="E-mail"
            />
            <ContactInfoCard
              icon={Phone}
              title="Central de Atendimento"
              value="+55 (XX) XXXX-XXXX"
              sub="Suporte 24/7 para frotas ativas"
              color="#FF8A00"
              action="Ligar"
            />

            {/* Why contact */}
            <div
              className="p-5 mt-2"
              style={{
                background: 'rgba(45,90,54,0.08)',
                border: '1px solid rgba(45,90,54,0.2)',
                borderRadius: '4px',
              }}
            >
              <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4CAF50', letterSpacing: '0.15em', display: 'block', marginBottom: '10px' }}>
                O QUE ACONTECE DEPOIS
              </span>
              <div className="flex flex-col gap-2">
                {[
                  'Análise gratuita da sua operação',
                  'Indicação dos equipamentos ideais',
                  'Proposta técnica e comercial',
                  'Demonstração em campo se necessário',
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: 'Space Mono',
                        fontSize: '9px',
                        color: 'rgba(76,175,80,0.35)',
                        background: 'rgba(45,90,54,0.15)',
                        border: '1px solid rgba(45,90,54,0.3)',
                        borderRadius: '2px',
                        width: '18px',
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontFamily: 'Barlow', fontSize: '12px', color: '#9AA0A6' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <SuccessState onReset={() => { setForm(INITIAL); setSent(false) }} />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                style={{
                  background: 'rgba(18,18,18,0.8)',
                  border: '1px solid rgba(45,90,54,0.2)',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4CAF50', letterSpacing: '0.15em', marginBottom: '4px' }}>
                  FORMULÁRIO DE CONTATO
                </span>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Nome completo *"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                  <FormField
                    label="Empresa"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="WhatsApp *"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="+55 (XX) XXXXX-XXXX"
                    required
                  />
                  <FormField
                    label="E-mail *"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@empresa.com.br"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormSelect
                    label="Tipo de operação *"
                    name="operation"
                    value={form.operation}
                    onChange={handleChange}
                    options={OPERATION_TYPES}
                    required
                  />
                  <FormSelect
                    label="Equipamento de interesse"
                    name="equipment"
                    value={form.equipment}
                    onChange={handleChange}
                    options={EQUIPMENT_OPTIONS}
                  />
                </div>

                <FormTextarea
                  label="Descreva sua operação"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Área aproximada, frequência de operação, desafios atuais, número de equipamentos desejado..."
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 py-4 font-bold uppercase tracking-wider transition-all duration-200 mt-2"
                  style={{
                    fontFamily: 'Barlow Condensed',
                    letterSpacing: '0.12em',
                    background: loading ? '#1A3A1A' : 'rgba(76,175,80,0.35)',
                    color: '#F0F0F0',
                    border: '1px solid #4CAF50',
                    borderRadius: '2px',
                    fontSize: '15px',
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  {loading ? (
                    <>
                      <span className="blink">●</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Falar com Especialista
                    </>
                  )}
                </button>

                <p style={{ fontFamily: 'Space Mono', fontSize: '8px', color: '#687177', textAlign: 'center', letterSpacing: '0.05em' }}>
                  Seus dados são protegidos e usados apenas para contato técnico.
                  Sem spam, sem cessão a terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type = 'text', value, onChange, placeholder, required }) {
  const style = {
    background: 'rgba(43,49,58,0.5)',
    border: '1px solid rgba(104,113,119,0.25)',
    borderRadius: '2px',
    color: '#F0F0F0',
    fontFamily: 'Barlow, sans-serif',
    fontSize: '14px',
    padding: '10px 12px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.12em' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={style}
        onFocus={(e) => { e.target.style.borderColor = 'rgba(76,175,80,0.35)' }}
        onBlur={(e) => { e.target.style.borderColor = 'rgba(104,113,119,0.25)' }}
      />
    </div>
  )
}

function FormSelect({ label, name, value, onChange, options, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.12em' }}>
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={{
            background: 'rgba(43,49,58,0.5)',
            border: '1px solid rgba(104,113,119,0.25)',
            borderRadius: '2px',
            color: value ? '#F0F0F0' : '#687177',
            fontFamily: 'Barlow, sans-serif',
            fontSize: '14px',
            padding: '10px 32px 10px 12px',
            width: '100%',
            outline: 'none',
            appearance: 'none',
            cursor: 'pointer',
          }}
          onFocus={(e) => { e.target.style.borderColor = 'rgba(76,175,80,0.35)' }}
          onBlur={(e) => { e.target.style.borderColor = 'rgba(104,113,119,0.25)' }}
        >
          <option value="" disabled>Selecione...</option>
          {options.map((o) => (
            <option key={o} value={o} style={{ background: '#2B313A', color: '#F0F0F0' }}>{o}</option>
          ))}
        </select>
        <ChevronDown
          size={14}
          color="#687177"
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        />
      </div>
    </div>
  )
}

function FormTextarea({ label, name, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.12em' }}>
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        style={{
          background: 'rgba(43,49,58,0.5)',
          border: '1px solid rgba(104,113,119,0.25)',
          borderRadius: '2px',
          color: '#F0F0F0',
          fontFamily: 'Barlow, sans-serif',
          fontSize: '14px',
          padding: '10px 12px',
          width: '100%',
          outline: 'none',
          resize: 'vertical',
          minHeight: '100px',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => { e.target.style.borderColor = 'rgba(76,175,80,0.35)' }}
        onBlur={(e) => { e.target.style.borderColor = 'rgba(104,113,119,0.25)' }}
      />
    </div>
  )
}

function ContactInfoCard({ icon: Icon, title, value, sub, color, action }) {
  return (
    <div
      className="card-lift flex items-start gap-4 p-4"
      style={{
        background: 'rgba(18,18,18,0.8)',
        border: '1px solid rgba(43,49,58,0.6)',
        borderRadius: '4px',
      }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
          borderRadius: '4px',
        }}
      >
        <Icon size={18} color={color} />
      </div>
      <div className="flex-1 min-w-0">
        <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'Barlow Condensed', fontSize: '14px', color: '#F0F0F0', fontWeight: 600, display: 'block', wordBreak: 'break-all' }}>
          {value}
        </span>
        <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: '#687177', display: 'block', marginTop: '2px' }}>
          {sub}
        </span>
      </div>
    </div>
  )
}

function SuccessState({ onReset }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-20 px-8"
      style={{
        background: 'rgba(18,18,18,0.8)',
        border: '1px solid rgba(45,90,54,0.3)',
        borderRadius: '4px',
      }}
    >
      <div
        className="w-16 h-16 flex items-center justify-center mb-6"
        style={{
          background: 'rgba(45,90,54,0.15)',
          border: '1px solid rgba(74,140,86,0.4)',
          borderRadius: '50%',
        }}
      >
        <CheckCircle2 size={32} color="#4CAF50" />
      </div>
      <h3
        className="text-2xl font-black uppercase mb-3"
        style={{ fontFamily: 'Barlow Condensed', color: '#F0F0F0', letterSpacing: '0.05em' }}
      >
        Mensagem enviada
      </h3>
      <p className="text-sm mb-2" style={{ color: '#9AA0A6', maxWidth: '360px' }}>
        Nossa equipe técnica recebeu sua solicitação e entrará em contato
        em até 4 horas úteis com a análise da sua operação.
      </p>
      <p style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4CAF50', letterSpacing: '0.15em', marginBottom: '24px' }}>
        PROTOCOLO: TG-{Date.now().toString().slice(-8)}
      </p>
      <button
        onClick={onReset}
        style={{
          fontFamily: 'Barlow Condensed',
          fontSize: '13px',
          letterSpacing: '0.1em',
          color: '#687177',
          background: 'transparent',
          border: '1px solid rgba(104,113,119,0.3)',
          borderRadius: '2px',
          padding: '8px 20px',
          cursor: 'pointer',
        }}
      >
        Nova mensagem
      </button>
    </div>
  )
}
