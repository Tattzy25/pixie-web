import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sparkles } from "lucide-react"
import Script from "next/script"
import { GlowCard } from "@/components/glow-card"

export const metadata: Metadata = {
  title: "Enchanted Rentals - Strollers & Scooters | Pixie Strollies",
  description:
    "Explore our magical selection of strollers and mobility scooters for your Disneyland and Universal Studios adventure. Premium quality with hotel delivery.",
  keywords:
    "stroller rental, double stroller, single stroller, mobility scooter, Disneyland rental, Universal Studios rental, theme park equipment",
  alternates: {
    canonical: "https://pixiestrollies.com/products",
  },
  openGraph: {
    title: "Enchanted Rentals - Strollers & Scooters | Pixie Strollies",
    description:
      "Explore our magical selection of strollers and mobility scooters for your Disneyland and Universal Studios adventure.",
    url: "https://pixiestrollies.com/products",
    images: [
      {
        url: "https://pixiestrollies.com/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Pixie Strollies - Magical Stroller & Scooter Rentals",
      },
    ],
  },
}

const products = [
  {
    id: "single-stroller",
    name: "Magical Single Stroller",
    description: "Perfect for families with one child, our single strollers offer comfort and convenience.",
    price: 25,
    image: "/placeholder.svg?height=300&width=500&text=Single+Stroller",
    features: [
      "Comfortable padded seating",
      "Large canopy for sun protection",
      "Ample storage space",
      "Easy to fold and maneuver",
      "Hot steamwashed and disinfected",
      "Disneyland & Universal approved",
    ],
  },
  {
    id: "double-stroller",
    name: "Enchanted Double Stroller",
    description: "Ideal for families with two children, our double strollers provide comfort for both little ones.",
    price: 35,
    image: "/placeholder.svg?height=300&width=500&text=Double+Stroller",
    features: [
      "Side-by-side seating",
      "Individual canopies",
      "Enhanced storage capacity",
      "Smooth handling",
      "Hot steamwashed and disinfected",
      "Disneyland & Universal approved",
    ],
  },
  {
    id: "mobility-scooter",
    name: "Spellbinding Mobility Scooter",
    description: "Our mobility scooters ensure everyone can enjoy the magic of theme parks with ease.",
    price: 45,
    image: "/placeholder.svg?height=300&width=500&text=Mobility+Scooter",
    features: [
      "Long-lasting battery",
      "Comfortable seating",
      "Easy to operate",
      "Adjustable speed settings",
      "Storage basket included",
      "Disneyland & Universal ready",
    ],
  },
]

const accessories = [
  {
    id: "rain-cover",
    name: "Magical Rain Cover",
    description: "Keep your little ones dry during unexpected rain showers.",
    price: 5,
    image: "/placeholder.svg?height=200&width=400&text=Rain+Cover",
    type: "accessory",
  },
  {
    id: "cup-holder",
    name: "Enchanted Cup Holder",
    description: "Keep your drinks secure and within reach.",
    price: 3,
    image: "/placeholder.svg?height=200&width=400&text=Cup+Holder",
    type: "accessory",
  },
  {
    id: "phone-mount",
    name: "Magical Phone Mount",
    description: "Keep your phone accessible for maps, photos, and more.",
    price: 4,
    image: "/placeholder.svg?height=200&width=400&text=Phone+Mount",
    type: "accessory",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          {/* Background with neon glow effect */}
          <div className="absolute inset-0 bg-black z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/30 blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-600/30 blur-[100px]"></div>
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 font-poppins">
              Enchanted Rentals
            </h1>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-8">
              Choose the perfect magical companion for your theme park adventure
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="relative py-16 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-16 font-poppins">Our Magical Fleet</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <GlowCard key={product.id} glowColors="purple-pink" intensity="medium">
                  <div className="h-60 relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 font-poppins">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-2xl font-bold text-pink-400">${product.price}/day</span>
                      <Link href={`/products/${product.id}`} aria-label={`View details for ${product.name}`}>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="relative py-16 bg-gradient-to-b from-black to-gray-900">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-16 font-poppins">Magical Accessories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessories.map((accessory) => (
                <GlowCard key={accessory.id} glowColors="cyan-blue" intensity="medium">
                  <div className="h-48 relative">
                    <Image
                      src={accessory.image || "/placeholder.svg"}
                      alt={accessory.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 font-poppins">{accessory.name}</h3>
                    <p className="text-gray-300 mb-4">{accessory.description}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xl font-bold text-pink-400">${accessory.price}/day</span>
                      <Link href={`/products/${accessory.id}`} aria-label={`View details for ${accessory.name}`}>
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6 font-poppins">Ready to Book Your Magical Rental?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Secure your stroller or mobility scooter today and add a sprinkle of magic to your theme park adventure!
              </p>
              <Link href="/reservation" aria-label="Proceed to booking">
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

      {/* Product Schema Markup */}
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              ...products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: product.name,
                  description: product.description,
                  image: `https://pixiestrollies.com${product.image}`,
                  url: `https://pixiestrollies.com/products/${product.id}`,
                  offers: {
                    "@type": "Offer",
                    price: product.price.toFixed(2),
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                },
              })),
              ...accessories.map((accessory, index) => ({
                "@type": "ListItem",
                position: products.length + index + 1,
                item: {
                  "@type": "Product",
                  name: accessory.name,
                  description: accessory.description,
                  image: `https://pixiestrollies.com${accessory.image}`,
                  url: `https://pixiestrollies.com/products/${accessory.id}`,
                  offers: {
                    "@type": "Offer",
                    price: accessory.price.toFixed(2),
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                },
              })),
            ],
          }),
        }}
      />
    </>
  )
}

