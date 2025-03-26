import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card-new"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sparkles, ArrowRight } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Pixie Strollies - Premium Stroller & Scooter Rentals for Disneyland & Universal Studios",
  description:
    "Premium stroller and mobility scooter rentals for Disneyland and Universal Studios. Delivered to your hotel with fairy-tale service and magical convenience.",
  alternates: {
    canonical: "https://pixiestrollies.com",
  },
  openGraph: {
    title: "Pixie Strollies - Magical Stroller & Scooter Rentals",
    description: "Premium stroller and mobility scooter rentals for Disneyland and Universal Studios.",
    url: "https://pixiestrollies.com",
    siteName: "Pixie Strollies",
    images: [
      {
        url: "https://pixiestrollies.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixie Strollies - Magical Stroller & Scooter Rentals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background with neon glow effect */}
          <div className="absolute inset-0 bg-black z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/30 blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-600/30 blur-[100px]"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-blue-600/20 blur-[80px]"></div>
          </div>

          <div className="container mx-auto relative z-10 px-4 py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins">
                Glide Through Your Magical Experience
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Premium stroller and mobility scooter rentals for{" "}
                <span className="font-bold text-pink-400">Disneyland</span> and{" "}
                <span className="font-bold text-pink-400">Universal Studios</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/reservation" aria-label="Book your rental">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Book Your Rental
                  </Button>
                </Link>
                <Link href="/ai-chatbot" aria-label="Chat with our AI assistant">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg backdrop-blur-sm"
                  >
                    Chat with Pixie
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards Section */}
        <section className="relative py-20 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16 font-poppins">Our Magical Fleet</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Single Stroller Card */}
              <Card>
                <div className="h-60 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Single+Stroller"
                    alt="Single Stroller for comfortable theme park navigation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Single Stroller</h3>
                  <p className="text-gray-400 mb-4">
                    Perfect for families with one child. Comfortable, easy to maneuver, and includes storage space.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-400">$25/day</span>
                    <Link href="/products/single-stroller" aria-label="View single stroller details">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Double Stroller Card */}
              <Card>
                <div className="h-60 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Double+Stroller"
                    alt="Double Stroller for families with two children"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Double Stroller</h3>
                  <p className="text-gray-400 mb-4">
                    Perfect for families with two children. Side-by-side seating with individual canopies.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-400">$34/day</span>
                    <Link href="/products/double-stroller" aria-label="View double stroller details">
                      <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Mobility Scooter Card */}
              <Card>
                <div className="h-60 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Mobility+Scooter"
                    alt="Mobility Scooter for adults and those with mobility needs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Mobility Scooter</h3>
                  <p className="text-gray-400 mb-4">
                    For adults with mobility needs. Long-lasting battery and comfortable seating.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-400">$59/day</span>
                    <Link href="/products/mobility-scooter" aria-label="View mobility scooter details">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link href="/products" aria-label="Browse all products">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Delivery Info Section */}
        <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Magical Hotel Delivery</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We deliver your rental equipment directly to your hotel the night before your adventure begins. Wake
                  up ready to explore with no hassle!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Universal Studios</h3>
                      <p className="text-gray-400">Delivered the night before your adventure</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Disneyland Area</h3>
                      <p className="text-gray-400">Minimum 3-day magical experience</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card>
                <div className="h-80 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Hotel+Delivery"
                    alt="Hotel Delivery"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Hassle-Free Experience</h3>
                  <p className="text-gray-400 mb-4">
                    No need to be present for delivery - we coordinate with hotel staff to ensure your equipment is
                    waiting for you.
                  </p>
                  <Link href="/reservation">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Book Your Magical Adventure
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="relative py-20 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Fairy-Powered AI Tools</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rental Matcher Card */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-purple-400" />
                    Magical Rental Matcher
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Our AI helps you find the perfect rental based on your family's needs. Just answer a few questions
                    and get personalized recommendations.
                  </p>
                  <div className="mt-auto">
                    <Link href="/ai-tools/rental-matcher">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                        Find Your Perfect Match <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Pixie Sparkle Chat Card */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-pink-400" />
                    Pixie Sparkle Chat
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Chat with our magical fairy assistant who can answer all your questions about rentals, theme parks,
                    and planning your visit.
                  </p>
                  <div className="mt-auto">
                    <Link href="/ai-chatbot">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                        Chat with Pixie <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          {/* Neon glow backgrounds */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Magical Adventure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your Pixie Strollies rental now and create unforgettable memories at Universal Studios and
                Disneyland.
              </p>
              <Link href="/reservation">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Book Your Magical Adventure
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating Fairy Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/ai-chatbot" aria-label="Chat with Pixie">
          <button
            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group relative"
            aria-label="Open chat"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-10 h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/500x500%20pixie-z07TJGgsj6CC8CkEECsCExxJjj2Usv.png"
                alt="Pixie Chat"
                fill
                className="object-contain"
                sizes="2.5rem"
              />
            </div>
          </button>
        </Link>
      </div>

      {/* Product Schema Markup */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Product",
                  name: "Single Stroller",
                  description:
                    "Perfect for families with one child. Comfortable, easy to maneuver, and includes storage space.",
                  image: "https://pixiestrollies.com/images/single-stroller.jpg",
                  url: "https://pixiestrollies.com/products/single-stroller",
                  offers: {
                    "@type": "Offer",
                    price: "25.00",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Product",
                  name: "Double Stroller",
                  description: "Perfect for families with two children. Side-by-side seating with individual canopies.",
                  image: "https://pixiestrollies.com/images/double-stroller.jpg",
                  url: "https://pixiestrollies.com/products/double-stroller",
                  offers: {
                    "@type": "Offer",
                    price: "34.00",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Product",
                  name: "Mobility Scooter",
                  description: "For adults with mobility needs. Long-lasting battery and comfortable seating.",
                  image: "https://pixiestrollies.com/images/mobility-scooter.jpg",
                  url: "https://pixiestrollies.com/products/mobility-scooter",
                  offers: {
                    "@type": "Offer",
                    price: "59.00",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

