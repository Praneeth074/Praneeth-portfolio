import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore: allow global CSS import in app layout
import "./globals.css";
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider'
import { NoiseOverlay } from '@/components/layout/NoiseOverlay'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alex Morgan — Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js and crafting high-performance digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Alex Morgan' }],
  creator: 'Alex Morgan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexmorgan.dev',
    title: 'Alex Morgan — Full Stack Developer',
    description: 'Crafting premium digital experiences with modern web technologies.',
    siteName: 'Alex Morgan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan — Full Stack Developer',
    description: 'Crafting premium digital experiences with modern web technologies.',
    creator: '@alexmorgan',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NoiseOverlay />
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
