import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/effects/CustomCursor'
import { SmoothScrollProvider } from '@/components/effects/SmoothScrollProvider'
import { AudioController } from '@/components/effects/AudioController'
import { EasterEggProvider } from '@/components/effects/EasterEggProvider'

export const metadata: Metadata = {
  title: 'Harleen | Cybersecurity × AI × Builder',
  description: 'Building secure systems. Training intelligent machines. Shipping products. B.Tech CSE Cybersecurity @ VIT Chennai | 9.40 CGPA | Startup Founder | AI Researcher',
  keywords: ['Harleen', 'Cybersecurity', 'AI', 'Machine Learning', 'VIT Chennai', 'Startup', 'Portfolio', 'Developer'],
  authors: [{ name: 'Harleen' }],
  openGraph: {
    title: 'Harleen | Cybersecurity × AI × Builder',
    description: 'Building secure systems. Training intelligent machines. Shipping products.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harleen | Cybersecurity × AI × Builder',
    description: 'Building secure systems. Training intelligent machines. Shipping products.',
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <EasterEggProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <AudioController />
            {children}
          </SmoothScrollProvider>
        </EasterEggProvider>
      </body>
    </html>
  )
}
