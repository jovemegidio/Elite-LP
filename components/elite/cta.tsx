import { ArrowUpRight, Sparkles } from "lucide-react"

export function Cta() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-10 shadow-[0_0_80px_oklch(0.65_0.22_255_/_0.2)] md:p-16">
          {/* Decorative elements */}
          <div
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Vagas limitadas este mês
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
              Pronto para multiplicar{" "}
              <span className="text-gradient-blue">seu faturamento?</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Agende uma análise gratuita do seu negócio e descubra como o Método Elite Performance
              pode transformar sua empresa nos próximos 90 dias.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_50px_oklch(0.65_0.22_255_/_0.5)] transition-all hover:shadow-[0_0_70px_oklch(0.65_0.22_255_/_0.7)] hover:scale-[1.02] md:text-base"
              >
                Quero Multiplicar Minhas Vendas
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 md:text-base"
              >
                Ver mais detalhes
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Análise gratuita
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Resposta em até 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
