import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle2, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Enchanted Rentals - Pixie Strollies",
  description:
    "Explore our magical selection of strollers and mobility scooters for your Disneyland and Universal Studios adventure.",
  openGraph: {
    title: "Enchanted Rentals - Pixie Strollies",
    description:
      "Explore our magical selection of strollers and mobility scooters for your Disneyland and Universal Studios adventure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixie Strollies - Magical Stroller & Scooter Rentals",
      },
    ],
  },
}

export default function RentalsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Enchanted Rentals</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Choose the perfect magical companion for your theme park adventure.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-12 text-center">Our Magical Fleet</h2>

            {/* Single Stroller */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Single+Stroller"
                  alt="Single stroller for comfortable theme park navigation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Magical Single Stroller</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Perfect for families with one child, our single strollers offer comfort and convenience. Designed
                  specifically for theme park navigation, these strollers provide a smooth ride and ample storage for
                  all your essentials.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comfortable padded seating</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Large canopy for sun protection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ample storage space</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Easy to fold and maneuver</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hot steamwashed and disinfected</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Disneyland & Universal approved</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-800 mr-2">$25</span>
                    <span className="text-gray-600">/ day</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    Book Single Stroller
                  </Button>
                </div>
              </div>
            </div>

            {/* Double Stroller */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2 relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Double+Stroller"
                  alt="Double stroller for families with two children"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Enchanted Double Stroller</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Ideal for families with two children, our double strollers provide comfort for both little ones. With
                  side-by-side seating, both children can enjoy the sights and sounds of the theme parks while parents
                  enjoy the ease of pushing just one stroller.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Side-by-side seating</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Individual canopies</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Enhanced storage capacity</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Smooth handling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hot steamwashed and disinfected</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Disneyland & Universal approved</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-800 mr-2">$35</span>
                    <span className="text-gray-600">/ day</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    Book Double Stroller
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobility Scooter */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Mobility+Scooter"
                  alt="Mobility scooter for adults and those with mobility needs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Spellbinding Mobility Scooter</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our mobility scooters ensure everyone can enjoy the magic of theme parks with ease. Designed for
                  adults and those with mobility needs, these scooters provide independence and comfort throughout your
                  entire park visit.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Long-lasting battery</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comfortable seating</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Easy to operate</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Adjustable speed settings</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Storage basket included</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Disneyland & Universal ready</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-800 mr-2">$45</span>
                    <span className="text-gray-600">/ day</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    Book Mobility Scooter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-16 px-4 bg-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Magical Accessories</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Enhance your rental experience with these magical accessories designed to make your theme park visit even
              more comfortable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Rain+Cover"
                    alt="Rain cover for strollers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Rain Cover</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your little ones dry during unexpected rain showers with our waterproof rain covers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">$5/day</span>
                    <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      Add to Rental
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Cup+Holder"
                    alt="Cup holder attachment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Cup Holder</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your drinks secure and within reach with our attachable cup holders for strollers and scooters.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">$3/day</span>
                    <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      Add to Rental
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Phone+Mount"
                    alt="Phone mount for scooters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Phone Mount</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your phone accessible for maps, photos, and more with our secure phone mounts.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">$4/day</span>
                    <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      Add to Rental
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
              Magical Experiences from Our Customers
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Don't just take our word for it - hear what our customers have to say about their Pixie Strollies
              experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-purple-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "The magical delivery service was perfect! Our stroller was waiting at our hotel when we arrived,
                      making our Disney trip so much easier with our little ones."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-medium">{["JD", "SM", "AK"][i - 1]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-purple-800">{["Jane D.", "Sarah M.", "Alex K."][i - 1]}</p>
                        <p className="text-sm text-gray-500">
                          {["Disneyland Trip", "Universal Studios Visit", "Family Vacation"][i - 1]}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-purple-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-purple-800 mb-2">How does delivery work?</h3>
                <p className="text-gray-600">
                  We deliver your rental equipment directly to your hotel the night before your reservation start date.
                  There's no need to be present for delivery - we'll coordinate with the hotel staff to ensure your
                  equipment is waiting for you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-purple-800 mb-2">What if I need to cancel my reservation?</h3>
                <p className="text-gray-600">
                  We offer full refunds for cancellations made at least 48 hours before your rental start date. For
                  cancellations within 48 hours, we offer a 50% refund or the option to reschedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  Are your strollers and scooters allowed in the parks?
                </h3>
                <p className="text-gray-600">
                  Yes! All of our equipment meets Disneyland and Universal Studios guidelines and is approved for use
                  within the parks. Our strollers comply with the size restrictions implemented by Disney.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-purple-800 mb-2">How do I return the equipment?</h3>
                <p className="text-gray-600">
                  Simply leave the equipment with your hotel's bell services or front desk on your departure day. We'll
                  pick it up - no need to wait for us or be present during pickup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Book Your Magical Rental?</h2>
            <p className="text-lg mb-8">
              Secure your stroller or mobility scooter today and add a sprinkle of magic to your theme park adventure!
            </p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              Book Your Rental Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

