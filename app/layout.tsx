import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Analytics from "@/components/analytics"
import { CartProvider } from "@/context/cart-context"
import Script from "next/script"

// Font optimization
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Pixie Strollies - Premium Stroller & Scooter Rentals for Disneyland & Universal Studios",
    template: "%s | Pixie Strollies",
  },
  description:
    "Premium stroller and mobility scooter rentals for Disneyland and Universal Studios. Delivered to your hotel with fairy-tale service and magical convenience.",
  keywords:
    "stroller rental, mobility scooter, Disneyland stroller, Universal Studios stroller, theme park accessibility, family travel, Disney stroller rental, Universal scooter rental, hotel delivery stroller, premium stroller rental",
  authors: [{ name: "Pixie Strollies" }],
  creator: "Pixie Strollies",
  publisher: "Pixie Strollies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pixiestrollies.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pixie Strollies - Magical Stroller & Scooter Rentals",
    description:
      "Premium stroller and mobility scooter rentals for Disneyland and Universal Studios. Delivered to your hotel with fairy-tale service.",
    url: "https://pixiestrollies.com",
    siteName: "Pixie Strollies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixie Strollies - Magical Stroller & Scooter Rentals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixie Strollies - Magical Stroller & Scooter Rentals",
    description: "Premium stroller and mobility scooter rentals for Disneyland and Universal Studios.",
    images: ["/og-image.jpg"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "Travel",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CartProvider>
            {children}
            <Analytics />
          </CartProvider>
        </ThemeProvider>

        {/* Schema Markup */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pixie Strollies",
              url: "https://pixiestrollies.com",
              logo: "https://pixiestrollies.com/logo.png",
              description: "Premium stroller and mobility scooter rentals for Disneyland and Universal Studios.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Anaheim",
                addressRegion: "CA",
                postalCode: "92802",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
              },
              sameAs: ["https://www.facebook.com/pixiestrollies", "https://www.instagram.com/pixiestrollies"],
            }),
          }}
        />
      </body>
    </html>
  )
}

