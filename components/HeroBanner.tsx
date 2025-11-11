"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./HeroBanner.module.css"

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchQuery) params.append("q", searchQuery)
    if (location) params.append("local", location)
    router.push(`/buscar?${params.toString()}`)
  }

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Achei Perto — Encontre quem resolve, perto de você</h1>
          <p className={styles.subtitle}>
            Profissionais verificados, contato direto e atendimento rápido na sua região.
          </p>

          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="O que você precisa? Ex: eletricista, encanador"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Sua localização (bairro ou CEP)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Encontrar agora
            </button>
          </form>

          <div className={styles.ctaSecondary}>
            <p>É profissional?</p>
            <button className="btn btn-outline">Quero anunciar</button>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.iconPlaceholder}>🔧</div>
        </div>
      </div>
    </section>
  )
}
