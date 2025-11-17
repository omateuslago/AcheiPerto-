"use client"

import { useState, useEffect } from "react"
import styles from "./FiltersPanel.module.css"

interface FiltersPanelProps {
  selectedCategory: string
  priceRange: { min: number; max: number }
  maxDistance: number
  minRating: number
  onFilterChange: (category: string, price: { min: number; max: number }, distance: number, rating: number) => void
  totalResults: number
}

export default function FiltersPanel({
  selectedCategory,
  priceRange,
  maxDistance,
  minRating,
  onFilterChange,
  totalResults,
}: FiltersPanelProps) {
  const [categories, setCategories] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(true)
  const [localCategory, setLocalCategory] = useState(selectedCategory)
  const [localPrice, setLocalPrice] = useState(priceRange)
  const [localDistance, setLocalDistance] = useState(maxDistance)
  const [localRating, setLocalRating] = useState(minRating)

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetch("/api/categorias")
      const data = await response.json()
      setCategories(data)
    }
    loadCategories()
  }, [])

  const handleApplyFilters = () => {
    onFilterChange(localCategory, localPrice, localDistance, localRating)
  }

  const handleReset = () => {
    setLocalCategory("")
    setLocalPrice({ min: 0, max: 500 })
    setLocalDistance(10)
    setLocalRating(0)
    onFilterChange("", { min: 0, max: 500 }, 10, 0)
  }

  return (
    <aside className={styles.filtersPanel}>
      <div className={styles.header}>
        <h3>Filtros</h3>
        <button
          className={styles.toggleButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir/fechar filtros"
          aria-expanded={isOpen}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.content}>
          {/* Categoria */}
          <div className={styles.filterGroup}>
            <label className={styles.label}>Categoria</label>
            <div className={styles.checkboxes}>
              <label className={styles.checkbox}>
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={localCategory === ""}
                  onChange={() => setLocalCategory("")}
                  aria-label="Todas as categorias"
                />
                <span>Todas</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className={styles.checkbox}>
                  <input
                    type="radio"
                    name="category"
                    value={cat.nome}
                    checked={localCategory === cat.nome}
                    onChange={() => setLocalCategory(cat.nome)}
                    aria-label={`Filtrar por ${cat.nome}`}
                  />
                  <span>
                    {cat.icone} {cat.nome}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Faixa de preço */}
          <div className={styles.filterGroup}>
            <label className={styles.label}>Faixa de preço</label>
            <div className={styles.priceInputs}>
              <input
                type="number"
                min="0"
                max="500"
                value={localPrice.min}
                onChange={(e) => setLocalPrice({ ...localPrice, min: Number(e.target.value) })}
                placeholder="Min"
                className={styles.priceInput}
                aria-label="Preço mínimo"
              />
              <span>—</span>
              <input
                type="number"
                min="0"
                max="500"
                value={localPrice.max}
                onChange={(e) => setLocalPrice({ ...localPrice, max: Number(e.target.value) })}
                placeholder="Max"
                className={styles.priceInput}
                aria-label="Preço máximo"
              />
            </div>
          </div>

          {/* Distância */}
          <div className={styles.filterGroup}>
            <label className={styles.label}>Distância máxima: {localDistance}km</label>
            <input
              type="range"
              min="1"
              max="20"
              value={localDistance}
              onChange={(e) => setLocalDistance(Number(e.target.value))}
              className={styles.slider}
              aria-label="Filtrar por distância"
            />
          </div>

          {/* Avaliação */}
          <div className={styles.filterGroup}>
            <label className={styles.label}>Avaliação mínima</label>
            <div className={styles.ratingOptions}>
              {[0, 3, 3.5, 4, 4.5].map((rating) => (
                <label key={rating} className={styles.radio}>
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={localRating === rating}
                    onChange={() => setLocalRating(rating)}
                    aria-label={`Filtrar por ${rating} estrelas ou mais`}
                  />
                  <span>
                    {rating === 0 ? "Qualquer avaliação" : `${rating} ${rating === 1 ? "estrela" : "estrelas"} ou mais`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Botões de ação */}
          <div className={styles.actions}>
            <button className={styles.applyButton} onClick={handleApplyFilters} aria-label="Aplicar filtros">
              Aplicar filtros
            </button>
            <button className={styles.resetButton} onClick={handleReset} aria-label="Limpar filtros">
              Limpar tudo
            </button>
          </div>

          {/* Resultado */}
          <div className={styles.resultInfo}>
            <p>
              <strong>{totalResults}</strong> profissionais encontrados
            </p>
          </div>
        </div>
      )}
    </aside>
  )
}
