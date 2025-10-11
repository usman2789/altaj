import { NextRequest, NextResponse } from 'next/server'

// API route handlers

export async function POST(request: NextRequest) {
    const body = await request.json()
    return NextResponse.json({ data: body })
}