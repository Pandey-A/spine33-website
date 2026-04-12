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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Doctors />
      <Services />
      <ContactForm />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
