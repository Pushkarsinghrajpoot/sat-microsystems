'use client'

import { useState, useEffect, useRef } from 'react'
import { Pause, Play, ArrowRight } from 'lucide-react'

export default function FeaturedAnnouncement() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const wave1Ref = useRef<SVGAnimateElement>(null)
  const wave2Ref = useRef<SVGAnimateElement>(null)

  const slides = [
    {
      id: 'cost',
      label: '70% Cost Cut',
      title: 'Cut maintenance spend up to 70%',
      description: "We'll implement IT Infrastructure solutions that reduce your costs by up to 70% so you can focus on driving core business growth."
    },
    {
      id: 'downtime',
      label: 'Zero Downtime',
      title: 'Say goodbye to system downtime',
      description: "We implement strategies & best practices to ensure system downtime never happens in your company."
    },
    {
      id: 'adaptation',
      label: '24hr Service',
      title: 'Adapt Services in Less Than 24hrs',
      description: 'Quickly scale our services up or down to match your company needs with rapid response time.'
    },
    {
      id: 'issues',
      label: 'No Issues',
      title: "An IT Manager's Dream: End Minor Issues",
      description: 'Stop worrying about tiny IT problems & stay focused on your important work with our proactive support.'
    }
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, slides.length])

  useEffect(() => {
    if (wave1Ref.current && wave2Ref.current) {
      if (isPaused) {
        wave1Ref.current.beginElement()
        wave1Ref.current.endElement()
        wave2Ref.current.beginElement()
        wave2Ref.current.endElement()
      } else {
        wave1Ref.current.beginElement()
        wave2Ref.current.beginElement()
      }
    }
  }, [isPaused])

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-light-cyan pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-between relative" style={{ minHeight: '600px' }}>
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-6">
                  <p className="text-lg text-purple-600 font-semibold mb-3">
                    Proven IT Leader
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
                    Developing innovative solutions that reduce business costs and complexity
                  </h2>
                </div>
                
                <div className="py-6" style={{ minHeight: '280px' }}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight transition-all duration-300">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300">
                    {slides[currentSlide].description}
                  </p>
                </div>

                <div className="mt-4">
                  <button className="bg-purple-btn text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm mt-8 pt-6 border-t border-gray-200">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`pb-2 border-b-2 transition-all duration-200 ${
                      currentSlide === index
                        ? 'text-gray-900 font-semibold border-gray-900'
                        : 'text-gray-400 hover:text-gray-600 border-transparent hover:border-gray-300'
                    }`}
                  >
                    {slide.label}
                  </button>
                ))}
                <button
                  onClick={togglePause}
                  className="p-2 hover:bg-gray-100 rounded transition-colors ml-2"
                  aria-label={isPaused ? 'Play' : 'Pause'}
                >
                  {isPaused ? (
                    <Play className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Pause className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(156, 39, 176, 0.2) 0%, transparent 70%)' }}></div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4DD0E1', stopOpacity: 0.8 }} />
                        <stop offset="50%" style={{ stopColor: '#7B68EE', stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: '#9C27B0', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path d="M 0,300 Q 200,200 400,300 T 800,300 L 800,600 L 0,600 Z" fill="url(#waveGradient)" opacity="0.6">
                      <animate
                        ref={wave1Ref}
                        attributeName="d"
                        dur="10s"
                        repeatCount="indefinite"
                        values="M 0,300 Q 200,200 400,300 T 800,300 L 800,600 L 0,600 Z;
                                M 0,300 Q 200,400 400,300 T 800,300 L 800,600 L 0,600 Z;
                                M 0,300 Q 200,200 400,300 T 800,300 L 800,600 L 0,600 Z"
                        begin={isPaused ? 'indefinite' : '0s'}
                      />
                    </path>
                    <path d="M 0,350 Q 200,250 400,350 T 800,350 L 800,600 L 0,600 Z" fill="url(#waveGradient)" opacity="0.4">
                      <animate
                        ref={wave2Ref}
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="M 0,350 Q 200,250 400,350 T 800,350 L 800,600 L 0,600 Z;
                                M 0,350 Q 200,450 400,350 T 800,350 L 800,600 L 0,600 Z;
                                M 0,350 Q 200,250 400,350 T 800,350 L 800,600 L 0,600 Z"
                        begin={isPaused ? 'indefinite' : '0s'}
                      />
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
