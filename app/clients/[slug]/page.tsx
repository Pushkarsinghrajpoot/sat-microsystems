import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const clientData = {
  'alj-finance': {
    name: 'ALJ Finance',
    logo: '/client/alj_finance.png',
    industry: 'Financial Services',
    location: 'Saudi Arabia'
  },
  'alamthal-financing': {
    name: 'Alamthal Financing',
    logo: '/client/Alamthal-Financing-1.png',
    industry: 'Financial Services',
    location: 'Saudi Arabia'
  },
  'saudi-etec': {
    name: 'Saudi ETEC',
    logo: '/client/Saudi_ETEC_logo-1.png',
    industry: 'Technology & Engineering',
    location: 'Saudi Arabia'
  }
}

export default function ClientPage({ params }: { params: { slug: string } }) {
  const client = clientData[params.slug as keyof typeof clientData]

  if (!client) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="relative w-full h-40 mb-6">
                    <Image 
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Industry</p>
                      <p className="text-lg text-gray-900">{client.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Location</p>
                      <p className="text-lg text-gray-900">{client.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Navigating Saudi Arabia&apos;s Evolving Cyber Threat Landscape in 2025
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Strategic IT Infrastructure and Cybersecurity Partnership with {client.name}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In 2025, the digital economy continues to expand rapidly across Saudi Arabia, driven by Vision 2030 initiatives, innovation in fintech, healthcare, logistics, and public services modernization. But this digital growth has a parallel reality: a rapidly evolving cyber threat landscape that challenges businesses and public sector organizations alike.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                A Snapshot of the Threat Landscape in Saudi Arabia
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Recent threat intelligence shows that Saudi Arabia is facing one of the most aggressive cyber environments in the Middle East. In 2025, the Kingdom accounted for approximately <strong className="text-gray-900">63% of all reported cyber incidents</strong> in the region, with phishing attacks increasing <strong className="text-gray-900">22.5%</strong> in just one quarter. Much of this surge is attributed to AI-generated phishing and deepfake social engineering campaigns that bypass traditional filters and exploit human trust.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Similarly, a 2025 cybersecurity survey of IT professionals in Saudi Arabia found that <strong className="text-gray-900">74% of organizations</strong> reported experiencing phishing attacks, making it the top cybersecurity threat in the Kingdom. The same study also highlighted that <strong className="text-gray-900">49%</strong> of respondents identified ransomware as a critical concern, yet <strong className="text-gray-900">42%</strong> of organizations lacked a formal incident response plan.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Threats Beyond Phishing: Ransomware, Data Breaches, and Dark Web Activity
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Beyond email-based threats, dark web monitoring reports indicate significant malicious activity targeting Saudi enterprises. In 2024, threat actors were found selling over <strong className="text-gray-900">1.8 million compromised email/password combinations</strong> and tens of thousands of credit card entries, illustrating how credential theft and data leakage are pervasive risks.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Economic Impact and Market Growth Signals
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cybersecurity isn&apos;t just a technical concern, it&apos;s a business imperative. Experts project that Saudi Arabia&apos;s cybersecurity market including infrastructure, services, and security operations is poised to grow from an estimated <strong className="text-gray-900">USD 3.4 billion in 2024</strong> to over <strong className="text-gray-900">USD 6 billion by 2030</strong>, driven by accelerated digital transformation and increasing incident frequency.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This growth aligns with a broader industry trend: a 2024 digital trust survey found that while <strong className="text-gray-900">62%</strong> of Saudi enterprises reported having adequate technology solutions, <strong className="text-gray-900">73%</strong> identified digital risk as a top organizational concern, often ahead of inflation or market volatility.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Strategic IT Infrastructure Matters
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Modern IT infrastructure including reliable networks, secure platforms, cloud services, and robust monitoring is foundational to business performance. But in today&apos;s threat environment, infrastructure and security are inseparable.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <p className="font-semibold text-gray-900 mb-3">Without integrated security:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Phishing and credential theft can bypass fragmented defenses.</li>
                  <li>• Cloud misconfigurations can expose sensitive systems.</li>
                  <li>• Downtime from cyber incidents can cost millions and damage reputation.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <p className="font-semibold text-gray-900 mb-3">By adopting end-to-end infrastructure and security strategies, organizations can:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✔ Reduce the likelihood and impact of cyber incidents</li>
                  <li>✔ Ensure compliance with evolving regional regulations</li>
                  <li>✔ Maintain operational continuity during threats</li>
                  <li>✔ Build trust with customers and partners</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Conclusion: A National Imperative
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Saudi Arabia&apos;s businesses and government entities are navigating a dual challenge: accelerating digital opportunity while managing sophisticated cyber risk. The data clearly shows that attacks are not only growing in number but also in complexity driven by AI and organized criminal groups.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To navigate this landscape, organizations should shift from reactive, piecemeal security measures to proactive, strategic infrastructure and security planning, a business essential, not just an IT expense.
              </p>

              {/* SAT Microsystems Section */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-10 mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  SAT Microsystems: A Trusted Cybersecurity Partner in the Region
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  For more than two decades, SAT Microsystems has worked with organizations across Saudi Arabia to strengthen IT infrastructure, cybersecurity posture, and regulatory compliance.
                </p>

                <p className="text-lg font-semibold text-gray-900 mb-6">
                  SAT&apos;s approach is built on three pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Assess</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Security and infrastructure risk assessments</li>
                      <li>• Vulnerability and penetration testing</li>
                      <li>• Compliance readiness reviews aligned with Saudi regulations</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Protect</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Endpoint and server protection</li>
                      <li>• Identity and access management (IAM)</li>
                      <li>• Network, cloud, and data security controls</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Operate</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 24×7 Security Operations Center (SOC)</li>
                      <li>• SIEM configuration, monitoring, and threat correlation</li>
                      <li>• Incident detection, response, and reporting</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  By integrating infrastructure services with managed security operations, SAT helps organizations move from reactive defense to proactive cyber resilience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'alj-finance' },
    { slug: 'alamthal-financing' },
    { slug: 'saudi-etec' }
  ]
}
