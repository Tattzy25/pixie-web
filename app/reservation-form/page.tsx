import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Reservation Form - Pixie Strollies",
  description: "Book your stroller or mobility scooter for Disneyland and Universal Studios.",
}

export default function ReservationFormPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">Complete Your Magical Booking</h1>

          <div className="w-full max-w-4xl mx-auto">
            <iframe
              src="/reservation-form.html"
              className="w-full h-[800px] border-0 rounded-xl shadow-lg"
              title="Reservation Form"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />

      <Script src="/config.js" strategy="beforeInteractive" />
    </>
  )
}

