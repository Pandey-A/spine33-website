import { Header } from "@/components/spine33/header"
import { Footer } from "@/components/spine33/footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Header />
      <section className="py-14 lg:py-18">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0000] mb-6">Privacy Policy</h1>
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>We respect your privacy and only collect information required to serve your consultation request and provide care support.</p>
            <p>Your submitted details are used for appointment coordination, treatment communication, and service updates from Spine33.</p>
            <p>We do not sell your personal data. If you need data updates or removal requests, please contact us at spine33ngp@gmail.com.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
