'use client'

import { ArrowRight } from 'lucide-react'

export default function LatestNews() {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Abstract blue waves",
      source: "Business Today",
      date: "December 24, 2025",
      title: "SAT microsystems to acquire business intelligence platform Jaspersoft for $240 million"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern building entrance",
      source: "Mint",
      date: "December 23, 2025",
      title: "SAT microsystems spends $400 million on acquisitions in a week as it bets on improving AI, data offerings"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Office building exterior",
      source: "Business Standard",
      date: "December 18, 2025",
      title: "SAT microsystems buys telco solutions business from HPE for nearly $160 million"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-3">{item.source} | {item.date}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all">
                  <ArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
