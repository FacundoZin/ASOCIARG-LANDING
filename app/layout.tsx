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

// Schema.org JSON-LD para SEO estructurado
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://asociarg.cloud/#organization",
      name: "ASOCIARG",
      url: "https://asociarg.cloud",
      logo: {
        "@type": "ImageObject",
        url: "https://asociarg.cloud/logo-asociarg.png",
        width: 300,
        height: 100,
      },
      description:
        "Software de gestión integral para asociaciones civiles, clubes y organizaciones sin fines de lucro en Argentina.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AR",
        addressLocality: "Argentina",
      },
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://asociarg.cloud/#software",
      name: "ASOCIARG",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Sistema de gestión integral para asociaciones civiles: administración de socios, cobranzas online, reservas de salones, notificaciones por WhatsApp y más.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "ARS",
      },
      provider: {
        "@id": "https://asociarg.cloud/#organization",
      },
      featureList: [
        "Gestión de socios",
        "Pagos online con Mercado Pago",
        "Reservas de salones",
        "Notificaciones por WhatsApp",
        "Módulo para cobradores",
        "Analíticas y balances",
        "Organización de viajes",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://asociarg.cloud/#website",
      url: "https://asociarg.cloud",
      name: "ASOCIARG",
      description: "Software de gestión para asociaciones civiles",
      publisher: {
        "@id": "https://asociarg.cloud/#organization",
      },
      inLanguage: "es-AR",
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "ASOCIARG - Sistema de Gestión Integral para Asociaciones Civiles | Argentina",
    template: "%s | ASOCIARG",
  },
  description:
    "Software de gestión integral para asociaciones civiles, clubes y ONGs en Argentina. Administre socios, cobranzas con Mercado Pago, reservas de salones y notificaciones por WhatsApp. Solicite su cotización.",
  keywords: [
    "software para asociaciones civiles",
    "sistema gestión socios",
    "software para clubes argentina",
    "administración de socios",
    "cobranzas asociaciones civiles",
    "pagos online para clubes",
    "gestión clubes deportivos",
    "software ONG argentina",
    "cobrar cuotas mercado pago",
    "sistema para clubes de jubilados",
    "reservas de salones",
    "notificaciones whatsapp socios",
    "padrón de socios digital",
    "software sociedades de fomento",
  ],
  authors: [{ name: "ASOCIARG" }],
  creator: "ASOCIARG",
  publisher: "ASOCIARG",
  metadataBase: new URL("https://asociarg.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://asociarg.cloud",
    siteName: "ASOCIARG",
    title: "ASOCIARG - Sistema de Gestión para Asociaciones Civiles",
    description:
      "Software de gestión integral para asociaciones civiles, clubes y organizaciones sin fines de lucro en Argentina. Pagos con Mercado Pago, notificaciones WhatsApp y más.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ASOCIARG - Sistema de Gestión Integral para Asociaciones Civiles en Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOCIARG - Sistema de Gestión para Asociaciones Civiles",
    description:
      "Software de gestión integral para asociaciones civiles, clubes y ONGs. Pagos online, notificaciones WhatsApp y más.",
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
      { url: "/iconoasociargsinfondo.png", type: "image/png" },
    ],
    apple: "/iconoasociargsinfondo.png",
  },
  generator: "ASOCIARG",
  category: "Software",
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
import FloatingPDFAssistant from "@/components/floating-pdf-assistant"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <WhatsAppButton />
        <FloatingPDFAssistant />
      </body>
    </html>
  )
}
