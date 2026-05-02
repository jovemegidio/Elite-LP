import { CheckCircle2, XCircle } from "lucide-react"

const traditional = [
  "Abordagem genérica, sem personalização para o seu negócio.",
  "Execução de campanhas com pouco foco em conversão ou resultados de vendas.",
  "Relatórios confusos e falta de transparência.",
  "Comunicação lenta e suporte limitado.",
]

const elite = [
  {
    title: "Método Elite Performance",
    desc: "Foco total em aumentar suas vendas e otimizar seus resultados.",
  },
  {
    title: "Estratégias personalizadas",
    desc: "Cada campanha é feita sob medida para atender suas necessidades específicas.",
  },
  {
    title: "Relatórios transparentes",
    desc: "Você saberá exatamente onde e como seus investimentos estão sendo aplicados, com resultados claros e mensuráveis.",
  },
  {
    title: "Time dedicado e ágil",
    desc: "Suporte direto com especialistas e respostas rápidas para acelerar seu crescimento.",
  },
]

export function Comparison() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Diferencial
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Por que escolher a{" "}
            <span className="text-gradient-blue">Elite Company Digital</span>?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Veja a diferença entre uma agência tradicional e uma agência focada em performance real.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Traditional */}
          <div className="relative overflow-hidden rounded-2xl border border-destructive/20 bg-card/40 p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-destructive px-5 py-2">
                <span className="text-sm font-bold text-destructive-foreground">
                  Agência Tradicional
                </span>
              </div>

              <ul className="space-y-5">
                {traditional.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-border/50 pb-5 last:border-0 last:pb-0"
                  >
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Elite */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-8 backdrop-blur-sm shadow-[0_0_60px_oklch(0.65_0.22_255_/_0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2">
                <span className="text-sm font-bold text-background">Elite Company Digital</span>
              </div>

              <ul className="space-y-5">
                {elite.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-border/50 pb-5 last:border-0 last:pb-0"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
