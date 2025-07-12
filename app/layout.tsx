import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Moviy Travel - Issyk Kul Lake Tours',
    template: '%s | Moviy Travel'
  },
  description: 'Discover the beauty of Issyk Kul Lake with Moviy Travel. Professional tours to Kyrgyzstan\'s most beautiful destinations.',
  keywords: ['Issyk Kul', 'Kyrgyzstan', 'travel', 'tours', 'adventure', 'lake', 'mountains'],
  authors: [{ name: 'Moviy Travel' }],
  creator: 'Moviy Travel',
  publisher: 'Moviy Travel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.moviy-travel.uz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://www.moviy-travel.uz',
    title: 'Moviy Travel - Issyk Kul Lake Tours',
    description: 'Professional tours to Issyk Kul Lake, Kyrgyzstan',
    siteName: 'Moviy Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moviy Travel - Issyk Kul Lake Tours',
    description: 'Professional tours to Issyk Kul Lake, Kyrgyzstan',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}
