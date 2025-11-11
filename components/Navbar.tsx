"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
              <img src="/AcheiPerto.png" alt="Logo Achei Perto" className={styles.logoImage} />
        </Link>

        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
          ☰
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
          <a href="#categorias" onClick={() => setIsMenuOpen(false)}>
            Serviços
          </a>
          <a href="#profissionais" onClick={() => setIsMenuOpen(false)}>
            Profissionais
          </a>
          <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>
            Depoimentos
          </a>
          <a href="#login" className={styles.login} onClick={() => setIsMenuOpen(false)}>
            Entrar
          </a>
          <a href="#cadastro" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Cadastrar
          </a>
        </div>
      </div>
    </nav>
  )
}
