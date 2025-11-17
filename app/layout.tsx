import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  title: "AcheiPerto — Conecte-se com profissionais perto de você",
  description:
    "Conecte com profissionais verificados, perto de sua localização. Contato direto, atendimento rápido e sem intermediários.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans antialiased`}
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen", "Ubuntu", "Cantarell", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  )
}
