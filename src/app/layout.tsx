import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/ui/header"
import "./tailwind.css"
import "./globals.css"

// Optimizar la carga de fuente
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    template: '%s | Product Makers',
    default: 'Product Makers - Una plataforma para creadores de productos digitales',
  },
  description: "Plataforma para creadores, innovadores y constructores de productos digitales. Comparte, aprende y crece con las mejores herramientas y recursos.",
  keywords: ['product makers', 'digital products', 'makers', 'startups', 'innovation'],
  authors: [{ name: 'Product Makers Team' }],
  creator: 'Product Makers',
  publisher: 'Product Makers',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://productmakers.com',
    siteName: 'Product Makers',
    title: 'Product Makers - Una plataforma para creadores de productos digitales',
    description: 'Plataforma para creadores, innovadores y constructores de productos digitales.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Makers',
    description: 'Plataforma para creadores de productos digitales',
    images: ['/images/twitter-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <footer className="bg-gray-100 py-6 w-full">
          <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Product Makers. Todos los derechos reservados.
          </div>
        </footer>
        <div id="modal-root"></div>
      </body>
    </html>
  )
} 