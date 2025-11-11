"use client"
import styles from "./NoResults.module.css"

interface NoResultsProps {
  onReset: () => void
}

export default function NoResults({ onReset }: NoResultsProps) {
  return (
    <div className={styles.noResults}>
      <div className={styles.icon}>🔍</div>
      <h3>Nenhum profissional encontrado</h3>
      <p>Tente ajustar seus filtros ou ampliar o raio de busca</p>
      <button className={styles.button} onClick={onReset} aria-label="Limpar filtros">
        Limpar filtros
      </button>
    </div>
  )
}
