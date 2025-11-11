"use client"
import ProfessionalCard from "./ProfessionalCard"
import styles from "./ResultsList.module.css"

interface Professional {
  id: number
  nome: string
  categoria: string
  descricao: string
  foto: string
  preco_min: number
  preco_max: number
  nota: number
  distancia_km: number
  whatsapp: string
}

interface ResultsListProps {
  profissionais: Professional[]
}

export default function ResultsList({ profissionais }: ResultsListProps) {
  return (
    <div className={styles.resultsList} role="region" aria-label="Lista de profissionais encontrados">
      {profissionais.map((prof) => (
        <ProfessionalCard key={prof.id} profissional={prof} />
      ))}
    </div>
  )
}
