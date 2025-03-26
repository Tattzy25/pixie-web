import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card-new"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Fairy Tools - AI-Powered Theme Park Planning - Pixie Strollies",
  description:
    "Discover our magical AI tools that help you plan the perfect theme park adventure at Disneyland and Universal Studios.",
  openGraph: {
    title: "Fairy Tools - AI-Powered Theme Park Planning - Pixie Strollies",
    description:
      "Discover our magical AI tools that help you plan the perfect theme park adventure at Disneyland and Universal Studios.",
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

export default function AIToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Fairy-Powered AI Tools</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Our magical AI tools help you plan the perfect theme park adventure at Disneyland and Universal Studios.
            </p>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Rental Matcher */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                    Magical Rental Matcher
                  </CardTitle>
                  <CardDescription>Find the perfect rental for your family</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Rental+Matcher"
                      alt="Magical Rental Matcher"
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 mb-6">
                    Answer a few questions about your family and needs, and our fairy-powered AI will recommend the
                    perfect rental equipment for your theme park adventure. We'll consider factors like the number of
                    children, their ages, and any mobility needs to ensure you get the ideal stroller or scooter.
                  </p>
                  <h3 className="font-bold text-white mb-2">How It Works:</h3>
                  <ol className="list-decimal list-inside mb-6 text-gray-400 space-y-1">
                    <li>Tell us who's going on your magical adventure</li>
                    <li>Share any mobility needs or considerations</li>
                    <li>Let us know how many children you have and their ages</li>
                    <li>Receive a personalized rental recommendation with detailed reasoning</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Link href="/ai-tools/rental-matcher" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                      Find Your Perfect Match <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Itinerary Planner */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-pink-500" />
                    Enchanted Itinerary Planner
                  </CardTitle>
                  <CardDescription>Create your perfect theme park day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Itinerary+Planner"
                      alt="Enchanted Itinerary Planner"
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 mb-6">
                    Our magical AI creates personalized theme park itineraries based on your preferences, group
                    composition, and mobility needs. Maximize your time in the parks with a custom schedule that
                    includes attractions, dining, and rest breaks tailored to your specific requirements.
                  </p>
                  <h3 className="font-bold text-white mb-2">How It Works:</h3>
                  <ol className="list-decimal list-inside mb-6 text-gray-400 space-y-1">
                    <li>Select your park (Disneyland or Universal Studios)</li>
                    <li>Enter your visit date</li>
                    <li>Tell us about your group (ages, interests, etc.)</li>
                    <li>Share any mobility considerations</li>
                    <li>Indicate your priorities (rides, shows, characters, etc.)</li>
                    <li>Receive a detailed day-by-day itinerary</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Link href="/ai-tools/itinerary-planner" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                      Plan Your Magical Day <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Comfort Optimizer */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
                    Mystical Park Comfort Optimizer
                  </CardTitle>
                  <CardDescription>Stay comfortable throughout your visit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Comfort+Optimizer"
                      alt="Mystical Park Comfort Optimizer"
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 mb-6">
                    Get personalized recommendations for rest stops, cooling stations, and shaded routes based on
                    weather and your equipment. Our AI will help you stay comfortable throughout your park visit,
                    especially important for families with young children or those using mobility scooters.
                  </p>
                  <h3 className="font-bold text-white mb-2">How It Works:</h3>
                  <ol className="list-decimal list-inside mb-6 text-gray-400 space-y-1">
                    <li>Select your park (Disneyland or Universal Studios)</li>
                    <li>Enter the expected weather conditions</li>
                    <li>Indicate which equipment you'll be using</li>
                    <li>Share any special needs or considerations</li>
                    <li>Receive customized comfort recommendations</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Link href="/ai-tools/comfort-optimizer" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Maximize Your Comfort <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Pixie Sparkle Chat */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                    Pixie Sparkle Chat
                  </CardTitle>
                  <CardDescription>Your magical fairy assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Pixie+Sparkle+Chat"
                      alt="Pixie Sparkle Chat"
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-400 mb-6">
                    Chat with our magical fairy assistant who can answer all your questions about rentals, theme parks,
                    and planning your visit. Pixie Sparkle is available 24/7 to provide instant answers and helpful
                    advice for making the most of your magical adventure.
                  </p>
                  <h3 className="font-bold text-white mb-2">How It Works:</h3>
                  <ol className="list-decimal list-inside mb-6 text-gray-400 space-y-1">
                    <li>Start a conversation with Pixie Sparkle</li>
                    <li>Ask any questions about our rentals or the parks</li>
                    <li>Get instant, helpful responses</li>
                    <li>Connect with a human representative if needed</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Link href="/ai-chatbot" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                      Chat with Pixie Sparkle <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">How Our Fairy Magic Works</h2>
            <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              Our AI tools are powered by advanced technology and a sprinkle of fairy dust to create magical experiences
              tailored just for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-500">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Share Your Needs</h3>
                  <p className="text-gray-400">
                    Tell us about your family, preferences, and any special requirements for your theme park visit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-pink-500">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-pink-500 mb-2">Fairy AI Processing</h3>
                  <p className="text-gray-400">
                    Our magical AI analyzes your information and creates personalized recommendations just for you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-500">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-500 mb-2">Magical Results</h3>
                  <p className="text-gray-400">
                    Receive detailed, personalized recommendations to make your theme park adventure truly magical.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Magical Experiences with Our Fairy Tools</h2>
            <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              See how our AI tools have helped families create unforgettable theme park memories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "The Itinerary Planner was a game-changer for our Disneyland trip! With two young kids and grandma
                    in a scooter, we weren't sure how to navigate the park efficiently. The AI created the perfect
                    schedule that kept everyone happy and minimized walking. Absolutely magical!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <span className="text-purple-500 font-medium">JM</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Jennifer M.</p>
                      <p className="text-sm text-gray-500">Family of 5, Disneyland</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "The Rental Matcher recommended the perfect double stroller for my twins. It considered their ages,
                    the fact that they nap at different times, and our plans to visit both parks. The stroller was
                    exactly what we needed and made our Universal Studios trip so much easier!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
                      <span className="text-pink-500 font-medium">RL</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Rachel L.</p>
                      <p className="text-sm text-gray-500">Mom of twins, Universal Studios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "The Comfort Optimizer was a lifesaver during our August visit! It suggested the perfect rest spots
                    and shaded routes, which was essential with the heat. My dad's mobility scooter battery lasted all
                    day thanks to the efficient routing. Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <span className="text-blue-500 font-medium">DT</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">David T.</p>
                      <p className="text-sm text-gray-500">Summer visit, Disneyland</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-400 mb-4 italic">
                    "Pixie Sparkle Chat answered all my questions instantly! I was planning a last-minute trip and
                    needed quick answers about rental availability and delivery options. The chatbot was incredibly
                    helpful and even suggested some great dining options for our family."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <span className="text-purple-500 font-medium">AJ</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Amanda J.</p>
                      <p className="text-sm text-gray-500">Last-minute planner, Universal Studios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Magic?</h2>
            <p className="text-lg mb-8">
              Try our fairy-powered AI tools today and make your theme park adventure truly unforgettable!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                  Book Your Rental
                </Button>
              </Link>
              <Link href="/ai-chatbot">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Chat with Pixie
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

