'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AreasOfExpertise() {
  const expertiseAreas = [
    {
      title: 'AI',
      slug: 'ai',
      description: 'SAT microsystems empowers organizations across industries to identify and seize opportunities to leverage AI and GenAI to automate and accelerate business processes.'
    },
    {
      title: 'Cloud',
      slug: 'cloud',
      description: "SAT microsystems' exclusive CloudSMART offerings and services enable organizations to optimize cloud to accelerate innovation and agility at scale."
    },
    {
      title: 'Engineering',
      slug: 'engineering',
      description: 'SAT microsystems Engineering and R&D services (ERS) empower enterprises to improve time-to-profit, accelerate product development and maximize return on innovation.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Areas of Expertise</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            With expertise in AI, Cloud and Engineering, we deliver solutions that fulfill the traditional, transformational and future needs of clients across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Link href={`/expertise/${area.slug}`} key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover cursor-pointer h-full">
                <div className="mb-6">
                  {area.title === 'AI' && (
                    <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="30" r="12" stroke="#0066CC" strokeWidth="2.5" fill="none"/>
                      <circle cx="40" cy="30" r="4" fill="#0066CC"/>
                      <path d="M40 42 L40 60" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M32 60 L48 60" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M40 60 L40 68" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M40 68 L45 73" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  )}
                  {area.title === 'Cloud' && (
                    <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                      <path d="M25 35 Q25 25 35 25 L45 25 Q55 25 55 35 L55 45 Q55 55 45 55 L35 55 Q25 55 25 45 Z" stroke="#0066CC" strokeWidth="2.5" fill="none"/>
                      <path d="M55 40 L70 40" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M65 35 L70 40 L65 45" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  )}
                  {area.title === 'Engineering' && (
                    <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="20" stroke="#0066CC" strokeWidth="2.5" fill="none"/>
                      <circle cx="40" cy="40" r="12" stroke="#0066CC" strokeWidth="2.5" fill="none"/>
                      <path d="M40 20 L40 28" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M40 52 L40 60" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M35 35 L40 40 L45 35" stroke="#6B2D9E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
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
