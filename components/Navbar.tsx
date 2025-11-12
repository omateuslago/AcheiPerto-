"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AcheiPerto-g354rkD9KhhdzSDRCnv2ndVkc6D2Jv.png"
            alt="AcheiPerto - Encontre profissionais perto de você"
            width={180}
            height={50}
            priority
            style={{ height: "auto" }}
          />
        </Link>

        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
          ☰
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Início
          </Link>
          <Link href="/#categorias" onClick={() => setIsMenuOpen(false)}>
            Serviços
          </Link>
          <Link href="/#profissionais" onClick={() => setIsMenuOpen(false)}>
            Profissionais
          </Link>
          <Link href="/#depoimentos" onClick={() => setIsMenuOpen(false)}>
            Depoimentos
          </Link>
          <Link href="/entrar" className={styles.login} onClick={() => setIsMenuOpen(false)}>
            Entrar
          </Link>
          <Link href="/cadastrar" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Cadastrar
          </Link>
        </div>
      </div>
    </nav>
  )
}
