"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      })
      return
    }

    setStatus({
      type: "loading",
      message: "Subscribing...",
    })

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({
          type: "success",
          message: data.message,
        })
        setEmail("")
      } else {
        setStatus({
          type: "error",
          message: data.message,
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error subscribing to the newsletter. Please try again.",
      })
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={status.type === "loading"}
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 relative group"
          disabled={status.type === "loading"}
        >
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/50 to-pink-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative">
            {status.type === "loading" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Subscribe
              </>
            )}
          </span>
        </Button>
      </form>

      {status.type && (
        <div
          className={`mt-2 text-sm ${
            status.type === "success" ? "text-green-400" : status.type === "error" ? "text-red-400" : ""
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  )
}

