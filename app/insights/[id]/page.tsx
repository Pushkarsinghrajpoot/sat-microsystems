'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { insights } from '@/app/insights/data'

type InsightPageProps = {
  params: { id: string }
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = insights.find((item) => item.id === params.id)

  if (!insight) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-purple-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>

          <div className="mb-6">
            <p className="text-sm text-gray-500">Article | {insight.date}</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">{insight.title}</h1>
            <p className="text-base text-gray-700">{insight.description}</p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={insight.image}
              alt={insight.alt}
              className="w-full h-80 object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-800">
            {insight.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim()
              if (!trimmed) return null

              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold text-gray-900">
                    {trimmed.replace(/\*\*/g, '')}
                  </h3>
                )
              }

              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').filter(Boolean)
                return (
                  <ul key={idx} className="list-disc list-inside">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={idx}>
                  {trimmed.replace(/\*\*/g, '')}
                </p>
              )
            })}
          </article>
        </div>
      </section>
    </main>
  )
}
