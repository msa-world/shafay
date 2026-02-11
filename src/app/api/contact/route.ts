import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type ContactPayload = {
    name?: string
    email?: string
    service?: string
    message?: string
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const normalizeSmtpUser = (value: string) => (value.includes('@') ? value : `${value}@gmail.com`)

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

export async function POST(request: Request) {
    try {
        const { name, email, service, message } = (await request.json()) as ContactPayload

        if (!name || !email || !service || !message) {
            return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 })
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
        }

        const smtpUserRaw = process.env.SMTP_USER
        const smtpPassRaw = process.env.SMTP_APP_PASSWORD
        const receiver = process.env.CONTACT_RECEIVER

        if (!smtpUserRaw || !smtpPassRaw || !receiver) {
            return NextResponse.json(
                { error: 'Email service is not configured on the server.' },
                { status: 500 }
            )
        }

        const smtpUser = normalizeSmtpUser(smtpUserRaw)
        const smtpPass = smtpPassRaw.replace(/\s+/g, '')
        const safeName = escapeHtml(name)
        const safeEmail = escapeHtml(email)
        const safeService = escapeHtml(service)
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        })

        await transporter.sendMail({
            from: `"Portfolio Contact" <${smtpUser}>`,
            to: receiver,
            replyTo: email,
            subject: `New portfolio message from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Service: ${service}`,
                '',
                'Message:',
                message
            ].join('\n'),
            html: `
                <h2>New Portfolio Contact Message</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Service:</strong> ${safeService}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
            `
        })

        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error('Contact form email failed:', error)
        return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
    }
}
