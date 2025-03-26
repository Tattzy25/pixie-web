"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, CalendarIcon, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function ReservationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    location: "",
    hotelName: "",
    productType: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Get product from URL if available
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const productParam = params.get("product")

    if (productParam) {
      setFormData((prev) => ({
        ...prev,
        productType: productParam,
      }))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, [name]: date }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 0
    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }

  const calculatePrice = () => {
    const days = calculateDays()
    let basePrice = 0

    switch (formData.productType) {
      case "single-stroller":
        basePrice = 25 * days
        break
      case "double-stroller":
        basePrice = 35 * days
        break
      case "mobility-scooter":
        basePrice = 45 * days
        break
    }

    // Apply multi-day discount
    let discount = 0
    if (days >= 7) discount = 0.25
    else if (days >= 5) discount = 0.2
    else if (days >= 3) discount = 0.15

    const discountAmount = basePrice * discount
    const subtotal = basePrice - discountAmount
    const tax = subtotal * 0.0975
    const total = subtotal + tax

    return {
      basePrice: basePrice.toFixed(2),
      discount: discountAmount.toFixed(2),
      discountPercent: (discount * 100).toFixed(0),
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      // In a real implementation, you would submit to your backend here
    }, 1500)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Choose Your Magical Dates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Select start date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => handleDateChange("startDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Select end date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.endDate}
                      onSelect={(date) => handleDateChange("endDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {formData.startDate && formData.endDate && (
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <p className="text-purple-800 font-medium">Rental Duration: {calculateDays()} days</p>
                {formData.location === "disneyland" && calculateDays() < 3 && (
                  <p className="text-red-500 text-sm mt-2">
                    Note: Disneyland area rentals require a minimum 3-day booking.
                  </p>
                )}
              </div>
            )}
          </>
        )

      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Delivery Location</h2>
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="location">Theme Park Area</Label>
                <Select onValueChange={(value) => handleSelectChange("location", value)} value={formData.location}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disneyland">Disneyland Resort Area</SelectItem>
                    <SelectItem value="universal">Universal Studios Hollywood Area</SelectItem>
                    <SelectItem value="other">Other Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="hotelName">Hotel Name</Label>
                <Input
                  id="hotelName"
                  name="hotelName"
                  placeholder="Enter your hotel name"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              {formData.location === "disneyland" && calculateDays() < 3 && (
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-amber-800">
                    <strong>Note:</strong> Disneyland area rentals require a minimum 3-day booking. Please adjust your
                    dates to continue.
                  </p>
                </div>
              )}
            </div>
          </>
        )

      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Select Your Enchanted Rental</h2>
            <div className="space-y-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-all",
                    formData.productType === "single-stroller"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50",
                  )}
                  onClick={() => handleSelectChange("productType", "single-stroller")}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Single Stroller</h3>
                    {formData.productType === "single-stroller" && <CheckCircle2 className="h-5 w-5 text-purple-500" />}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Perfect for one child</p>
                  <p className="text-purple-700 font-bold mt-2">$25/day</p>
                </div>

                <div
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-all",
                    formData.productType === "double-stroller"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50",
                  )}
                  onClick={() => handleSelectChange("productType", "double-stroller")}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Double Stroller</h3>
                    {formData.productType === "double-stroller" && <CheckCircle2 className="h-5 w-5 text-purple-500" />}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Perfect for two children</p>
                  <p className="text-purple-700 font-bold mt-2">$35/day</p>
                </div>

                <div
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-all",
                    formData.productType === "mobility-scooter"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50",
                  )}
                  onClick={() => handleSelectChange("productType", "mobility-scooter")}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Mobility Scooter</h3>
                    {formData.productType === "mobility-scooter" && (
                      <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">For adults with mobility needs</p>
                  <p className="text-purple-700 font-bold mt-2">$45/day</p>
                </div>
              </div>

              {formData.productType && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">
                    {formData.productType === "single-stroller" && "Single Stroller Features:"}
                    {formData.productType === "double-stroller" && "Double Stroller Features:"}
                    {formData.productType === "mobility-scooter" && "Mobility Scooter Features:"}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {formData.productType === "single-stroller" && (
                      <>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Comfortable padded seating</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Large canopy for sun protection</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Ample storage space</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Hot steamwashed and disinfected</span>
                        </li>
                      </>
                    )}

                    {formData.productType === "double-stroller" && (
                      <>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Side-by-side seating</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Individual canopies</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Enhanced storage capacity</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Hot steamwashed and disinfected</span>
                        </li>
                      </>
                    )}

                    {formData.productType === "mobility-scooter" && (
                      <>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Long-lasting battery</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Comfortable seating</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Easy to operate</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Storage basket included</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </>
        )

      case 4:
        return (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Complete Your Magical Booking</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <Input
                id="specialRequests"
                name="specialRequests"
                placeholder="Any special requests or notes"
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            {formData.productType && (
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-purple-800 mb-2">Reservation Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rental Item:</span>
                    <span className="font-medium">
                      {formData.productType === "single-stroller" && "Single Stroller"}
                      {formData.productType === "double-stroller" && "Double Stroller"}
                      {formData.productType === "mobility-scooter" && "Mobility Scooter"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dates:</span>
                    <span className="font-medium">
                      {formData.startDate && formData.endDate
                        ? `${format(formData.startDate, "MMM d, yyyy")} - ${format(formData.endDate, "MMM d, yyyy")}`
                        : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{calculateDays()} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">
                      {formData.location === "disneyland" && "Disneyland Resort Area"}
                      {formData.location === "universal" && "Universal Studios Hollywood Area"}
                      {formData.location === "other" && "Other Location"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hotel:</span>
                    <span className="font-medium">{formData.hotelName || "Not specified"}</span>
                  </div>

                  <div className="border-t border-purple-200 my-2 pt-2">
                    <div className="flex justify-between">
                      <span>Base Price:</span>
                      <span>${calculatePrice().basePrice}</span>
                    </div>
                    {Number(calculatePrice().discountPercent) > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Multi-day Discount ({calculatePrice().discountPercent}%):</span>
                        <span>-${calculatePrice().discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${calculatePrice().subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>${calculatePrice().tax}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base mt-2">
                      <span>Total:</span>
                      <span>${calculatePrice().total}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )

      default:
        return null
    }
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your reservation! We've sent a confirmation email to {formData.email}. Your magical rental
              will be delivered to {formData.hotelName} on{" "}
              {formData.startDate && format(formData.startDate, "MMMM d, yyyy")}.
            </p>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              onClick={() => {
                setIsSuccess(false)
                setStep(1)
                setFormData({
                  startDate: undefined,
                  endDate: undefined,
                  location: "",
                  hotelName: "",
                  productType: "",
                  name: "",
                  email: "",
                  phone: "",
                  specialRequests: "",
                })
              }}
            >
              Make Another Reservation
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <div className="mb-8">
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className={`text-xs ${step >= 1 ? "text-purple-600 font-medium" : "text-gray-500"}`}>Dates</span>
            <span className={`text-xs ${step >= 2 ? "text-purple-600 font-medium" : "text-gray-500"}`}>Location</span>
            <span className={`text-xs ${step >= 3 ? "text-purple-600 font-medium" : "text-gray-500"}`}>Product</span>
            <span className={`text-xs ${step >= 4 ? "text-purple-600 font-medium" : "text-gray-500"}`}>Checkout</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <Button
                type="button"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                onClick={nextStep}
                disabled={
                  (step === 1 && (!formData.startDate || !formData.endDate)) ||
                  (step === 1 && formData.location === "disneyland" && calculateDays() < 3) ||
                  (step === 2 && (!formData.location || !formData.hotelName)) ||
                  (step === 3 && !formData.productType)
                }
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
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
                    <Sparkles className="mr-2 h-4 w-4" />
                    Complete Booking
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

