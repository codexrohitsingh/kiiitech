import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'KIITECH - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology',
  description: 'Leading institute for BCA, Diploma, BBA, and PGDM programs. Excellence in technical education with 100% placement support and industry partnerships.',
  keywords: ['KIITECH', 'BCA', 'Diploma', 'BBA', 'PGDM', 'Technical Education', 'Innovation', 'Engineering'],
  authors: [{ name: 'KIITECH' }],
  creator: 'KIITECH',
  publisher: 'KIITECH',
  metadataBase: new URL('https://kiitech.edu'),
  alternates: {
    canonical: 'https://kiitech.edu',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kiitech.edu',
    title: 'KIITECH - Excellence in Technical Education',
    description: 'Leading institute for BCA, Diploma, BBA, and PGDM programs with world-class infrastructure and placement support.',
    siteName: 'KIITECH',
    images: [
      {
        url: 'https://kiitech.edu/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KIITECH Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KIITECH - Excellence in Technical Education',
    description: 'Leading institute for BCA, Diploma, BBA, and PGDM programs',
    images: ['https://kiitech.edu/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#000080',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'KIITECH - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology',
              url: 'https://kiitech.edu',
              logo: 'https://kiitech.edu/logo.png',
              description: 'Leading technical institute offering BCA, Diploma, BBA, and PGDM programs',
              sameAs: [
                'https://www.facebook.com/kiitech',
                'https://www.linkedin.com/company/kiitech',
                'https://www.instagram.com/kiitech',
              ],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
