import { Search, Megaphone, Palette, BarChart3, MessageSquare, Sparkles } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Posicionamento no Google",
    description:
      "Seja encontrado por quem realmente está buscando seus produtos ou serviços com SEO e Google Ads otimizados.",
    tag: "Google Ads",
  },
  {
    icon: Megaphone,
    title: "Meta Ads — Facebook & Instagram",
    description:
      "Alcance potenciais clientes, promova seus posts e conquiste mais audiência com campanhas de alta conversão.",
    tag: "Meta Ads",
  },
  {
    icon: Palette,
    title: "Design, Web & Branding",
    description:
      "Sua empresa merece um visual impactante e pensado de forma estratégica para fortalecer sua marca.",
    tag: "Design",
  },
  {
    icon: BarChart3,
    title: "Análise & Performance",
    description:
      "Monitoramento contínuo com dashboards personalizados e otimizações baseadas em dados reais.",
    tag: "Analytics",
  },
  {
    icon: MessageSquare,
    title: "Copywriting Persuasivo",
    description:
      "Textos estratégicos que conectam com seu público e transformam visitantes em clientes fiéis.",
    tag: "Copy",
  },
  {
    icon: Sparkles,
    title: "Social Media Estratégico",
    description:
      "Gestão completa de redes sociais com conteúdo de alta qualidade e engajamento real com sua audiência.",
    tag: "Social",
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Nossos Serviços
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Soluções completas para{" "}
            <span className="text-gradient-blue">escalar seu negócio</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada serviço é integrado em uma estratégia única para gerar o máximo de retorno sobre seu
            investimento.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_20px_60px_-15px_oklch(0.65_0.22_255_/_0.3)]"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 to-accent/10">
                    <service.icon className="h-6 w-6 text-primary" />
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-xl font-bold leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
