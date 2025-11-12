"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ReviewsList from "@/components/ReviewsList"
import styles from "./perfil.module.css"

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

export default function PerfilPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)

  const [profissional, setProfissional] = useState<Professional | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfissional = async () => {
      try {
        const response = await fetch("/mock/profissionais.json")
        const data = await response.json()
        const prof = data.find((p: Professional) => p.id === id)
        setProfissional(prof || null)
      } catch (error) {
        console.error("[v0] Erro ao carregar profissional:", error)
      } finally {
        setLoading(false)
      }
    }
    loadProfissional()
  }, [id])

  const renderStars = (nota: number) => {
    return (
      <div className={styles.stars} aria-label={`Avaliação: ${nota} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`${styles.star} ${i < Math.floor(nota) ? styles.filled : ""}`} aria-hidden="true">
            ★
          </span>
        ))}
        <span className={styles.rating}>{nota.toFixed(1)}</span>
      </div>
    )
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className={styles.perfil}>
          <div className={styles.container}>
            <p className={styles.loading}>Carregando perfil...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!profissional) {
    return (
      <>
        <Navbar />
        <main className={styles.perfil}>
          <div className={styles.container}>
            <div className={styles.errorContainer}>
              <h1>Profissional não encontrado</h1>
              <p>O profissional que você está procurando não existe.</p>
              <button onClick={() => router.back()} className={styles.backButton}>
                ← Voltar
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Olá ${profissional.nome}, encontrei seu perfil no AcheiPerto e gostaria de solicitar um orçamento.`,
  )
  const whatsappUrl = `https://wa.me/55${profissional.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`

  return (
    <>
      <Navbar />
      <main className={styles.perfil}>
        <div className={styles.container}>
          {/* Botão voltar */}
          <button onClick={() => router.back()} className={styles.backButton} aria-label="Voltar para busca">
            ← Voltar
          </button>

          {/* Cabeçalho do perfil */}
          <div className={styles.profileHeader}>
            <div className={styles.photoContainer}>
              <img
                src={profissional.foto || "/placeholder.svg"}
                alt={`Foto de ${profissional.nome}`}
                className={styles.photo}
              />
              <span className={styles.categoryBadge}>{profissional.categoria}</span>
            </div>

            <div className={styles.headerContent}>
              <h1 className={styles.name}>{profissional.nome}</h1>
              <p className={styles.description}>{profissional.descricao}</p>

              {renderStars(profissional.nota)}

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Preço estimado:</span>
                  <span className={styles.infoValue}>
                    R$ {profissional.preco_min.toLocaleString("pt-BR")} - R${" "}
                    {profissional.preco_max.toLocaleString("pt-BR")}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Distância:</span>
                  <span className={styles.infoValue}>{profissional.distancia_km.toFixed(1)} km</span>
                </div>
              </div>

              {/* Botões de ação */}
              <div className={styles.actionButtons}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                  aria-label={`Contactar ${profissional.nome} via WhatsApp`}
                >
                  💬 Conversar via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Seção de avaliações */}
          <section className={styles.reviewsSection}>
            <h2>Avaliações dos clientes</h2>
            <ReviewsList profissionalId={profissional.id} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
