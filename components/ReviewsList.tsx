"use client"

import { useEffect, useState } from "react"
import styles from "./ReviewsList.module.css"

interface Review {
  profissionalId: number
  cliente: string
  nota: number
  comentario: string
  data: string
}

interface ReviewsListProps {
  profissionalId: number
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const days = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ]

  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} de ${month} de ${year}`
}

const renderStars = (nota: number) => {
  return (
    <div className={styles.stars} aria-label={`Avaliação: ${nota} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`${styles.star} ${i < nota ? styles.filled : ""}`} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReviewsList({ profissionalId }: ReviewsListProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("/mock/reviews.json")
        const data = await response.json()
        const filteredReviews = data.filter((review: Review) => review.profissionalId === profissionalId)
        setReviews(filteredReviews)
      } catch (error) {
        console.error("[v0] Erro ao carregar reviews:", error)
      } finally {
        setLoading(false)
      }
    }
    loadReviews()
  }, [profissionalId])

  if (loading) {
    return <p className={styles.loading}>Carregando avaliações...</p>
  }

  if (reviews.length === 0) {
    return <p className={styles.noReviews}>Ainda não há avaliações para este profissional.</p>
  }

  return (
    <div className={styles.reviewsList} role="region" aria-label="Avaliações dos clientes">
      {reviews.map((review, index) => (
        <article key={index} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.clientInfo}>
              <h3 className={styles.clientName}>{review.cliente}</h3>
              <p className={styles.reviewDate}>{formatDate(review.data)}</p>
            </div>
            {renderStars(review.nota)}
          </div>
          <p className={styles.reviewComment}>{review.comentario}</p>
        </article>
      ))}
    </div>
  )
}
