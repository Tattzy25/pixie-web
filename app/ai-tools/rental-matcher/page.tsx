"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card-new"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RentalMatcherPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  // Form state
  const [formData, setFormData] = useState({
    whoGoing: "",
    mobilityNeeds: "",
    childCount: "",
    childAges: "",
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
      const response = await fetch("/api/rental-matcher", {
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
                <Sparkles className="h-6 w-6 mr-2 text-purple-500" />
                Magical Rental Matcher
              </CardTitle>
              <CardDescription>
                Answer a few questions and our fairy-powered AI will recommend the perfect rental for your magical
                adventure
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="whoGoing">Who's going on this magical adventure?</Label>
                      <Textarea
                        id="whoGoing"
                        name="whoGoing"
                        placeholder="Tell us about your group (e.g., 2 adults, 2 children ages 3 and 5, and grandma)"
                        value={formData.whoGoing}
                        onChange={handleChange}
                        className="bg-gray-900 border-gray-800 text-white mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="mobilityNeeds">Any mobility needs or considerations?</Label>
                      <Textarea
                        id="mobilityNeeds"
                        name="mobilityNeeds"
                        placeholder="Tell us about any mobility needs (e.g., elderly family member who tires easily, someone with a temporary injury)"
                        value={formData.mobilityNeeds}
                        onChange={handleChange}
                        className="bg-gray-900 border-gray-800 text-white mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="childCount">Number of children</Label>
                        <Select onValueChange={(value) => handleSelectChange("childCount", value)}>
                          <SelectTrigger className="bg-gray-900 border-gray-800 text-white mt-1">
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-800 text-white">
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4+">4 or more</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="childAges">Age range of children</Label>
                        <Input
                          id="childAges"
                          name="childAges"
                          placeholder="e.g., 2-5 years"
                          value={formData.childAges}
                          onChange={handleChange}
                          className="bg-gray-900 border-gray-800 text-white mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
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
                        Finding Your Perfect Match...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Find My Perfect Rental
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <Card className="border-green-500/30 bg-green-950/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Recommended: {result.recommendedProduct}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{result.reasoning}</p>

                      <h3 className="font-bold text-white mb-2">Key Features:</h3>
                      <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                        {result.features.map((feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>

                      {result.accessories && result.accessories.length > 0 && (
                        <>
                          <h3 className="font-bold text-white mb-2">Recommended Accessories:</h3>
                          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
                            {result.accessories.map((accessory: string, index: number) => (
                              <li key={index}>{accessory}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/reservation?product=${result.recommendedProduct.toLowerCase().replace(" ", "-")}`}
                        className="w-full"
                      >
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                          Book This Rental Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Button
                    onClick={() => setResult(null)}
                    variant="outline"
                    className="w-full border-gray-800 text-white hover:bg-gray-800"
                  >
                    Start Over
                  </Button>
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

