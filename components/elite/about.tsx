import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Gestão de Tráfego Pago",
  "Social Media",
  "Copywriting Persuasivo",
  "Design Impactante",
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left visual */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border shadow-2xl">
              <Image
                src="/laptop-mockup.jpg"
                alt="Laptop exibindo dashboard de performance digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            {/* Floating notifications */}
            <NotificationCard
              className="absolute left-4 top-8 md:left-0 md:top-12"
              delay="0s"
            />
            <NotificationCard
              className="absolute right-4 top-1/2 md:-right-6 md:top-[45%]"
              delay="1s"
            />
            <NotificationCard
              className="absolute bottom-8 left-1/4 md:bottom-12 md:left-12"
              delay="2s"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Sobre Nós
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Elite Company <span className="text-gradient-blue">Digital</span>
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A <span className="font-semibold text-foreground">Elite Company Digital</span> é uma
              agência especializada em <span className="font-semibold text-foreground">gerar
              resultados reais</span> através de estratégias de marketing digital de alta performance.
              Nosso foco é transformar cada centavo investido em{" "}
              <span className="font-semibold text-foreground">aumento de vendas</span> e crescimento do
              faturamento.
            </p>
            <p>
              Liderada por <span className="font-semibold text-foreground">Daniel Brito</span>, um
              profissional com 4 anos de experiência no Marketing Digital e mais de{" "}
              <span className="font-semibold text-primary">13 milhões de impressões</span> geradas
              para clientes, estamos focados em impulsionar o sucesso da sua empresa no mundo digital.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 pt-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2.5 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function NotificationCard({ className, delay }: { className?: string; delay?: string }) {
  return (
    <div
      className={`animate-float rounded-xl border border-primary/30 bg-card/95 p-3 shadow-2xl backdrop-blur-md ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
          <span className="font-display text-sm font-bold text-background">E</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Venda realizada</p>
          <p className="text-[11px] text-muted-foreground">Comissão: R$ 294,24</p>
        </div>
        <span className="ml-2 text-[10px] text-muted-foreground">agora</span>
      </div>
    </div>
  )
}
