import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Análise Completa do Seu Negócio e Mercado",
    description:
      "Estudamos profundamente seu negócio, concorrência e público-alvo para mapear oportunidades reais de crescimento.",
  },
  {
    number: "02",
    title: "Criação de Estratégias Personalizadas",
    description:
      "Desenvolvemos um plano de marketing digital sob medida, alinhando campanhas de tráfego, copywriting e design para maximizar suas vendas e engajamento.",
  },
  {
    number: "03",
    title: "Execução com Alta Performance",
    description:
      "Implementamos cada etapa da estratégia utilizando as melhores ferramentas e práticas do mercado, sempre com foco em resultados rápidos e tangíveis.",
  },
  {
    number: "04",
    title: "Otimizações Contínuas",
    description:
      "Monitoramos o desempenho das campanhas, ajustamos estratégias e continuamos otimizando para garantir que você esteja sempre à frente da concorrência.",
  },
  {
    number: "05",
    title: "Relatórios Detalhados e Transparência Total",
    description:
      "Fornecemos relatórios claros e detalhados para que você acompanhe o crescimento do seu negócio a cada etapa, sem surpresas.",
  },
]

export function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left visual */}
          <div className="relative order-2 lg:sticky lg:top-32 lg:order-1 lg:h-[600px]">
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative mx-auto aspect-[3/4] h-full max-h-[600px] w-auto overflow-hidden rounded-3xl border border-border shadow-2xl">
                <Image
                  src="/phone-mockup.jpg"
                  alt="Smartphone exibindo painel de performance digital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Nosso Processo
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
                Passo a passo do nosso trabalho com o{" "}
                <span className="text-gradient-blue">Método Elite Performance</span>
              </h2>
            </div>

            <ol className="space-y-8">
              {steps.map((step, i) => (
                <li key={step.number} className="group relative flex gap-5">
                  {/* Number */}
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="font-display text-2xl font-bold text-gradient-blue md:text-3xl">
                      {step.number}
                    </span>
                    {i < steps.length - 1 && (
                      <div className="mt-2 h-full min-h-[60px] w-px bg-gradient-to-b from-primary/40 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1 pb-2">
                    <h3 className="mb-2 font-display text-lg font-bold leading-snug text-foreground md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
