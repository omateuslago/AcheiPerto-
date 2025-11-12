"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./entrar.module.css"

export default function EntrarPage() {
  const [userType, setUserType] = useState<"cliente" | "profissional">("cliente")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErro("")

    // Validações
    if (!email) {
      setErro("Email é obrigatório")
      return
    }
    if (!senha) {
      setErro("Senha é obrigatória")
      return
    }
    if (senha.length < 6) {
      setErro("Senha deve ter no mínimo 6 caracteres")
      return
    }

    // Mock: Simular sucesso
    setSucesso(true)
    setTimeout(() => {
      alert(`Login bem-sucedido como ${userType}!`)
      setEmail("")
      setSenha("")
      setSucesso(false)
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>🔐</div>
          </div>

          <h1 className={styles.title}>Entrar no AcheiPerto</h1>

          {/* Toggle Cliente/Profissional */}
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${userType === "cliente" ? styles.active : ""}`}
              onClick={() => {
                setUserType("cliente")
                setErro("")
              }}
            >
              👤 Sou Cliente
            </button>
            <button
              className={`${styles.toggleBtn} ${userType === "profissional" ? styles.active : ""}`}
              onClick={() => {
                setUserType("profissional")
                setErro("")
              }}
            >
              🔧 Sou Profissional
            </button>
          </div>

          <p className={styles.subtitle}>
            {userType === "cliente"
              ? "Encontre profissionais verificados perto de você"
              : "Compartilhe seus serviços com clientes locais"}
          </p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                📧 Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className={styles.input}
              />
            </div>

            {/* Senha */}
            <div className={styles.formGroup}>
              <label htmlFor="senha" className={styles.label}>
                🔑 Senha
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
                className={styles.input}
              />
            </div>

            {/* Mensagem de erro */}
            {erro && <div className={styles.erro}>{erro}</div>}

            {/* Botão de envio */}
            <button type="submit" className={`${styles.submitBtn} ${sucesso ? styles.success : ""}`} disabled={sucesso}>
              {sucesso ? "✓ Entrando..." : "Entrar"}
            </button>
          </form>

          {/* Link para cadastro */}
          <p className={styles.linkWrapper}>
            Ainda não tem conta?{" "}
            <Link href="/cadastrar" className={styles.link}>
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
