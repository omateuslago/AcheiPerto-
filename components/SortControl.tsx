"use client"
import styles from "./SortControl.module.css"

interface SortControlProps {
  sortBy: string
  onSortChange: (sort: string) => void
}

export default function SortControl({ sortBy, onSortChange }: SortControlProps) {
  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort-select" className={styles.label}>
        Ordenar por:
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className={styles.select}
        aria-label="Ordenar resultados"
      >
        <option value="relevancia">Relevância</option>
        <option value="distancia">Distância (mais perto)</option>
        <option value="avaliacao">Avaliação (maior nota)</option>
        <option value="preco">Preço (menor)</option>
      </select>
    </div>
  )
}
