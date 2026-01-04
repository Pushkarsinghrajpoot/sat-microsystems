import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'
import { Cpu, Cog, Rocket, Lightbulb, TestTube, Package, CheckCircle, ArrowRight, Zap, TrendingUp } from 'lucide-react'

export default function EngineeringExpertisePage() {
  const capabilities = [
    {
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: 'Product Engineering',
      description: 'End-to-end product development from concept to market launch with agile methodologies.'
    },
    {
      icon: <Cog className="w-8 h-8 text-indigo-600" />,
      title: 'Platform Engineering',
      description: 'Build scalable, robust platforms that accelerate development and reduce time-to-market.'
    },
    {
      icon: <TestTube className="w-8 h-8 text-indigo-600" />,
      title: 'Quality Engineering',
      description: 'Comprehensive testing strategies ensuring reliability, performance, and security.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      title: 'DevOps & Automation',
      description: 'Streamline delivery pipelines with CI/CD, infrastructure as code, and automation.'
    }
  ]

  const services = [
    {
      category: 'Product Development',
      offerings: [
        'Custom Software Development',
        'Mobile App Development (iOS & Android)',
        'Web Application Development',
        'SaaS Product Development',
        'MVP & Prototype Development'
      ]
    },
    {
      category: 'Engineering Services',
      offerings: [
        'Legacy System Modernization',
        'Microservices Architecture',
        'API Development & Integration',
        'Performance Optimization',
        'Technical Debt Management'
      ]
    },
    {
      category: 'Quality Assurance',
      offerings: [
        'Test Automation',
        'Performance Testing',
        'Security Testing',
        'Continuous Testing',
        'QA Consulting'
      ]
    }
  ]

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', '.NET', 'Go']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB']
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Azure', 'GCP', 'Serverless', 'Edge Computing']
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: 'Accelerated Time-to-Market',
      description: 'Reduce development cycles by 40% with agile practices and automation',
      metric: '40% Faster'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
      title: 'Innovation at Scale',
      description: 'Build future-ready products that drive competitive advantage',
      metric: '3x Innovation'
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-600" />,
      title: 'Quality Assurance',
      description: 'Deliver defect-free products with comprehensive testing strategies',
      metric: '99.5% Quality'
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: 'Cost Efficiency',
      description: 'Optimize development costs while maintaining high quality standards',
      metric: '30% Savings'
    }
  ]

  const caseStudies = [
    {
      client: 'Global Fintech Platform',
      challenge: 'Building a scalable payment processing platform handling millions of transactions',
      solution: 'Developed microservices-based architecture with real-time processing capabilities',
      results: [
        'Processing 5M+ transactions daily',
        '99.99% uptime achieved',
        'Sub-second transaction processing',
        'PCI-DSS compliant infrastructure'
      ],
      tech: ['Node.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS']
    },
    {
      client: 'Healthcare IoT Solution',
      challenge: 'Creating a connected healthcare platform for remote patient monitoring',
      solution: 'Built end-to-end IoT platform with mobile apps, cloud backend, and analytics',
      results: [
        '100K+ active devices connected',
        'HIPAA compliance certified',
        'Real-time health monitoring',
        '50% reduction in hospital readmissions'
      ],
      tech: ['React Native', 'Python', 'Azure IoT', 'MongoDB', 'ML Models']
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Rocket className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Engineering & R&D Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build the Future with World-Class Engineering
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
                Transform ideas into high-performing products. Our Engineering and R&D services accelerate innovation, improve time-to-profit, and maximize return on investment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Talk to Our Engineers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive engineering services to power your digital products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engineering Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-spectrum engineering services from ideation to deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.offerings.map((offering, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mastery across modern technology stacks and frameworks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SAT Engineering?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering measurable outcomes through engineering excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>
                      <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 font-bold rounded-lg">
                        {benefit.metric}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transformative projects delivering business impact
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.client}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.tech.map((t, idx) => (
                              <span key={idx} className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-lg">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Partner with our engineering experts to turn your vision into reality.
            </p>
            <button className="px-10 py-4 bg-white text-indigo-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
