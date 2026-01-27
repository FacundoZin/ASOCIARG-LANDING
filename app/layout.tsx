import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "ASOCIARG - Gestion Integral para Asociaciones Civiles",
    template: "%s | ASOCIARG",
  },
  description:
    "Software de gestion integral para asociaciones civiles, clubes y organizaciones sin fines de lucro. Administre socios, cobranzas, reservas y mas con ASOCIARG.",
  keywords: [
    "gestion asociaciones civiles",
    "software clubes",
    "administracion socios",
    "cobranzas asociaciones",
    "sistema gestion clubes",
    "pagos online socios",
    "software ONG",
    "gestion instituciones",
  ],
  authors: [{ name: "ASOCIARG" }],
  creator: "ASOCIARG",
  publisher: "ASOCIARG",
  metadataBase: new URL("https://asociarg.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://asociarg.com",
    siteName: "ASOCIARG",
    title: "ASOCIARG - Gestion Integral para Asociaciones Civiles",
    description:
      "Software de gestion integral para asociaciones civiles, clubes y organizaciones sin fines de lucro.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ASOCIARG - Gestion Integral para Asociaciones Civiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOCIARG - Gestion Integral para Asociaciones Civiles",
    description:
      "Software de gestion integral para asociaciones civiles, clubes y organizaciones sin fines de lucro.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/iconoasociargsinfondo.png", sizes: "any" },
      { url: "/iconoasociargsinfondo.png", type: "image/svg+xml" },
    ],
    apple: "/iconoasociargsinfondo.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

import WhatsAppButton from "@/components/whatsapp-button"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}
