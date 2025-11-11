import styles from "./HowItWorks.module.css"

const steps = [
  {
    number: "1",
    title: "Busque e Escolha",
    description: "Pesquise o serviço que precisa e escolha o profissional ideal",
    icon: "🔍",
  },
  {
    number: "2",
    title: "Converse e Combine",
    description: "Fale direto com o profissional e acerte os detalhes",
    icon: "💬",
  },
  {
    number: "3",
    title: "Avalie e Recomende",
    description: "Após o serviço, deixe sua avaliação e recomende a amigos",
    icon: "⭐",
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2>Como Funciona</h2>
        <p className={styles.subtitle}>Três passos simples para encontrar o profissional ideal</p>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.arrow}>→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
