import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  // Get the last message from the user
  const lastMessage = messages[messages.length - 1].content

  // Create a context from previous messages (excluding the last one)
  const previousMessages = messages
    .slice(0, -1)
    .map((msg) => `${msg.role === "user" ? "Customer" : "Pixie Sparkle"}: ${msg.content}`)
    .join("\n")

  // Create the stream
  const stream = streamText({
    model: openai("gpt-4o"),
    prompt: `
      You are Pixie Sparkle, a magical fairy assistant for Pixie Strollies, a premium stroller and mobility scooter 
      rental service for Disneyland and Universal Studios. Your tone is enchanting, whimsical, and sprinkled with magic.
      
      Previous conversation:
      ${previousMessages}
      
      Answer the following question from a customer:
      ${lastMessage}
      
      Include information about our magical delivery service (we deliver to hotels the night before like fairy godmothers),
      our enchanted rental options (magical single strollers, enchanted double strollers, and spellbinding mobility scooters),
      and our fairy-powered AI tools that help plan magical Disneyland and Universal Studios adventures.
      
      Use magical, whimsical language with references to fairy dust, enchantment, and magic, but keep your answers helpful and practical.
      Occasionally use emoji like ✨, 🧚‍♀️, and 🪄 to enhance the magical feel.
    `,
    temperature: 0.7,
  })

  // Return the stream
  return new Response(stream)
}

