'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { insights } from '@/app/insights/data'

export default function FeaturedInsights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Featured Trends and Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {insights.map((insight) => (
            <Link
              key={insight.id}
              href={`/insights/${insight.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover block"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={insight.image}
                  alt={insight.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-3">Article | {insight.date}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {insight.description}
                </p>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all">
                  <ArrowRight className="arrow-icon" />
                </div>
              </div>
            </Link>
          ))}
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
