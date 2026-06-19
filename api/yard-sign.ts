import type { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, phone, address } = req.body

  if (!name || !email || !phone || !address) {
    return res.status(400).json({ error: "All fields are required" })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Alvis WAVE <quotes@send.alviswaveservices.com>",
      to: ["info@alviswaveservices.com"],
      replyTo: email,
      subject: `Yard Sign Program Entry - ${name}`,
      html: `
        <h2>New Yard Sign Program Entry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><em>Auto-entered for monthly $250 gift card drawing.</em></p>
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
