'use client'

import { ArrowRight } from 'lucide-react'

export default function FooterCTA() {
  return (
    <section className="gradient-purple-blue py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">SAT microsystems</div>
            <div className="text-xl">Supercharging Progress™</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-all inline-flex items-center justify-center">
              Contact us
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center">
              Subscribe
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
