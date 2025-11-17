import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const viewsFilePath = path.join(process.cwd(), "data", "views.json")

function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(viewsFilePath)) {
    fs.writeFileSync(viewsFilePath, JSON.stringify({ total: 0, profissionais: {} }))
  }
}

export async function GET() {
  try {
    ensureDataDir()
    const fileContents = fs.readFileSync(viewsFilePath, "utf8")
    const views = JSON.parse(fileContents)
    return NextResponse.json(views)
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar visualizações" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    ensureDataDir()
    const { profissionalId } = await request.json()

    const fileContents = fs.readFileSync(viewsFilePath, "utf8")
    const views = JSON.parse(fileContents)

    views.total = (views.total || 0) + 1

    if (profissionalId) {
      views.profissionais[profissionalId] = (views.profissionais[profissionalId] || 0) + 1
    }

    fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2))

    return NextResponse.json({ success: true, views })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao registrar visualização" }, { status: 500 })
  }
}
