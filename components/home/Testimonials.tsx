'use client'

import { ChevronLeft, ChevronRight, Pause } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-16 gradient-light-blue">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>

        <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg">
          <div className="quote-mark mb-6">&quot;</div>
          <p className="text-xl lg:text-2xl text-gray-900 mb-10 leading-relaxed">
            &quot;SAT microsystems helped us do the integration of our acquired businesses, not only faster but also better and cheaper. They have been a <span className="font-bold">trusted and transparent partner who has always been willing to travel fast!</span>&quot;
          </p>
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Andy Nallappan" 
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h4 className="text-xl font-bold text-gray-900">Andy Nallappan</h4>
              <p className="text-base text-gray-600">Former CTO and Head of Software Business Operations, Broadcom Software</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <button className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-all">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex space-x-2">
            <div className="w-24 h-1 bg-gray-300 rounded"></div>
            <div className="w-24 h-1 bg-purple-600 rounded"></div>
            <div className="w-24 h-1 bg-gray-300 rounded"></div>
          </div>
          <button className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-all">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-all">
            <Pause className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
