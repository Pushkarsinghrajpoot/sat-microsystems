'use client'

import { ChevronRight, Award, Star, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function AwardsRecognitions() {
  const awards = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'TechBehemoths Award 2024',
      description: 'Best Company in Saudi Arabia - Cybersecurity',
      link: 'https://techbehemoths.com/awards-2024/cybersecurity/saudi-arabia',
      year: '2024'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'TechBehemoths Award 2024',
      description: 'Best Company in Saudi Arabia - Artificial Intelligence',
      link: 'https://techbehemoths.com/awards-2024/artificial-intelligence/saudi-arabia',
      year: '2024'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'TechBehemoths Award 2023',
      description: 'Award-winning Company for Cybersecurity Services',
      link: 'https://techbehemoths.com/awards-2023/cybersecurity/saudi-arabia#view=57544',
      year: '2023'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Top-Rated on Clutch',
      description: '4.7-star rating ⭐⭐⭐⭐☆ from verified clients',
      link: 'https://clutch.co/profile/sat-microsystems',
      year: '2024'
    }
  ]

  return (
    <section className="py-16 gradient-purple-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-10">Awards & Recognitions</h2>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Link
                  key={index}
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pb-6 border-b border-white border-opacity-30 last:border-0 hover:bg-white hover:bg-opacity-10 transition-all duration-200 rounded-lg p-4 -mx-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{award.title}</h3>
                        <span className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs font-semibold">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed opacity-90 group-hover:opacity-100">
                        {award.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://techbehemoths.com/company/sat-microsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View TechBehemoths Profile
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="https://clutch.co/profile/sat-microsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                View Clutch Profile
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ice climber" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
