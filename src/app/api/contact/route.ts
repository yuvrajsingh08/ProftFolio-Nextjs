import { NextResponse } from 'next/server'

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    await request.json() as ContactRequestBody
    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email using a service like SendGrid, AWS SES, etc.
    // 3. Store the message in a database if needed

    // For now, we'll just simulate a successful response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
} 