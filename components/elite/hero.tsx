import Image from "next/image"
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react"
import { BrandIcon } from "./logo"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 blur-[120px] opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Agência de Performance Digital
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl">
            Acelere Suas Vendas e{" "}
            <span className="text-gradient-blue">Multiplique Seu Faturamento</span>{" "}
            Agora
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            A <span className="font-semibold text-foreground">Elite Company Digital</span> transforma
            sua presença digital em resultados reais: mais leads qualificados, mais vendas e crescimento
            consistente para sua empresa.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.65_0.22_255_/_0.5)] transition-all hover:shadow-[0_0_60px_oklch(0.65_0.22_255_/_0.7)] hover:scale-[1.02]"
            >
              Quero Multiplicar Minhas Vendas
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card hover:border-primary/40"
            >
              Conhecer o Método
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/50 pt-8">
            <Stat icon={TrendingUp} value="13M+" label="Impressões geradas" />
            <Stat icon={Users} value="200+" label="Clientes atendidos" />
            <Stat icon={Target} value="4 anos" label="De experiência" />
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-[520px]">
            {/* Glow background */}
            <div
              className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />

            {/* Hero image */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
              <Image
                src="/hero-chess.jpg"
                alt="Peça de xadrez rei representando estratégia digital de alto nível"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating notification card */}
            <div className="absolute -left-4 top-12 hidden animate-float rounded-xl border border-primary/30 bg-card/95 p-4 shadow-2xl backdrop-blur-md md:flex md:items-center md:gap-3">
              <BrandIcon className="h-10 w-12" />
              <div>
                <p className="text-sm font-semibold text-foreground">Venda realizada</p>
                <p className="text-xs text-muted-foreground">Comissão: R$ 294,24</p>
              </div>
            </div>

            {/* Floating metric card */}
            <div
              className="absolute -right-4 bottom-12 hidden animate-float rounded-xl border border-accent/30 bg-card/95 p-4 shadow-2xl backdrop-blur-md md:block"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-xs text-muted-foreground">ROI médio</p>
              <p className="font-display text-2xl font-bold text-gradient-blue">+387%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof TrendingUp
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-display text-2xl font-bold text-foreground md:text-3xl">{value}</span>
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
