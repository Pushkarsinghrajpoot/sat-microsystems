'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LatestNews() {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cybersecurity concept",
      source: "Arab News",
      date: "January 2026",
      title: "Saudi cybersecurity sector adds $4.9bn to GDP",
      link: "https://www.arabnews.com/node/2601856/business-economy"
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cybersecurity market",
      source: "Saudi Gazette",
      date: "January 2026",
      title: "Saudi cybersecurity market hits SR15.2 billion in 2024, NCA report shows",
      link: "https://saudigazette.com.sa/article/655064"
    },
    {
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "AI cyber threats",
      source: "Arab News",
      date: "January 2026",
      title: "Over 60% of Saudi firms highly aware of AI-driven cyber threats: Cisco Index",
      link: "https://www.arabnews.com/node/2623860"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover block"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
