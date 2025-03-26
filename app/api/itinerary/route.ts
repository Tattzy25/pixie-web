import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { park, visitDate, groupComposition, mobilityConsiderations, priorities } = await request.json()

    // Use the AI SDK to generate an itinerary
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
        You are an AI itinerary planner for Pixie Strollies, a premium stroller and mobility scooter 
        rental service for Disneyland and Universal Studios.
        
        Create a detailed theme park itinerary based on the following information:
        - Park: ${park}
        - Visit date: ${visitDate}
        - Group composition: ${JSON.stringify(groupComposition)}
        - Mobility considerations: ${mobilityConsiderations}
        - Priorities: ${JSON.stringify(priorities)}
        
        Format your response as JSON with the following structure:
        {
          "morning": [
            {"time": "9:00 AM", "activity": "Activity description", "tip": "Optional tip"},
            {"time": "10:30 AM", "activity": "Activity description", "tip": "Optional tip"}
          ],
          "afternoon": [
            {"time": "12:15 PM", "activity": "Activity description", "tip": "Optional tip"},
            {"time": "2:30 PM", "activity": "Activity description", "tip": "Optional tip"}
          ],
          "evening": [
            {"time": "5:30 PM", "activity": "Activity description", "tip": "Optional tip"},
            {"time": "8:00 PM", "activity": "Activity description", "tip": "Optional tip"}
          ],
          "pixieTips": [
            "Tip 1 related to their rental equipment",
            "Tip 2 about park navigation",
            "Tip 3 about comfort/convenience"
          ]
        }
      `,
      temperature: 0.7,
      maxTokens: 1000,
    })

    // Parse the response as JSON
    const itinerary = JSON.parse(text)

    return NextResponse.json(itinerary)
  } catch (error) {
    console.error("Error in itinerary API:", error)
    return NextResponse.json({ error: "There was an error processing your request" }, { status: 500 })
  }
}

