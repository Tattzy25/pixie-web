"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card-new"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Send, Sparkles, UserRound } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function AIChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Pixie Sparkle, your magical guide to the enchanted realms of Disneyland and Universal Studios! ✨ How can I sprinkle some fairy dust on your magical journey today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showHandoff, setShowHandoff] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Add a placeholder for the assistant's message
      setMessages((prev) => [...prev, { role: "assistant", content: "" }])

      // Call our streaming API route
      const response = await fetch("/api/chat-stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      if (!response.ok || !response.body) {
        throw new Error("Failed to get response")
      }

      // Set up the reader
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let done = false
      let accumulatedContent = ""

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading

        if (value) {
          // Decode the chunk and add it to the accumulated content
          const chunk = decoder.decode(value, { stream: true })
          accumulatedContent += chunk

          // Update the last message with the accumulated content
          setMessages((prev) => {
            const newMessages = [...prev]
            newMessages[newMessages.length - 1].content = accumulatedContent
            return newMessages
          })
        }
      }
    } catch (error) {
      console.error("Error sending message:", error)

      // Add error message
      setMessages((prev) => {
        // Remove the placeholder message
        const newMessages = prev.slice(0, -1)

        // Add the error message
        return [
          ...newMessages,
          {
            role: "assistant",
            content:
              "Oh no! My magic seems to be a bit fuzzy right now. Please try again later or send a magical message to our support wizards at support@pixiestrollies.com.",
          },
        ]
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleHandoff = () => {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "I'm connecting you with one of our magical customer service fairies! They'll be with you in just a moment. ✨",
      },
    ])
    setShowHandoff(false)
    // Here you would typically implement the actual handoff logic to connect to a live agent
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Header */}
        <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-2 glow-text">
              <span className="inline-flex items-center">
                <Sparkles className="h-8 w-8 mr-2 animate-pulse" />
                Pixie Sparkle
                <Sparkles className="h-8 w-8 ml-2 animate-pulse" />
              </span>
            </h1>
            <p className="text-white/90">
              Your magical fairy guide to enchanted Disneyland & Universal Studios adventures
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col">
          <Card className="flex-1 mb-4 shadow-md">
            <CardContent className="p-4 h-[60vh] overflow-y-auto flex flex-col space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <Avatar className={`w-8 h-8 ${message.role === "user" ? "ml-2" : "mr-2"} flex-shrink-0`}>
                      {message.role === "assistant" ? (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-full flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                          <UserRound className="h-4 w-4 text-gray-700" />
                        </div>
                      )}
                    </Avatar>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                          : "bg-gray-900 border border-gray-800 text-white"
                      }`}
                    >
                      {message.content ||
                        (message.role === "assistant" && isLoading ? (
                          <div className="flex space-x-2">
                            <div
                              className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        ) : (
                          ""
                        ))}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>
          </Card>

          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Pixie Sparkle about magical strollers, scooters, or park adventures..."
              className="flex-1 bg-gray-900 border-gray-800 text-white focus-visible:ring-purple-500"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
            <Button
              onClick={() => setShowHandoff(!showHandoff)}
              variant="outline"
              className="border-gray-800 text-purple-600 hover:bg-gray-900"
            >
              <UserRound className="h-4 w-4" />
              <span className="sr-only">Talk to a human</span>
            </Button>
          </div>

          {showHandoff && (
            <Card className="mt-2">
              <CardContent className="p-4">
                <p className="text-sm text-white mb-2">
                  Would you like to speak with a human customer service representative?
                </p>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    onClick={handleHandoff}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                  >
                    Yes, connect me
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setShowHandoff(false)} className="border-gray-800">
                    No, continue with Pixie Sparkle
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              Ask Pixie Sparkle about magical stroller recommendations, enchanted delivery options, or spellbinding park
              tips!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

