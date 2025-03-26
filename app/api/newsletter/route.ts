import { NextResponse } from "next/server"
import { subscribeToNewsletter } from "@/lib/newsletter"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    const result = await subscribeToNewsletter(email)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in newsletter API:", error)
    return NextResponse.json({ success: false, message: "There was an error processing your request" }, { status: 500 })
  }
}

