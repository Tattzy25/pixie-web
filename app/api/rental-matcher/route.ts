import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { whoGoing, mobilityNeeds, childCount, childAges } = await request.json()

    // Use the AI SDK to generate a recommendation
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
        You are an AI rental matcher for Pixie Strollies, a premium stroller and mobility scooter 
        rental service for Disneyland and Universal Studios.
        
        Based on the following information, recommend the best rental option:
        - Who's going: ${whoGoing}
        - Mobility needs: ${mobilityNeeds}
        - Number of children: ${childCount}
        - Age range of children: ${childAges}
        
        Format your response as JSON with the following structure:
        {
          "recommendedProduct": "Single Stroller", // or "Double Stroller" or "Mobility Scooter"
          "reasoning": "Brief explanation of why this is recommended",
          "features": ["Feature 1", "Feature 2", "Feature 3"],
          "accessories": ["Recommended accessory 1", "Recommended accessory 2"]
        }
      `,
      temperature: 0.3,
      maxTokens: 500,
    })

    // Parse the response as JSON
    const recommendation = JSON.parse(text)

    return NextResponse.json(recommendation)
  } catch (error) {
    console.error("Error in rental matcher API:", error)
    return NextResponse.json({ error: "There was an error processing your request" }, { status: 500 })
  }
}

