import type { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, phone, service, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Alvis WAVE <quotes@send.alviswaveservices.com>",
      to: ["info@alviswaveservices.com"],
      replyTo: email || undefined,
      subject: `New Service Request from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br>") : "No message"}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return res.status(500).json({ error: "Failed to send email" })
    }

    return res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Handler error:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
}
