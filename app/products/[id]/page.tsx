"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2, ShoppingCart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"
import Script from "next/script"
import Head from "next/head"
import { GlowCard } from "@/components/glow-card"

// Product data (in a real app, this would come from a database)
const productsData = {
  "single-stroller": {
    id: "single-stroller",
    name: "Magical Single Stroller",
    description:
      "Perfect for families with one child, our single strollers offer comfort and convenience. Designed specifically for theme park navigation, these strollers provide a smooth ride and ample storage for all your essentials.",
    price: 25,
    image: "/placeholder.svg?height=500&width=700&text=Single+Stroller",
    features: [
      "Comfortable padded seating",
      "Large canopy for sun protection",
      "Ample storage space",
      "Easy to fold and maneuver",
      "Hot steamwashed and disinfected",
      "Disneyland & Universal approved",
    ],
    type: "single-stroller",
  },
  "double-stroller": {
    id: "double-stroller",
    name: "Enchanted Double Stroller",
    description:
      "Ideal for families with two children, our double strollers provide comfort for both little ones. With side-by-side seating, both children can enjoy the sights and sounds of the theme parks while parents enjoy the ease of pushing just one stroller.",
    price: 35,
    image: "/placeholder.svg?height=500&width=700&text=Double+Stroller",
    features: [
      "Side-by-side seating",
      "Individual canopies",
      "Enhanced storage capacity",
      "Smooth handling",
      "Hot steamwashed and disinfected",
      "Disneyland & Universal approved",
    ],
    type: "double-stroller",
  },
  "mobility-scooter": {
    id: "mobility-scooter",
    name: "Spellbinding Mobility Scooter",
    description:
      "Our mobility scooters ensure everyone can enjoy the magic of theme parks with ease. Designed for adults and those with mobility needs, these scooters provide independence and comfort throughout your entire park visit.",
    price: 45,
    image: "/placeholder.svg?height=500&width=700&text=Mobility+Scooter",
    features: [
      "Long-lasting battery",
      "Comfortable seating",
      "Easy to operate",
      "Adjustable speed settings",
      "Storage basket included",
      "Disneyland & Universal ready",
    ],
    type: "mobility-scooter",
  },
  "rain-cover": {
    id: "rain-cover",
    name: "Magical Rain Cover",
    description: "Keep your little ones dry during unexpected rain showers with our waterproof rain covers.",
    price: 5,
    image: "/placeholder.svg?height=300&width=500&text=Rain+Cover",
    features: [
      "Waterproof material",
      "Easy to attach",
      "Clear visibility",
      "Breathable design",
      "Universal fit",
      "Compact when folded",
    ],
    type: "accessory",
  },
  "cup-holder": {
    id: "cup-holder",
    name: "Enchanted Cup Holder",
    description: "Keep your drinks secure and within reach with our attachable cup holders for strollers and scooters.",
    price: 3,
    image: "/placeholder.svg?height=300&width=500&text=Cup+Holder",
    features: [
      "Secure grip",
      "Universal attachment",
      "Holds various cup sizes",
      "Easy to install",
      "Durable construction",
      "Dishwasher safe",
    ],
    type: "accessory",
  },
  "phone-mount": {
    id: "phone-mount",
    name: "Magical Phone Mount",
    description: "Keep your phone accessible for maps, photos, and more with our secure phone mounts.",
    price: 4,
    image: "/placeholder.svg?height=300&width=500&text=Phone+Mount",
    features: [
      "Secure grip",
      "Adjustable angle",
      "Universal fit for most phones",
      "Easy to install",
      "Durable construction",
      "Shock-absorbing design",
    ],
    type: "accessory",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addItem, setRentalDates, startDate: cartStartDate, endDate: cartEndDate } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [startDate, setStartDate] = useState<Date | undefined>(cartStartDate ? new Date(cartStartDate) : undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(cartEndDate ? new Date(cartEndDate) : undefined)
  const [pageTitle, setPageTitle] = useState("")

  const product = productsData[params.id]

  useEffect(() => {
    if (product) {
      setPageTitle(`${product.name} | Pixie Strollies`)

      // Update the canonical URL and meta tags dynamically
      const linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (linkElement) {
        linkElement.href = `https://pixiestrollies.com/products/${params.id}`
      }
    }
  }, [product, params.id])

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white mb-6 font-poppins">Product Not Found</h1>
            <p className="text-gray-300 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    if (!startDate || !endDate) {
      alert("Please select rental dates")
      return
    }

    // Set the rental dates in the cart context
    setRentalDates(format(startDate, "yyyy-MM-dd"), format(endDate, "yyyy-MM-dd"))

    // Add the item to the cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type as any,
      rentalDays: calculateDays(startDate, endDate),
      startDate: format(startDate, "yyyy-MM-dd"),
      endDate: format(endDate, "yyyy-MM-dd"),
    })

    // Navigate to the cart page
    router.push("/cart")
  }

  const calculateDays = (start: Date, end: Date) => {
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Include both start and end days
    return diffDays
  }

  const isDisneylandMinimumValid = () => {
    if (!startDate || !endDate) return true
    const days = calculateDays(startDate, endDate)
    return days >= 3 || product.type === "accessory"
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={product.description} />
        <meta
          name="keywords"
          content={`${product.name}, rental, Disneyland, Universal Studios, theme park, ${product.type}`}
        />
        <link rel="canonical" href={`https://pixiestrollies.com/products/${params.id}`} />
      </Head>

      <Navbar />
      <main className="min-h-screen">
        {/* Product Detail Section */}
        <section className="relative py-16 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <GlowCard glowColors="rainbow" intensity="high" className="w-full">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </GlowCard>

              {/* Product Info */}
              <div className="relative">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">{product.name}</h1>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-pink-400">${product.price}</span>
                  <span className="text-gray-300 ml-2">/ day</span>
                </div>

                <p className="text-gray-300 mb-8">{product.description}</p>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-white mb-4 font-poppins">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-white mb-4 font-poppins">Select Rental Dates</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Start Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? format(startDate, "PPP") : <span>Select start date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border border-gray-700">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                            className="bg-gray-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">End Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? format(endDate, "PPP") : <span>Select end date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border border-gray-700">
                          <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={setEndDate}
                            initialFocus
                            className="bg-gray-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {startDate && endDate && (
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <p className="text-white">Rental Duration: {calculateDays(startDate, endDate)} days</p>
                      {!isDisneylandMinimumValid() && (
                        <p className="text-red-400 text-sm mt-2">
                          Note: Disneyland area rentals require a minimum 3-day booking.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-white mb-4 font-poppins">Quantity</h2>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                      aria-label="Decrease quantity"
                    >
                      -
                    </Button>
                    <span className="mx-4 text-white">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                      aria-label="Increase quantity"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/reservation?product=${product.id}`}>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg"
                      aria-label={`Book ${product.name}`}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Book This Rental
                    </Button>
                  </Link>
                  <Link href="/products" aria-label="Continue shopping">
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Product Schema Markup */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: `https://pixiestrollies.com${product.image}`,
            description: product.description,
            sku: product.id,
            brand: {
              "@type": "Brand",
              name: "Pixie Strollies",
            },
            offers: {
              "@type": "Offer",
              url: `https://pixiestrollies.com/products/${product.id}`,
              priceCurrency: "USD",
              price: product.price.toFixed(2),
              priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                .toISOString()
                .split("T")[0],
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  )
}

