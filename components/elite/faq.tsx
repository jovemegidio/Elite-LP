"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Como o Método Elite Performance pode ajudar minha empresa?",
    answer:
      "Nosso método é focado em gerar resultados rápidos e eficazes, aumentando seu faturamento e captando leads qualificados. Nosso processo é baseado em estratégias comprovadas que trazem um retorno sólido sobre o investimento.",
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer:
      "Os primeiros resultados aparecem em poucas semanas, com otimizações contínuas ao longo dos meses. Resultados consistentes e escaláveis são alcançados a partir do terceiro mês de trabalho conjunto.",
  },
  {
    question: "Qual é o investimento necessário?",
    answer:
      "Cada projeto é único e o investimento varia de acordo com o porte da empresa, objetivos e canais escolhidos. Após uma análise completa do seu negócio, apresentamos uma proposta personalizada.",
  },
  {
    question: "Qual a diferença entre a Elite Company Digital e outras agências?",
    answer:
      "Nossa diferença está no foco absoluto em performance e resultados mensuráveis. Trabalhamos com estratégias personalizadas, relatórios transparentes e um time dedicado que atua como uma extensão do seu negócio.",
  },
  {
    question: "Como vocês garantem os resultados?",
    answer:
      "Garantimos resultados através do nosso método comprovado, monitoramento constante de métricas, otimizações semanais e relatórios detalhados. Trabalhamos com KPIs claros definidos junto com você desde o início.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-display text-5xl font-bold tracking-tight text-gradient-silver md:text-7xl">
            FAQ
          </h2>
          <p className="mt-2 text-lg font-medium text-muted-foreground md:text-xl">
            Perguntas Frequentes
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-xl border transition-all",
                  isOpen
                    ? "border-primary/50 bg-card shadow-[0_0_40px_oklch(0.65_0.22_255_/_0.15)]"
                    : "border-border bg-card/50",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-card md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold leading-snug md:text-base",
                      isOpen ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
