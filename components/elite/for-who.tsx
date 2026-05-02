import { Building2, TrendingUp, Sparkles } from "lucide-react"

const items = [
  {
    icon: Building2,
    title: "Pequenas, médias e grandes empresas",
    description:
      "Atendemos negócios em diferentes estágios que buscam expandir sua presença digital, gerar mais leads e aumentar suas vendas de forma consistente.",
  },
  {
    icon: TrendingUp,
    title: "Empresas com desafios reais",
    description:
      "Se sua empresa enfrenta falta de visibilidade ou dificuldade em captar clientes, oferecemos soluções personalizadas com resultados mensuráveis.",
  },
  {
    icon: Sparkles,
    title: "Pacotes flexíveis e estratégicos",
    description:
      "Seja qual for o seu setor, nossos pacotes são desenhados para levar seu negócio ao próximo nível com estratégias sob medida.",
  },
]

export function ForWho() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Para Quem
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Soluções para empresas que querem{" "}
            <span className="text-gradient-blue">crescer de verdade</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Trabalhamos lado a lado com empresários que buscam resultados reais e estão prontos para
            elevar seu negócio a um novo patamar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
