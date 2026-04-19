import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CraftingWebs — Agencia digital para profesionales',
  description: 'Desarrollo web, SEO y soluciones digitales a medida para profesionales autónomos. Estepona, España.',
  keywords: ['agencia digital', 'desarrollo web', 'SEO', 'Estepona', 'profesionales'],
  authors: [{ name: 'CraftingWebs' }],
  openGraph: {
    title: 'CraftingWebs — Tu equipo digital',
    description: 'Webs profesionales hechas a medida para autónomos.',
    url: 'https://craftingwebs.es',
    siteName: 'CraftingWebs',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1W61DTPE55"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1W61DTPE55');
          `}
        </Script>

      </body>
    </html>
  )
}