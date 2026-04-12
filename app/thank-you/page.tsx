import Link from "next/link"
import { Header } from "@/components/spine33/header"
import { Footer } from "@/components/spine33/footer"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 text-center">
            <p className="text-[#f9c722] text-sm font-semibold uppercase tracking-wide mb-2">Thank You</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0000] mb-4">
              Your Request Has Been Submitted
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              We have received your details successfully. Our team will contact you shortly to help with the next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="px-6 py-3 rounded-md bg-[#1a0000] text-white font-semibold hover:bg-[#2d0000] transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/#services"
                className="px-6 py-3 rounded-md border border-[#1a0000] text-[#1a0000] font-semibold hover:bg-[#1a0000] hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
