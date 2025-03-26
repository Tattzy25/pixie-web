"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Trash2, ShoppingCart, ArrowLeft, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const router = useRouter()
  const {
    items,
    removeItem,
    updateQuantity,
    total,
    itemCount,
    setRentalDates,
    startDate: cartStartDate,
    endDate: cartEndDate,
    rentalDays,
  } = useCart()

  const [startDate, setStartDate] = useState<Date | undefined>(cartStartDate ? new Date(cartStartDate) : undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(cartEndDate ? new Date(cartEndDate) : undefined)

  const handleDateChange = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates")
      return
    }

    setRentalDates(format(startDate, "yyyy-MM-dd"), format(endDate, "yyyy-MM-dd"))
  }

  const calculateDays = (start: Date, end: Date) => {
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Include both start and end days
    return diffDays
  }

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    router.push("/checkout")
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Cart Section */}
        <section className="relative py-16 bg-black">
          {/* Neon glow backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>

          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <ShoppingCart className="mr-3 h-8 w-8" />
              Your Magical Cart
            </h1>

            {items.length === 0 ? (
              <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
                <p className="text-gray-300 mb-6">Add some magical items to your cart to get started!</p>
                <Link href="/products">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    Browse Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {/* Rental Dates */}
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Rental Dates</h2>
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
                      <div className="flex items-center justify-between">
                        <div className="text-white">Rental Duration: {calculateDays(startDate, endDate)} days</div>
                        <Button
                          onClick={handleDateChange}
                          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                        >
                          Update Dates
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 flex flex-col sm:flex-row gap-4"
                      >
                        <div className="w-full sm:w-24 h-24 relative flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{item.name}</h3>
                          <p className="text-gray-300 text-sm mb-2">
                            ${item.price}/day × {rentalDays} days
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 h-8 w-8 p-0"
                              >
                                -
                              </Button>
                              <span className="mx-3 text-white">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 h-8 w-8 p-0"
                              >
                                +
                              </Button>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-lg font-bold text-pink-400">
                                ${(item.price * item.quantity * rentalDays).toFixed(2)}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-red-300 hover:bg-gray-800 p-2 h-8 w-8"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link href="/products">
                      <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sticky top-24">
                    <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-gray-300">
                        <span>Items ({itemCount}):</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Rental Duration:</span>
                        <span>{rentalDays} days</span>
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
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg"
                      onClick={handleCheckout}
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

