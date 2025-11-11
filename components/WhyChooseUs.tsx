import styles from "./WhyChooseUs.module.css"

const reasons = [
  {
    icon: "📍",
    title: "Proximidade Real",
    description: "Encontre quem está realmente perto de você",
  },
  {
    icon: "💬",
    title: "Contato Direto",
    description: "Fale sem intermediários com o profissional",
  },
  {
    icon: "💰",
    title: "Sem Taxas",
    description: "Conexão livre e justa entre você e profissional",
  },
  {
    icon: "⭐",
    title: "Avaliações Reais",
    description: "Confiança em cada serviço contratado",
  },
]

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <h2>Por que escolher o Achei Perto?</h2>
        <p className={styles.subtitle}>Os melhores motivos para confiar em nossa plataforma</p>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
