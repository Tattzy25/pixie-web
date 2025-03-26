import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // Use the AI SDK to generate a response
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
        You are a helpful assistant for Pixie Strollies, a premium stroller and mobility scooter 
        rental service for Disneyland and Universal Studios.
        
        Answer the following question from a customer:
        ${message}
        
        Include information about our delivery service (we deliver to hotels the night before),
        our rental options (single strollers, double strollers, and mobility scooters),
        and our AI-powered tools that help plan theme park visits.
        
        If the customer wants to make a reservation, ask for:
        - Rental dates
        - Hotel name
        - Equipment type needed
        - Number of children and their ages (if applicable)
      `,
      temperature: 0.7,
      maxTokens: 500,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "There was an error processing your request" }, { status: 500 })
  }
}

