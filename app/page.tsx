import { Navbar } from "@/components/elite/navbar"
import { Hero } from "@/components/elite/hero"
import { About } from "@/components/elite/about"
import { ForWho } from "@/components/elite/for-who"
import { Method } from "@/components/elite/method"
import { Comparison } from "@/components/elite/comparison"
import { Services } from "@/components/elite/services"
import { Process } from "@/components/elite/process"
import { Faq } from "@/components/elite/faq"
import { Cta } from "@/components/elite/cta"
import { Footer } from "@/components/elite/footer"

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <ForWho />
      <Method />
      <Comparison />
      <Services />
      <Process />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
