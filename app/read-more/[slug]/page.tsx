import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/spine33/header"
import { Footer } from "@/components/spine33/footer"
import { ContactForm } from "@/components/spine33/contact-form"
import { getReadMoreArticleBySlug, readMoreArticles } from "@/lib/read-more-content"

type ReadMorePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return readMoreArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ReadMorePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getReadMoreArticleBySlug(slug)

  if (!article) {
    return { title: "Page Not Found | Spine33" }
  }

  return {
    title: `${article.featureTitle} | Spine33`,
    description: article.heroSubtitle,
  }
}

export default async function ReadMorePage({ params }: ReadMorePageProps) {
  const { slug } = await params
  const article = getReadMoreArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <Header />

      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#f7f8ff] via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Link href="/#features" className="inline-flex items-center gap-1 text-sm font-medium text-[#8b0000] hover:text-[#5f0000] transition-colors mb-4">
            Back to Highlights
          </Link>

          <p className="text-[#f9c722] text-sm font-semibold uppercase tracking-wide mb-2">Read More</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1a0000] leading-tight mb-4 max-w-5xl">
            {article.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">{article.heroSubtitle}</p>

          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-[#1a0000] text-white font-semibold hover:bg-[#300000] transition-colors"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a0000] mb-4">{article.introHeading}</h2>
              <p className="text-gray-700 leading-8">{article.introParagraph}</p>
            </div>

            {article.sections.map((section) => (
              <div key={section.heading} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h3 className="text-2xl font-serif font-bold text-[#1a0000] mb-4">{section.heading}</h3>

                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-gray-700 leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-gray-700 leading-7">
                        <CheckCircle2 className="w-5 h-5 text-[#f9c722] mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-2xl font-serif font-bold text-[#1a0000] mb-3">Need Expert Guidance?</h3>
              <p className="text-gray-600 leading-7 mb-6">
                Speak with the Spine33 team and get a personalized assessment plan for your pain and mobility goals.
              </p>
              <a
                href="#lead-form"
                className="w-full inline-flex justify-center items-center px-5 py-3 rounded-md bg-[#f9c722] text-[#1a0000] font-semibold hover:bg-[#dfb01d] transition-colors"
              >
                Request a Call Back
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ContactForm
        defaultService={article.featureTitle}
        sectionId="lead-form"
        showSpecialties={false}
        title="Start Your Recovery Plan"
        subtitle="Share your details and our specialists will contact you with the next best step."
      />

      <Footer />
    </main>
  )
}
