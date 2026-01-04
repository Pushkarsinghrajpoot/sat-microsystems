import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'
import { Cloud, Database, Lock, Gauge, Globe, Server, CheckCircle, ArrowRight, Zap } from 'lucide-react'

export default function CloudExpertisePage() {
  const capabilities = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: 'Cloud Migration & Modernization',
      description: 'Seamlessly migrate legacy systems to cloud infrastructure with zero downtime and enhanced performance.'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement optimal multi-cloud architectures across AWS, Azure, and Google Cloud Platform.'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: 'Cloud Security & Compliance',
      description: 'Ensure robust security posture and regulatory compliance across your cloud environments.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-blue-600" />,
      title: 'Cloud Optimization',
      description: 'Reduce costs and improve performance through continuous monitoring and optimization.'
    }
  ]

  const cloudPlatforms = [
    {
      name: 'Amazon Web Services (AWS)',
      services: ['EC2 & Compute', 'S3 & Storage', 'RDS & Databases', 'Lambda & Serverless', 'EKS & Containers']
    },
    {
      name: 'Microsoft Azure',
      services: ['Virtual Machines', 'Blob Storage', 'Azure SQL', 'Functions', 'AKS & DevOps']
    },
    {
      name: 'Google Cloud Platform',
      services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'GKE & AI/ML']
    }
  ]

  const solutions = [
    {
      title: 'CloudSMART Assessment',
      description: 'Comprehensive evaluation of your current infrastructure and cloud readiness',
      features: ['Infrastructure audit', 'Cost analysis', 'Migration roadmap', 'Risk assessment']
    },
    {
      title: 'CloudSMART Migration',
      description: 'End-to-end migration services with minimal business disruption',
      features: ['Lift-and-shift', 'Re-platforming', 'Re-architecting', 'Data migration']
    },
    {
      title: 'CloudSMART Operations',
      description: '24/7 managed cloud services and continuous optimization',
      features: ['Monitoring & alerts', 'Performance tuning', 'Cost optimization', 'Security management']
    }
  ]

  const benefits = [
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Average savings achieved through cloud optimization'
    },
    {
      metric: '99.9%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability and availability'
    },
    {
      metric: '60%',
      label: 'Faster Deployment',
      description: 'Accelerated time-to-market for applications'
    },
    {
      metric: '24/7',
      label: 'Support',
      description: 'Round-the-clock monitoring and incident response'
    }
  ]

  const useCases = [
    {
      industry: 'Financial Services',
      challenge: 'Legacy infrastructure limiting scalability and innovation',
      solution: 'Migrated core banking systems to AWS with enhanced security and compliance',
      results: ['50% reduction in infrastructure costs', '99.99% uptime achieved', 'PCI-DSS compliance maintained']
    },
    {
      industry: 'Healthcare',
      challenge: 'Need for secure, HIPAA-compliant cloud infrastructure for patient data',
      solution: 'Implemented multi-cloud architecture on Azure with advanced encryption',
      results: ['HIPAA compliance certified', '40% improvement in data access speed', 'Enhanced disaster recovery']
    },
    {
      industry: 'E-commerce',
      challenge: 'Handling seasonal traffic spikes and global expansion',
      solution: 'Built auto-scaling infrastructure on GCP with CDN integration',
      results: ['10x traffic handling capacity', '35% reduction in latency', 'Global deployment in 15 regions']
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Cloud className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">CloudSMART Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Accelerate Innovation with Cloud Excellence
              </h1>
              <p className="text-xl lg:text-2xl text-cyan-100 mb-8 leading-relaxed">
                Transform your business with scalable, secure, and cost-optimized cloud infrastructure. Our CloudSMART approach ensures seamless migration and continuous optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Start Your Cloud Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Free Cloud Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud services to power your digital transformation
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

        {/* Cloud Platforms Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-Cloud Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Certified experts across all major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                  <Globe className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{platform.name}</h3>
                  <ul className="space-y-3">
                    {platform.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CloudSMART Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">CloudSMART Methodology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven approach to cloud adoption and optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <Server className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <Zap className="w-4 h-4 text-blue-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Metrics */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-cyan-100">
                Measurable impact across our cloud engagements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-3">{benefit.metric}</div>
                  <div className="text-xl font-semibold text-cyan-200 mb-2">{benefit.label}</div>
                  <div className="text-cyan-100">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world cloud transformations delivering business value
              </p>
            </div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <div className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                        {useCase.industry}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-700">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                      <ul className="space-y-2">
                        {useCase.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
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
        <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Cloud Infrastructure?</h2>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Get a free cloud assessment and discover how CloudSMART can transform your business.
            </p>
            <button className="px-10 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule Free Assessment
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
