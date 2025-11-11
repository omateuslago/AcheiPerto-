import styles from "./FeaturedProfessionals.module.css"

const professionals = [
  {
    id: 1,
    name: "Carlos Silva",
    profession: "Eletricista",
    distance: "2,3 km",
    price: "R$ 80 - R$ 150",
    rating: 4.8,
    image: "👨‍🔧",
  },
  {
    id: 2,
    name: "Maria Santos",
    profession: "Encanadora",
    distance: "1,5 km",
    price: "R$ 100 - R$ 200",
    rating: 4.9,
    image: "👩‍🔧",
  },
  {
    id: 3,
    name: "João Pereira",
    profession: "Pintor",
    distance: "3,1 km",
    price: "R$ 60 - R$ 120",
    rating: 4.7,
    image: "👨‍🎨",
  },
  {
    id: 4,
    name: "Ana Costa",
    profession: "Técnica em Informática",
    distance: "2,8 km",
    price: "R$ 90 - R$ 180",
    rating: 4.9,
    image: "👩‍💻",
  },
]

export default function FeaturedProfessionals() {
  return (
    <section className={styles.professionals} id="profissionais">
      <div className={styles.container}>
        <h2>Profissionais em Destaque</h2>
        <p className={styles.subtitle}>Conheça os melhores profissionais perto de você</p>

        <div className={styles.grid}>
          {professionals.map((prof) => (
            <div key={prof.id} className={styles.card}>
              <div className={styles.image}>{prof.image}</div>
              <h3>{prof.name}</h3>
              <p className={styles.profession}>{prof.profession}</p>

              <div className={styles.info}>
                <span className={styles.distance}>📍 {prof.distance}</span>
                <span className={styles.rating}>⭐ {prof.rating}</span>
              </div>

              <p className={styles.price}>{prof.price}</p>

              <a
                href="https://wa.me/00000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                💬 WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
