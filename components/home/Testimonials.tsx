'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      logo: 'R',
      logoColor: 'bg-blue-600',
      quote: "I've Been A Customer For More Than A Decade. SAT Is An Example Of The Way Managed Services Should Be Done. They Do Their Very Best To Make Sure You Succeed. If There's An Issue, They Step In Immediately. We Will Continue To Be A Customer For Years To Come.",
      name: 'Daniel Legrante',
      title: 'CIO, Restaurant Product Supplier'
    },
    {
      logo: 'J',
      logoColor: 'bg-blue-700',
      quote: "SAT Implemented Such A Powerful Platform That We Had No Break In Service When Our Employees Had To Work From Home Due To The COVID-19 Pandemic. We Weren't Concerned About How To Shift To A Remote Working Environment Because Integris Facilitated A Seamless Transition.",
      name: 'Amanda Parks',
      title: 'Network Manager, Healthcare Organization'
    },
    {
      logo: 'N',
      logoColor: 'bg-black',
      quote: 'SAT Has Been An Outstanding Partner. Their Team Is Professional, Knowledgeable And Customer-Service Driven. SAT Proactive Collaborative Approach Has Been Critical In Helping Us Build An IT Infrastructure That Enables Our Success Today And Supports Our Long-Term Positioning Strategy.',
      name: 'John Labkins',
      title: 'Partner & CEO, Telecommunication Company'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 gradient-light-blue">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>

        <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg">
          <div className="flex items-start gap-6 mb-8">
            <div className={`${currentTestimonial.logoColor} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-3xl font-bold">{currentTestimonial.logo}</span>
            </div>
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-900 mb-10 leading-relaxed">
            {currentTestimonial.quote}
          </p>
          
          <div>
            <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
            <p className="text-base text-gray-600">{currentTestimonial.title}</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <button 
            onClick={prevSlide}
            className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`w-24 h-1 rounded transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
