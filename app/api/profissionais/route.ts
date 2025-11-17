import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "mock", "profissionais.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const profissionais = JSON.parse(fileContents)

    return NextResponse.json(profissionais)
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar profissionais" }, { status: 500 })
  }
}
