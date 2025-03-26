"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { CheckCircle2, ArrowLeft, CreditCard, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart, startDate, endDate, rentalDays } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      clearCart()
    }, 2000)
  }

  if (items.length === 0 && !isComplete) {
    router.push("/cart")
    return null
  }

  if (isComplete) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <section className="relative py-16 bg-black">
            {/* Neon glow backgrounds */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Order Complete!</h1>
                <p className="text-gray-300 mb-6">
                  Thank you for your order. We've sent a confirmation email to {formData.email}.
                </p>
                <p className="text-gray-300 mb-8">
                  Your magical rental will be delivered to your hotel on{" "}
                  {startDate && format(new Date(startDate), "MMMM d, yyyy")}.
                </p>
                <Link href="/">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Return to Home
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative py-16 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <CreditCard className="mr-3 h-8 w-8" />
              Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Information */}
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Delivery Information</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address" className="text-gray-300">
                          Hotel Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-gray-300">
                            City
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state" className="text-gray-300">
                            State
                          </Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zip" className="text-gray-300">
                            ZIP Code
                          </Label>
                          <Input
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Payment Information</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardName" className="text-gray-300">
                          Name on Card
                        </Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber" className="text-gray-300">
                          Card Number
                        </Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry" className="text-gray-300">
                            Expiration Date (MM/YY)
                          </Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvc" className="text-gray-300">
                            CVC
                          </Label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href="/cart">
                      <Button type="button" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Cart
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Complete Order
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 relative flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{item.name}</h3>
                          <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                          <p className="text-pink-400 font-medium">
                            ${(item.price * item.quantity * rentalDays).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-4 space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Rental Duration:</span>
                      <span>{rentalDays} days</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Dates:</span>
                      <span>
                        {startDate && endDate
                          ? `${format(new Date(startDate), "MMM d")} - ${format(new Date(endDate), "MMM d, yyyy")}`
                          : "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Delivery:</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between">
                      <span className="text-lg font-bold text-white">Total:</span>
                      <span className="text-lg font-bold text-pink-400">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

