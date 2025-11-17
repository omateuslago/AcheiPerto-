"use client"

import React from "react"

import { useState, useMemo } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SearchBar from "@/components/SearchBar"
import FiltersPanel from "@/components/FiltersPanel"
import ResultsList from "@/components/ResultsList"
import MapToggle from "@/components/MapToggle"
import SortControl from "@/components/SortControl"
import NoResults from "@/components/NoResults"
import DynamicMapView from "@/components/GoogleMapsLoader"
import styles from "./buscar.module.css"

export default function BuscarPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 })
  const [maxDistance, setMaxDistance] = useState(10)
  const [minRating, setMinRating] = useState(0)
  const [viewMode, setViewMode] = useState<"list" | "map">("list")
  const [sortBy, setSortBy] = useState("relevancia")
  const [currentPage, setCurrentPage] = useState(1)
  const [profissionais, setProfissionais] = useState<any[]>([])
  const itemsPerPage = 6

  // Carregar dados ao montar componente
  React.useEffect(() => {
    const loadProfissionais = async () => {
      const response = await fetch("/api/profissionais")
      const data = await response.json()
      setProfissionais(data)
    }
    loadProfissionais()
  }, [])

  // Filtrar e ordenar profissionais
  const filteredProfissionais = useMemo(() => {
    const filtered = profissionais.filter((prof) => {
      const matchSearch =
        searchTerm === "" ||
        prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.categoria.toLowerCase().includes(searchTerm.toLowerCase())

      const matchCategory = selectedCategory === "" || prof.categoria === selectedCategory
      const matchPrice = prof.preco_min >= priceRange.min && prof.preco_max <= priceRange.max
      const matchDistance = prof.distancia_km <= maxDistance
      const matchRating = prof.nota >= minRating

      return matchSearch && matchCategory && matchPrice && matchDistance && matchRating
    })

    // Ordenar resultados
    filtered.sort((a, b) => {
      if (sortBy === "distancia") {
        return a.distancia_km - b.distancia_km
      } else if (sortBy === "avaliacao") {
        return b.nota - a.nota
      } else if (sortBy === "preco") {
        return a.preco_min - b.preco_min
      }
      return 0 // relevancia (sem ordenação adicional)
    })

    return filtered
  }, [profissionais, searchTerm, selectedCategory, priceRange, maxDistance, minRating, sortBy])

  // Paginação
  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredProfissionais.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProfissionais, currentPage])

  const totalPages = Math.ceil(filteredProfissionais.length / itemsPerPage)

  const handleSearch = (search: string, loc: string) => {
    setSearchTerm(search)
    setLocation(loc)
    setCurrentPage(1)
  }

  const handleFilterChange = (
    category: string,
    price: { min: number; max: number },
    distance: number,
    rating: number,
  ) => {
    setSelectedCategory(category)
    setPriceRange(price)
    setMaxDistance(distance)
    setMinRating(rating)
    setCurrentPage(1)
  }

  return (
    <>
      <Navbar />
      <main className={styles.buscarPage}>
        <div className={styles.container}>
          {/* Barra de busca */}
          <SearchBar onSearch={handleSearch} />

          <div className={styles.content}>
            {/* Painel de filtros */}
            <FiltersPanel
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              maxDistance={maxDistance}
              minRating={minRating}
              onFilterChange={handleFilterChange}
              totalResults={filteredProfissionais.length}
            />

            {/* Resultados */}
            <div className={styles.resultsArea}>
              {/* Controles de visualização */}
              <div className={styles.controls}>
                <SortControl sortBy={sortBy} onSortChange={setSortBy} />
                <MapToggle viewMode={viewMode} onViewModeChange={setViewMode} />
              </div>

              {/* Visualização */}
              {filteredProfissionais.length === 0 ? (
                <NoResults
                  onReset={() => {
                    setSearchTerm("")
                    setLocation("")
                    setSelectedCategory("")
                    setPriceRange({ min: 0, max: 500 })
                    setMaxDistance(10)
                    setMinRating(0)
                    setCurrentPage(1)
                  }}
                />
              ) : viewMode === "list" ? (
                <>
                  <ResultsList profissionais={paginatedResults} />
                  {totalPages > 1 && (
                    <div className={styles.pagination}>
                      <button
                        className={styles.pageButton}
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        Anterior
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i + 1}
                          className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ""}`}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        className={styles.pageButton}
                        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Próxima
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <DynamicMapView profissionais={filteredProfissionais} />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
