import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'
import { Brain, Sparkles, TrendingUp, Shield, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react'

export default function AIExpertisePage() {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'Generative AI Solutions',
      description: 'Build custom AI models and applications that generate content, code, and insights tailored to your business needs.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: 'AI-Powered Automation',
      description: 'Streamline operations with intelligent automation that learns and adapts to optimize workflows.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to forecast trends, anticipate challenges, and make data-driven decisions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'AI Security & Governance',
      description: 'Implement responsible AI practices with robust security, compliance, and ethical frameworks.'
    }
  ]

  const useCases = [
    {
      industry: 'Financial Services',
      title: 'Intelligent Fraud Detection',
      description: 'Real-time transaction monitoring and anomaly detection powered by advanced machine learning algorithms.',
      metrics: ['99.5% accuracy', '50% faster detection', '30% cost reduction']
    },
    {
      industry: 'Healthcare',
      title: 'AI-Driven Diagnostics',
      description: 'Accelerate medical image analysis and patient diagnosis with deep learning models.',
      metrics: ['95% diagnostic accuracy', '60% time savings', 'Enhanced patient outcomes']
    },
    {
      industry: 'Retail & E-commerce',
      title: 'Personalized Customer Experience',
      description: 'Deliver hyper-personalized recommendations and dynamic pricing strategies.',
      metrics: ['40% increase in conversion', '25% higher AOV', 'Improved retention']
    }
  ]

  const services = [
    'AI Strategy & Consulting',
    'Custom AI Model Development',
    'Large Language Model (LLM) Integration',
    'Computer Vision Solutions',
    'Natural Language Processing (NLP)',
    'AI Infrastructure & MLOps',
    'AI Training & Enablement',
    'Responsible AI Implementation'
  ]

  const benefits = [
    {
      title: 'Accelerated Innovation',
      description: 'Reduce time-to-market with AI-powered development and automation.'
    },
    {
      title: 'Enhanced Decision Making',
      description: 'Make confident decisions backed by predictive insights and data analytics.'
    },
    {
      title: 'Operational Excellence',
      description: 'Optimize processes, reduce costs, and improve efficiency across operations.'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI capabilities that differentiate your business.'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">AI & Generative AI Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with Artificial Intelligence
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Harness the power of AI and GenAI to automate processes, unlock insights, and create intelligent solutions that drive measurable business outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your unique business challenges
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

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world applications delivering measurable impact across industries
              </p>
            </div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="inline-block px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full mb-4">
                        {useCase.industry}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">{useCase.description}</p>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                        <ul className="space-y-3">
                          {useCase.metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end AI services from strategy to implementation and optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-purple-600">
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-900 font-semibold">{service}</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SAT Microsystems for AI?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with experts who understand both technology and business transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your AI Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how AI can transform your business operations and drive innovation.
            </p>
            <button className="px-10 py-4 bg-white text-purple-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Contact Our AI Experts
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
