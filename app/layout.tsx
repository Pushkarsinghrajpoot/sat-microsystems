import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'SAT microsystems - Supercharging Progress',
  description: 'SAT microsystems website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ height: 'auto', minHeight: '100%' }}>
      <body className={`${inter.className} bg-white`} style={{ height: 'auto', minHeight: '100%' }}>
        {children}
      </body>
    </html>
  )
}
