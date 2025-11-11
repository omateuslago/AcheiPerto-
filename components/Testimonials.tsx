import styles from "./Testimonials.module.css"

const testimonials = [
  {
    id: 1,
    name: "Fernando Oliveira",
    rating: 5,
    comment: "Encontrei um eletricista excelente em menos de uma hora. Muito prático e eficiente!",
    avatar: "👨",
  },
  {
    id: 2,
    name: "Juliana Costa",
    rating: 5,
    comment: "Adorei o atendimento! O encanador chegou no horário combinado e fez um ótimo trabalho.",
    avatar: "👩",
  },
  {
    id: 3,
    name: "Roberto Silva",
    rating: 4,
    comment: "Plataforma bem intuitiva. Consegui pintar minha casa com um profissional de confiança.",
    avatar: "👨",
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="depoimentos">
      <div className={styles.container}>
        <h2>Depoimentos de Clientes</h2>
        <p className={styles.subtitle}>Veja o que nossos clientes falam sobre o Achei Perto</p>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.header}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <div className={styles.rating}>{"⭐".repeat(testimonial.rating)}</div>
                </div>
              </div>
              <p className={styles.comment}>"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
