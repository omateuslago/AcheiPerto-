"use client"

import type React from "react"
import { useState } from "react"
import styles from "./SearchBar.module.css"

interface SearchBarProps {
  onSearch: (search: string, location: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(search, location)
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.searchGroup}>
        <label htmlFor="search-input" className={styles.label}>
          O que você precisa?
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Digite um serviço (ex: encanador, eletricista)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
          aria-label="Buscar por serviço"
        />
      </div>

      <div className={styles.searchGroup}>
        <label htmlFor="location-input" className={styles.label}>
          Localização
        </label>
        <input
          id="location-input"
          type="text"
          placeholder="Sua localização ou CEP"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.input}
          aria-label="Digite sua localização"
        />
      </div>

      <button type="submit" className={styles.button} aria-label="Buscar profissionais">
        Buscar
      </button>
    </form>
  )
}
