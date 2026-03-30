import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Wall Group | At the Heart of the Community',
  description: 'Belfast\'s fastest-growing independent convenience retail network. 12+ locations across Belfast and Newtownabbey featuring SPAR, EUROSPAR, Subway, and more.',
  keywords: 'Wall Group, SPAR Belfast, convenience stores, petrol stations, Subway Belfast, GO Fuel, retail network',
  authors: [{ name: 'The Wall Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'The Wall Group | At the Heart of the Community',
    description: 'Belfast\'s fastest-growing independent convenience retail network.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'The Wall Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wall Group | At the Heart of the Community',
    description: 'Belfast\'s fastest-growing independent convenience retail network.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}