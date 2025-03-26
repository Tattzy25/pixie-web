import { supabase } from "./supabase"

export async function subscribeToNewsletter(email: string) {
  try {
    // First check if the email already exists
    const { data: existingSubscriber } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .eq("email", email)
      .single()

    if (existingSubscriber) {
      return { success: true, message: "You're already subscribed to our magical newsletter!" }
    }

    // Add the new subscriber
    const { error } = await supabase.from("newsletter_subscribers").insert([
      {
        email,
        subscribed_at: new Date().toISOString(),
        status: "active",
      },
    ])

    if (error) throw error

    // If you're using a service like MailerLite, you could add code here to sync with their API
    if (process.env.MAILERLITE_API_KEY) {
      await addSubscriberToMailerLite(email)
    }

    return { success: true, message: "Thank you for subscribing to our magical newsletter!" }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return { success: false, message: "There was an error subscribing to the newsletter. Please try again." }
  }
}

async function addSubscriberToMailerLite(email: string) {
  try {
    const response = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY || "",
      },
      body: JSON.stringify({
        email,
        resubscribe: false,
        autoresponders: true,
        type: "active",
      }),
    })

    if (!response.ok) {
      throw new Error(`MailerLite API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error adding subscriber to MailerLite:", error)
    throw error
  }
}

