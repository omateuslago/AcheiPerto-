import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerSection}>
            <div className={styles.logoContainer}>
            <img src="/AcheiPerto.png" alt="Logo Achei Perto" className={styles.logo} />
            </div>
            <p>Conectando clientes e profissionais verificados na sua região. Contato direto, sem intermediários,
              atendimento rápido.</p>
            <div className={styles.socialLinks}>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                💬
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
                📷
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#categorias">Sobre</a>
              </li>
              <li>
                <a href="#profissionais">Contato</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Serviço</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <p>Email: contato@acheiperto.com.br</p>
            <p>Tel: (11) 0000-0000</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 Achei Perto — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
