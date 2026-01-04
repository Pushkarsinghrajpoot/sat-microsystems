'use client'

import { Sparkles, Search, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-light-cyan py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 lg:p-16">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-2">Have tech questions?</h1>
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-10">
              Our <span className="text-hcl-blue font-medium">AI answer engine</span> can help.
            </h2>

            <div className="max-w-3xl mx-auto mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full search-icon-bg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <input 
                  type="text" 
                  placeholder="Please ask a question or initiate a search"
                  className="w-full pl-16 pr-16 py-4 text-base bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                  <button className="bg-purple-btn p-3 rounded-lg text-white hover:bg-purple-700 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <span className="text-gray-600 font-medium">Suggestions</span>
              <button className="suggestion-pill px-4 py-2 rounded-full hover:shadow-sm transition-all flex items-center space-x-1">
                <span className="text-gray-700">What services does SAT microsystems offer in Cloud Migration?</span>
                <ArrowRight className="w-4 h-4 text-hcl-blue" />
              </button>
              <button className="suggestion-pill px-4 py-2 rounded-full hover:shadow-sm transition-all flex items-center space-x-1">
                <span className="text-gray-700">What services does SAT microsystems offer in Cybersecurity?</span>
                <ArrowRight className="w-4 h-4 text-hcl-blue" />
              </button>
              <button className="suggestion-pill px-4 py-2 rounded-full hover:shadow-sm transition-all flex items-center space-x-1">
                <span className="text-gray-700">Generative AI trends for 2025</span>
                <ArrowRight className="w-4 h-4 text-hcl-blue" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
