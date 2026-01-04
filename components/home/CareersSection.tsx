'use client'

import { ArrowRight } from 'lucide-react'

export default function CareersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Careers</h2>

        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Careers at SAT microsystems
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We invite you to supercharge your potential. Find what inspires and drives you. Find your spark.
              </p>
              <div>
                <button className="bg-purple-btn text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-purple-700 transition-colors">
                  <span>Explore careers</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-60 lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional woman smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
