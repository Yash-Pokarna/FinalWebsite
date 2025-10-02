import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

type Body = { name: string; email: string; message: string }

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    await fs.mkdir(dataDir, { recursive: true })
    const file = path.join(dataDir, 'submissions.json')

    let arr = []
    try { const existing = await fs.readFile(file, 'utf8'); arr = JSON.parse(existing) } catch (e) { arr = [] }

    arr.push({ id: Date.now(), name: body.name, email: body.email, message: body.message, createdAt: new Date().toISOString() })

    await fs.writeFile(file, JSON.stringify(arr, null, 2), 'utf8')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('contact route error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
