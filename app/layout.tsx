import type { Metadata } from 'next'
import { Playfair_Display, Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MinerMix — Inteligencia Nutricional · San Juan',
  description:
    'Snacks energéticos sanjuaninos formulados para trabajadores mineros de alta montaña. 100% ingredientes de San Juan, Argentina.',
  icons: {
    icon: '/faviconminermix.svg',
    shortcut: '/faviconminermix.svg',
    apple: '/faviconminermix.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{
            opacity: 0.025,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
