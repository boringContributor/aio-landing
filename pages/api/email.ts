import type { NextApiRequest, NextApiResponse } from 'next'
 import { createTransport } from 'nodemailer'
import zod from 'zod'

const ContactRequest = zod.object({
    name: zod.string().max(100),
    email: zod.string().email().max(100),
    message: zod.string().max(1000)
})
type ResponseData = {
  message: string
}

const transporter = createTransport({
    host: process.env.SMTP_HOST,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWD
    },
    secure: true
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const contact = ContactRequest.parse(req.body)

    await transporter.sendMail({
        from: 'info@aio-gesundheitsmanagement.de',
        to: 'info@aio-gesundheitsmanagement.de',
        subject: `AIO Gesundheitsmanagement: Neue Anfrage von ${contact.name} / ${contact.email}`,
        text: `Name: ${contact.name}\nEmail: ${contact.email}\nNachricht: ${contact.message}`
    })

  res.status(200).json({ message: 'ok' })
}