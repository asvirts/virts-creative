import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Zapier webhook URL from environment variable
    const webhookUrl = process.env.ZAPIER_WEBHOOK_URL

    if (!webhookUrl) {
      throw new Error(
        "ZAPIER_WEBHOOK_URL is not defined in environment variables"
      )
    }

    // Format the data for Zapier
    const zapierData = {
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      message
    }

    // Send to Zapier
    const zapierResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(zapierData)
    })

    if (!zapierResponse.ok) {
      const errorText = await zapierResponse.text()
      throw new Error(`Zapier webhook error: ${errorText}`)
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully"
    })
  } catch (error) {
    console.error("Error sending message to Zapier:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
