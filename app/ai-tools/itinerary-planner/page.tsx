"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card-new"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Sparkles, ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

export default function ItineraryPlannerPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  // Form state
  const [formData, setFormData] = useState({
    park: "",
    visitDate: "",
    groupComposition: {
      adults: 0,
      children: 0,
      seniors: 0,
    },
    mobilityConsiderations: "",
    priorities: {
      rides: false,
      shows: false,
      characters: false,
      dining: false,
      shopping: false,
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGroupChange = (key: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      groupComposition: {
        ...prev.groupComposition,
        [key]: value,
      },
    }))
  }

  const handlePriorityChange = (key: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      priorities: {
        ...prev.priorities,
        [key]: checked,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/itinerary", {
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
                <Sparkles className="h-6 w-6 mr-2 text-pink-500" />
                Enchanted Itinerary Planner
              </CardTitle>
              <CardDescription>
                Create a personalized theme park itinerary based on your preferences and needs
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
                      <Label htmlFor="visitDate">Visit Date</Label>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <Input
                          id="visitDate"
                          name="visitDate"
                          type="date"
                          value={formData.visitDate}
                          onChange={handleChange}
                          className="bg-gray-900 border-gray-800 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Group Composition</Label>
                      <div className="grid grid-cols-3 gap-4 mt-1">
                        <div>
                          <Label htmlFor="adults" className="text-sm text-gray-400">
                            Adults
                          </Label>
                          <Select onValueChange={(value) => handleGroupChange("adults", Number.parseInt(value))}>
                            <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800 text-white">
                              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="children" className="text-sm text-gray-400">
                            Children
                          </Label>
                          <Select onValueChange={(value) => handleGroupChange("children", Number.parseInt(value))}>
                            <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800 text-white">
                              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="seniors" className="text-sm text-gray-400">
                            Seniors
                          </Label>
                          <Select onValueChange={(value) => handleGroupChange("seniors", Number.parseInt(value))}>
                            <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800 text-white">
                              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mobilityConsiderations">Mobility Considerations</Label>
                      <Textarea
                        id="mobilityConsiderations"
                        name="mobilityConsiderations"
                        placeholder="Any mobility needs or considerations we should know about? (e.g., using a stroller, mobility scooter, etc.)"
                        value={formData.mobilityConsiderations}
                        onChange={handleChange}
                        className="bg-gray-900 border-gray-800 text-white mt-1"
                      />
                    </div>

                    <div>
                      <Label>Priorities (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="rides"
                            checked={formData.priorities.rides}
                            onCheckedChange={(checked) => handlePriorityChange("rides", checked as boolean)}
                          />
                          <label htmlFor="rides" className="text-sm text-gray-300 cursor-pointer">
                            Thrill Rides
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="shows"
                            checked={formData.priorities.shows}
                            onCheckedChange={(checked) => handlePriorityChange("shows", checked as boolean)}
                          />
                          <label htmlFor="shows" className="text-sm text-gray-300 cursor-pointer">
                            Shows & Entertainment
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="characters"
                            checked={formData.priorities.characters}
                            onCheckedChange={(checked) => handlePriorityChange("characters", checked as boolean)}
                          />
                          <label htmlFor="characters" className="text-sm text-gray-300 cursor-pointer">
                            Character Experiences
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="dining"
                            checked={formData.priorities.dining}
                            onCheckedChange={(checked) => handlePriorityChange("dining", checked as boolean)}
                          />
                          <label htmlFor="dining" className="text-sm text-gray-300 cursor-pointer">
                            Dining Experiences
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="shopping"
                            checked={formData.priorities.shopping}
                            onCheckedChange={(checked) => handlePriorityChange("shopping", checked as boolean)}
                          />
                          <label htmlFor="shopping" className="text-sm text-gray-300 cursor-pointer">
                            Shopping
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
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
                        Creating Your Magical Itinerary...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Create My Magical Itinerary
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-6">
                    <Card className="border-blue-500/30 bg-blue-950/20">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Morning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {result.morning.map((item: any, index: number) => (
                            <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                              <div className="flex justify-between mb-1">
                                <span className="font-bold text-white">{item.time}</span>
                                <span className="text-blue-400">{item.activity}</span>
                              </div>
                              {item.tip && <p className="text-sm text-gray-400 italic">{item.tip}</p>}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-pink-500/30 bg-pink-950/20">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Afternoon</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {result.afternoon.map((item: any, index: number) => (
                            <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                              <div className="flex justify-between mb-1">
                                <span className="font-bold text-white">{item.time}</span>
                                <span className="text-pink-400">{item.activity}</span>
                              </div>
                              {item.tip && <p className="text-sm text-gray-400 italic">{item.tip}</p>}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-500/30 bg-purple-950/20">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Evening</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {result.evening.map((item: any, index: number) => (
                            <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                              <div className="flex justify-between mb-1">
                                <span className="font-bold text-white">{item.time}</span>
                                <span className="text-purple-400">{item.activity}</span>
                              </div>
                              {item.tip && <p className="text-sm text-gray-400 italic">{item.tip}</p>}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Pixie Tips</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {result.pixieTips.map((tip: string, index: number) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setResult(null)}
                      variant="outline"
                      className="flex-1 border-gray-800 text-white hover:bg-gray-800"
                    >
                      Start Over
                    </Button>
                    <Link href="/reservation" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
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

