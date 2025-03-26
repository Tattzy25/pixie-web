import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { park, weather, equipment, specialNeeds } = await request.json()

    // Use the AI SDK to generate comfort recommendations
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
        You are an AI park comfort optimizer for Pixie Strollies, a premium stroller and mobility scooter 
        rental service for Disneyland and Universal Studios.
        
        Based on the following information, provide recommendations for rest stops, cooling stations, 
        and shade routes:
        - Park: ${park}
        - Weather conditions: ${weather}
        - Equipment being used: ${equipment}
        - Special needs: ${specialNeeds || "None specified"}
        
        Format your response as JSON with the following structure:
        {
          "restStops": [
            {"location": "Location name", "description": "Brief description", "bestTimeToVisit": "Time of day"},
            {"location": "Location name", "description": "Brief description", "bestTimeToVisit": "Time of day"}
          ],
          "coolingStations": [
            {"location": "Location name", "description": "Brief description"},
            {"location": "Location name", "description": "Brief description"}
          ],
          "shadedRoutes": [
            {"from": "Starting point", "to": "Ending point", "description": "Route description"},
            {"from": "Starting point", "to": "Ending point", "description": "Route description"}
          ],
          "generalTips": [
            "Tip 1 for staying comfortable",
            "Tip 2 for staying comfortable",
            "Tip 3 for staying comfortable"
          ]
        }
      `,
      temperature: 0.7,
      maxTokens: 1000,
    })

    // Parse the response as JSON
    const recommendations = JSON.parse(text)

    return NextResponse.json(recommendations)
  } catch (error) {
    console.error("Error in comfort optimizer API:", error)
    return NextResponse.json({ error: "There was an error processing your request" }, { status: 500 })
  }
}

