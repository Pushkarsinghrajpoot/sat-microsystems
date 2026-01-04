'use client'

import { ArrowRight, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function OurPurpose() {
  return (
    <section className="py-16 gradient-light-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
          <p className="text-2xl lg:text-3xl text-gray-900 leading-relaxed max-w-5xl mx-auto">
            Meet the visionary leader driving <span className="font-semibold">innovation and growth</span> at SAT Microsystems.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row lg:h-[480px]">
            <div className="lg:w-5/12 h-[400px] lg:h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mr. Arif - Head of Operation" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Mr. Arif Khan</h3>
                  <Link 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-base text-purple-600 font-semibold">Head of Operation</p>
              </div>

              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="text-sm lg:text-base">
                  With <span className="font-semibold">more than two decades</span> shaping the future of technology, Mr. Khan has built a legacy of innovation, particularly in <span className="font-semibold">Artificial Intelligence and Managed IT Services</span>. His impressive array of awards and more than <span className="font-semibold">eight technical certifications</span> speak to his expertise and dedication.
                </p>

                <p className="text-sm lg:text-base">
                  Mr. Khan began his career handling accounts for notable companies like <span className="font-semibold">Aviva, Daksh, Wipro and GE</span>, further honing his leadership skills with <span className="font-semibold">Goldman Sachs</span>. His global reach spans from the <span className="font-semibold">United States to Asia and Africa</span>, recently concentrating on the <span className="font-semibold">Middle Eastern market</span>.
                </p>

                <p className="text-sm lg:text-base">
                  An advocate for <span className="font-semibold">environmental sustainability</span>, Mr. Khan supports green initiatives and philanthropic endeavors aimed at creating a better world.
                </p>
              </div>

              <div className="mt-6">
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Learn more about our leadership
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
