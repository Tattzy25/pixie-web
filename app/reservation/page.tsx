import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ReservationForm from "@/components/reservation-form"
import { Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Your Magical Rental - Pixie Strollies",
  description:
    "Reserve your stroller or mobility scooter for Disneyland and Universal Studios. Easy online booking with hotel delivery.",
}

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Book Your Magical Adventure</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Complete your reservation below and get ready for an enchanted experience at Disneyland or Universal
              Studios!
            </p>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">Book Your Magical Adventure</h1>
            <ReservationForm />
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">Why Choose Pixie Strollies?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Magical Delivery</h3>
                <p className="text-gray-600">
                  We deliver directly to your hotel the night before your adventure begins, so you're ready to go first
                  thing in the morning!
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  All our equipment is meticulously maintained, thoroughly cleaned, and sanitized before each rental.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-600 mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">
                  Our pricing is transparent with no surprise charges. Delivery and pickup are always included!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">Frequently Asked Questions</h2>

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
      </main>
      <Footer />
    </>
  )
}

