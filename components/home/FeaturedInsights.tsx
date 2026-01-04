'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeaturedInsights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Featured Trends and Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Abstract light trails" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-3">Article | December 22, 2025</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                Looking ahead to an autonomous, intelligent and hyper-personal future for financial services in 2026
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                AI-powered global capability centers, autonomous banking, intelligent decisioning and hyper-personalized agentic customer experiences — four powerful trends set to redefine financial services in 2026
              </p>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all">
                <ArrowRight className="arrow-icon" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Person working at computer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-3">Article | December 4, 2025</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                The future of contact centers: A strategic experience platform
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Contact centers are rapidly evolving from cost-focused call hubs into AI-powered strategic experience platforms
              </p>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all">
                <ArrowRight className="arrow-icon" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sunset mountain landscape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold text-gray-700 mb-2">Event</div>
              <div className="text-xs text-gray-600 mb-3">April 20-22 | Las Vegas</div>
              <h3 className="text-lg font-bold text-hcl-blue mb-5 leading-tight">
                Adobe Summit 2026 - The Digital Experience Conference
              </h3>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-all">
                <ArrowRight className="w-5 h-5 text-hcl-blue" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="inline-flex items-center text-gray-700 font-medium hover:text-purple-600 transition-colors">
              Explore more trends
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="inline-flex items-center text-gray-700 font-medium hover:text-purple-600 transition-colors">
              See all events
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
