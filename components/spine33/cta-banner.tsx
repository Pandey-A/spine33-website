export function CTABanner() {
  return (
    <section className="bg-[#f9c722] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1a0000] text-balance">
              Know Your Treatment Options
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#services"
              className="px-6 py-3 bg-[#1a0000] text-white font-medium rounded hover:bg-[#2a0000] transition-colors whitespace-nowrap text-center"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#contact-form"
              className="px-6 py-3 bg-white text-[#1a0000] font-medium rounded hover:bg-gray-100 transition-colors border-2 border-[#1a0000] whitespace-nowrap text-center"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
