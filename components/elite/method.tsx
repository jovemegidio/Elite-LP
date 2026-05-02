import { TrendingUp } from "lucide-react"

export function Method() {
  return (
    <section id="metodo" className="relative py-24 md:py-32">
      {/* Animated chart background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chart-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.55 0.25 265)" />
              <stop offset="50%" stopColor="oklch(0.65 0.22 255)" />
              <stop offset="100%" stopColor="oklch(0.7 0.18 230)" />
            </linearGradient>
          </defs>
          <polyline
            points="0,500 150,420 300,460 450,300 600,340 750,200 900,240 1050,80 1200,120"
            fill="none"
            stroke="url(#chart-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,540 150,500 300,520 450,400 600,440 750,320 900,360 1050,200 1200,240"
            fill="none"
            stroke="oklch(0.65 0.22 255 / 0.3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Floating chart point */}
        <div className="absolute right-[10%] top-[20%] hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary blur-xl" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl md:p-12 lg:p-16 border-gradient">
          <div className="text-center">
            <div className="mb-6">
              <h2 className="font-display text-5xl font-bold tracking-tight text-gradient-silver md:text-7xl lg:text-8xl">
                MÉTODO
              </h2>
              <div className="mt-1 inline-block rounded-full bg-gradient-to-r from-primary to-accent px-6 py-1.5">
                <span className="font-display text-base font-bold tracking-wider text-background md:text-xl">
                  ELITE PERFORMANCE
                </span>
              </div>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                A <span className="font-semibold text-foreground">Elite Company Digital</span> utiliza
                o método <span className="font-semibold text-foreground">Elite Performance</span>, uma
                metodologia estratégica comprovada no mercado, focada em gerar resultados de alta
                performance para{" "}
                <span className="font-semibold text-foreground">
                  pequenas, médias e grandes empresas.
                </span>
              </p>
              <p>
                Nossa abordagem é projetada para garantir que cada real investido em marketing digital
                traga um <span className="font-semibold text-primary">retorno mensurável</span>, com
                foco em maximizar leads, aumentar o faturamento e elevar a visibilidade da sua marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
