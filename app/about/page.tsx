import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle2, Heart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story - Pixie Strollies",
  description:
    "Learn about the magical journey behind Pixie Strollies and our mission to make theme park adventures accessible for everyone.",
  openGraph: {
    title: "Our Story - Pixie Strollies",
    description:
      "Learn about the magical journey behind Pixie Strollies and our mission to make theme park adventures accessible for everyone.",
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Magical Story</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover the enchanted journey behind Pixie Strollies and our mission to make theme park adventures
              accessible for everyone.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Our+Story"
                  alt="The founders of Pixie Strollies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-purple-800 mb-6">The Magic Begins</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Pixie Strollies was born from a personal experience. Our founders, a family of theme park enthusiasts,
                  discovered firsthand the challenges of navigating Disneyland and Universal Studios with young children
                  and family members with mobility needs.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  After struggling to find convenient, reliable rental options that truly enhanced the theme park
                  experience, they decided to create the service they wished existed - one that delivered equipment
                  directly to hotels, offered premium quality strollers and scooters, and provided exceptional customer
                  service with a touch of magic.
                </p>
                <p className="text-lg text-gray-600">
                  Since our founding in 2018, we've helped thousands of families experience the wonder and joy of theme
                  parks without the stress and exhaustion that can come with navigating these vast attractions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-4 bg-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Magical Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Pixie Strollies, we're dedicated to making theme park adventures accessible, comfortable, and magical
                for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We believe everyone deserves to experience the magic of theme parks, regardless of age or mobility.
                  Our equipment and services are designed to make that possible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We provide only the highest quality strollers and scooters, meticulously maintained and sanitized to
                  ensure a safe, comfortable experience for all our customers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-600 mb-2">Magic</h3>
                <p className="text-gray-600">
                  We add a touch of enchantment to every interaction, from our fairy-themed branding to our AI-powered
                  tools that help plan the perfect theme park day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Meet Our Magical Team</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              The enchanted individuals who work tirelessly to make your theme park experience truly magical.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah Johnson", title: "Founder & CEO", image: "team-1" },
                { name: "Michael Chen", title: "Operations Director", image: "team-2" },
                { name: "Jessica Rodriguez", title: "Customer Experience", image: "team-3" },
                { name: "David Kim", title: "Technology Wizard", image: "team-4" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Magical Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Customer Enchantment</h3>
                <p className="mb-6">
                  We go above and beyond to create magical experiences for our customers, from seamless delivery to
                  personalized recommendations and responsive support.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personalized service</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Magical touches in every interaction</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Quality & Safety</h3>
                <p className="mb-6">
                  We maintain the highest standards for our equipment, ensuring everything is clean, well-maintained,
                  and safe for your family's use.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rigorous cleaning protocols</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regular maintenance checks</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium quality equipment</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="mb-6">
                  We continuously seek new ways to enhance the theme park experience, from developing AI tools to
                  improving our delivery and pickup processes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>AI-powered planning tools</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Streamlined booking process</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Continuous improvement based on feedback</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                <p className="mb-6">
                  We believe theme parks should be enjoyable for everyone, and we're committed to making that possible
                  through our services and equipment options.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Equipment for all ages and needs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Inclusive planning tools</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Accessibility-focused recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              The real magic happens when we see the joy our services bring to families visiting the theme parks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "The team at Pixie Strollies truly made our Disney vacation magical. The stroller was waiting at our
                    hotel when we arrived, and it was spotlessly clean. Our toddler was comfortable all day, and we
                    appreciated the extra storage. The pickup was just as seamless. We'll definitely use them again!"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Involvement Section */}
        <section className="py-16 px-4 bg-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-purple-800 mb-6">Spreading Magic in Our Community</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Pixie Strollies, we believe in giving back to the community that has supported us. We're proud to
                  partner with organizations that help make theme park experiences accessible to children and families
                  facing challenges.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through our "Sprinkle the Magic" program, we donate equipment and services to families in need,
                  ensuring that everyone has the opportunity to experience the wonder and joy of theme parks.
                </p>
                <p className="text-lg text-gray-600">
                  We also participate in local events and initiatives focused on accessibility and inclusion, sharing
                  our expertise and resources to create more magical experiences for all.
                </p>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Community+Involvement"
                  alt="Pixie Strollies community involvement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Magical Journey</h2>
            <p className="text-lg mb-8">Experience the Pixie Strollies difference on your next theme park adventure!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                Book Your Rental
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

