"use client"
import styles from "./ProfessionalCard.module.css"

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

interface ProfessionalCardProps {
  profissional: Professional
}

export default function ProfessionalCard({ profissional }: ProfessionalCardProps) {
  const renderStars = (nota: number) => {
    return (
      <div className={styles.stars} aria-label={`Avaliação: ${nota} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`${styles.star} ${i < Math.floor(nota) ? styles.filled : ""}`} aria-hidden="true">
            ★
          </span>
        ))}
        <span className={styles.rating}>{nota}</span>
      </div>
    )
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={profissional.foto || "/placeholder.svg"}
          alt={`Foto de ${profissional.nome}`}
          className={styles.image}
        />
        <span className={styles.category}>{profissional.categoria}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{profissional.nome}</h3>
        <p className={styles.description}>{profissional.descricao}</p>

        {renderStars(profissional.nota)}

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Preço estimado:</span>
            <span className={styles.value}>
              R$ {profissional.preco_min} - R$ {profissional.preco_max}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Distância:</span>
            <span className={styles.value}>{profissional.distancia_km.toFixed(1)} km</span>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={`https://wa.me/55${profissional.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label={`Contactar ${profissional.nome} via WhatsApp`}
          >
            💬 WhatsApp
          </a>
          <button className={styles.profileButton} aria-label={`Ver perfil de ${profissional.nome}`}>
            Ver perfil
          </button>
        </div>
      </div>
    </article>
  )
}
