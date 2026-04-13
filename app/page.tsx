import { Suspense } from "react"
import { Header } from "@/components/spine33/header"
import { Hero } from "@/components/spine33/hero"
import { Features } from "@/components/spine33/features"
import { About } from "@/components/spine33/about"
import { Doctors } from "@/components/spine33/doctors"
import { Testimonials } from "@/components/spine33/testimonials"
import { CTABanner } from "@/components/spine33/cta-banner"
import { Services } from "@/components/spine33/services"
import { ContactForm } from "@/components/spine33/contact-form"
import { Footer } from "@/components/spine33/footer"
import { ScrollFade } from "@/components/scroll-fade"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ScrollFade>
        <Features />
      </ScrollFade>
      <ScrollFade delay={100}>
        <About />
      </ScrollFade>
      <ScrollFade delay={200}>
        <Doctors />
      </ScrollFade>
      <ScrollFade delay={100}>
        <Services />
      </ScrollFade>
      <Suspense fallback={null}>
        <ScrollFade delay={100}>
          <ContactForm />
        </ScrollFade>
      </Suspense>
      <ScrollFade delay={100}>
        <Testimonials />
      </ScrollFade>
      <ScrollFade>
        <CTABanner />
      </ScrollFade>
      <Footer />
    </main>
  )
}
