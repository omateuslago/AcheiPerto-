"use client"

import { useRouter } from "next/navigation"
import styles from "./ServiceCategories.module.css"

const categories = [
  { id: 1, icon: "⚡", name: "Elétrica", description: "Instalação e reparos elétricos" },
  { id: 2, icon: "🚰", name: "Encanamento", description: "Serviços de encanamento em geral" },
  { id: 3, icon: "🐾", name: "Pets", description: "Cuidados e serviços para animais de estimação" },
  { id: 4, icon: "🧹", name: "Limpeza", description: "Limpeza profissional de ambientes" },
  { id: 5, icon: "📦", name: "Montagem", description: "Montagem de móveis e estruturas" },
  { id: 6, icon: "💻", name: "Informática", description: "Suporte técnico e reparo" },
]

export default function ServiceCategories() {
  const router = useRouter()

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/buscar?categoria=${encodeURIComponent(categoryName)}`)
  }

  return (
    <section className={styles.categories} id="categorias">
      <div className={styles.container}>
        <h2>Categorias de Serviços</h2>
        <p className={styles.subtitle}>Encontre profissionais em várias áreas</p>

        <div className={styles.grid}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.card}
              onClick={() => handleCategoryClick(category.name)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.icon}>{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
