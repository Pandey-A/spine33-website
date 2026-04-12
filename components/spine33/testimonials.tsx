"use client"

import { useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best place for spine problems.. Amazing experience. The doctors are very professional and caring. Highly recommended!",
    date: "2 months ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent treatment for my chronic back pain. After years of suffering, I finally found relief here. Thank you Spine33!",
    date: "1 month ago",
  },
  {
    name: "Amit Patel",
    rating: 5,
    text: "Very satisfied with the treatment. The staff is friendly and the doctors take time to explain everything properly.",
    date: "3 weeks ago",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#f9c722] font-medium tracking-wide uppercase text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a0000] mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#f9c722] text-[#f9c722]" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">5.0</span>
          </div>
          <p className="text-gray-500 text-sm">
            Based on <span className="font-medium">Google Reviews</span>
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f9c722] text-[#f9c722]" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 text-pretty leading-relaxed min-h-[96px]">
              &quot;{testimonials[activeIndex].text}&quot;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#1a0000]">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[activeIndex].date}</p>
              </div>
              <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevTestimonial}
              className="px-3 py-1.5 rounded border border-[#1a0000]/20 text-sm text-[#1a0000]"
              aria-label="Previous testimonial"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? "bg-[#1a0000]" : "bg-[#1a0000]/25"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="px-3 py-1.5 rounded border border-[#1a0000]/20 text-sm text-[#1a0000]"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f9c722] text-[#f9c722]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-pretty leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1a0000]">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
                <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Google">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
              <path
                fill="currentColor"
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
              />
            </svg>
            <span className="text-sm text-gray-600">Verified by Trustindex</span>
          </div>
        </div>
      </div>
    </section>
  )
}
