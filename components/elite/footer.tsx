import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Agência especializada em performance digital. Transformamos sua presença online em
              resultados reais e mensuráveis.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink icon={Instagram} href="#" label="Instagram" />
              <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
              <SocialLink icon={MessageCircle} href="#" label="WhatsApp" />
              <SocialLink icon={Mail} href="#" label="E-mail" />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Método
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Processo
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contato@elitecompany.digital</li>
              <li>+55 (00) 00000-0000</li>
              <li>Atendimento Seg–Sex, 9h–18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Elite Company Digital. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  icon: Icon,
  href,
  label,
}: {
  icon: typeof Instagram
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/40 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
    >
      <Icon size={16} />
    </a>
  )
}
