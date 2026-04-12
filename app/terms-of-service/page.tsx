import { Header } from "@/components/spine33/header"
import { Footer } from "@/components/spine33/footer"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Header />
      <section className="py-14 lg:py-18">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0000] mb-6">Terms of Service</h1>
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>Information on this website is for awareness and consultation support. It is not a substitute for in-person medical diagnosis.</p>
            <p>Appointments and treatment plans are subject to clinical evaluation by the Spine33 medical team.</p>
            <p>By submitting the consultation form, you agree to be contacted by our team for care coordination and appointment scheduling.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
