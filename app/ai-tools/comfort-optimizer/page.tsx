"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card-new"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sparkles, ArrowLeft, Thermometer, Umbrella } from "lucide-react"
import Link from "next/link"

export default function ComfortOptimizerPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  // Form state
  const [formData, setFormData] = useState({
    park: "",
    weather: "",
    equipment: "",
    specialNeeds: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/comfort-optimizer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/ai-tools" className="inline-block mb-6">
            <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Fairy Tools
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Sparkles className="h-6 w-6 mr-2 text-blue-500" />
                Mystical Park Comfort Optimizer
              </CardTitle>
              <CardDescription>
                Get personalized recommendations for rest stops, cooling stations, and shaded routes
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="park">Select Park</Label>
                      <Select onValueChange={(value) => handleSelectChange("park", value)} required>
                        <SelectTrigger className="bg-gray-900 border-gray-800 text-white mt-1">
                          <SelectValue placeholder="Choose a park" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800 text-white">
                          <SelectItem value="disneyland">Disneyland Park</SelectItem>
                          <SelectItem value="california-adventure">Disney California Adventure</SelectItem>
                          <SelectItem value="universal-studios">Universal Studios Hollywood</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="weather">Weather Conditions</Label>
                      <div className="flex items-center mt-1">
                        <Thermometer className="h-4 w-4 mr-2 text-gray-400" />
                        <Select onValueChange={(value) => handleSelectChange("weather", value)} required>
                          <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                            <SelectValue placeholder="Select weather conditions" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-800 text-white">
                            <SelectItem value="hot">Hot (85°F+)</SelectItem>
                            <SelectItem value="warm">Warm (70-85°F)</SelectItem>
                            <SelectItem value="mild">Mild (60-70°F)</SelectItem>
                            <SelectItem value="cool">Cool (Below 60°F)</SelectItem>
                            <SelectItem value="rainy">Rainy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="equipment">Equipment Being Used</Label>
                      <Select onValueChange={(value) => handleSelectChange("equipment", value)} required>
                        <SelectTrigger className="bg-gray-900 border-gray-800 text-white mt-1">
                          <SelectValue placeholder="Select equipment" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800 text-white">
                          <SelectItem value="single-stroller">Single Stroller</SelectItem>
                          <SelectItem value="double-stroller">Double Stroller</SelectItem>
                          <SelectItem value="mobility-scooter">Mobility Scooter</SelectItem>
                          <SelectItem value="wheelchair">Wheelchair</SelectItem>
                          <SelectItem value="none">No Equipment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="specialNeeds">Special Needs or Considerations (Optional)</Label>
                      <Textarea
                        id="specialNeeds"
                        name="specialNeeds"
                        placeholder="Any special needs or considerations we should know about? (e.g., sensitivity to heat, need frequent breaks, etc.)"
                        value={formData.specialNeeds}
                        onChange={handleChange}
                        className="bg-gray-900 border-gray-800 text-white mt-1"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
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
                        Optimizing Your Comfort...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Get My Comfort Recommendations
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <Card className="border-blue-500/30 bg-blue-950/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-white flex items-center">
                        <Umbrella className="h-5 w-5 mr-2 text-blue-400" />
                        Rest Stops
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {result.restStops.map((stop: any, index: number) => (
                          <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                            <h3 className="font-bold text-white mb-1">{stop.location}</h3>
                            <p className="text-gray-300 mb-1">{stop.description}</p>
                            <p className="text-sm text-blue-400">Best time to visit: {stop.bestTimeToVisit}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-cyan-500/30 bg-cyan-950/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Cooling Stations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {result.coolingStations.map((station: any, index: number) => (
                          <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                            <h3 className="font-bold text-white mb-1">{station.location}</h3>
                            <p className="text-gray-300">{station.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/30 bg-green-950/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Shaded Routes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {result.shadedRoutes.map((route: any, index: number) => (
                          <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                            <h3 className="font-bold text-white mb-1">
                              {route.from} to {route.to}
                            </h3>
                            <p className="text-gray-300">{route.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">General Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {result.generalTips.map((tip: string, index: number) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setResult(null)}
                      variant="outline"
                      className="flex-1 border-gray-800 text-white hover:bg-gray-800"
                    >
                      Start Over
                    </Button>
                    <Link href="/reservation" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        Book Your Rental Now
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}

