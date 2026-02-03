import { NextResponse } from 'next/server';
import { Resend } from 'resend';

//resend initialization with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // parse the form data from the request body
        const { name, email, subject, message } = await req.json();

        // server side validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.RECEIVER_EMAIL as string,
            subject: `Portfolio: ${subject}`,
            text: `
                    New message from your portfolio contact form:
                    
                    Name: ${name}
                    Email: ${email}
                    Subject: ${subject}
                    
                    Message:
                    ${message}
                `,
        });

        if (error) {
            console.error("Resend Error: ", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server Error: ", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}