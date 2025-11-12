"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./cadastrar.module.css"

export default function CadastrarPage() {
  const [userType, setUserType] = useState<"cliente" | "profissional">("cliente")
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    profissao: "",
    descricao: "",
    cidade: "",
    faixaPreco: "",
  })
  const [erro, setErro] = useState("")
  const [sucesso, setSucesso] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErro("")

    // Validações básicas
    if (!formData.nome) {
      setErro("Nome é obrigatório")
      return
    }
    if (!formData.email) {
      setErro("Email é obrigatório")
      return
    }
    if (!formData.senha) {
      setErro("Senha é obrigatória")
      return
    }
    if (formData.senha.length < 6) {
      setErro("Senha deve ter no mínimo 6 caracteres")
      return
    }
    if (formData.senha !== formData.confirmarSenha) {
      setErro("Senhas não conferem")
      return
    }

    // Validações para profissional
    if (userType === "profissional") {
      if (!formData.profissao) {
        setErro("Profissão é obrigatória")
        return
      }
      if (!formData.cidade) {
        setErro("Cidade/Bairro é obrigatório")
        return
      }
      if (!formData.faixaPreco) {
        setErro("Faixa de preço é obrigatória")
        return
      }
    }

    // Mock: Simular sucesso
    setSucesso(true)
    setTimeout(() => {
      alert(`Cadastro bem-sucedido como ${userType}! Redirecionando para login...`)
      window.location.href = "/entrar"
    }, 1000)
  }

  const categorias = [
    "Encanador",
    "Eletricista",
    "Pedreiro",
    "Cuidador de Pets",
    "Informatica",
    "Carpinteiro",
    "Hairdryer",
    "Outro",
  ]

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>✨</div>
          </div>

          <h1 className={styles.title}>Criar Conta</h1>

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

          {/* Formulário */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Nome */}
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.label}>
                👤 Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                className={styles.input}
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                📧 Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                placeholder="Mínimo 6 caracteres"
                className={styles.input}
              />
            </div>

            {/* Confirmar Senha */}
            <div className={styles.formGroup}>
              <label htmlFor="confirmarSenha" className={styles.label}>
                🔑 Confirmar Senha
              </label>
              <input
                id="confirmarSenha"
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleInputChange}
                placeholder="Confirme sua senha"
                className={styles.input}
              />
            </div>

            {/* Campos específicos para profissional */}
            {userType === "profissional" && (
              <>
                {/* Profissão */}
                <div className={styles.formGroup}>
                  <label htmlFor="profissao" className={styles.label}>
                    🔧 Profissão / Categoria
                  </label>
                  <select
                    id="profissao"
                    name="profissao"
                    value={formData.profissao}
                    onChange={handleInputChange}
                    className={styles.input}
                  >
                    <option value="">Selecione sua profissão</option>
                    {categorias.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Descrição */}
                <div className={styles.formGroup}>
                  <label htmlFor="descricao" className={styles.label}>
                    📝 Descrição Breve
                  </label>
                  <textarea
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    placeholder="Fale um pouco sobre sua experiência e serviços..."
                    className={`${styles.input} ${styles.textarea}`}
                    rows={3}
                  />
                </div>

                {/* Cidade */}
                <div className={styles.formGroup}>
                  <label htmlFor="cidade" className={styles.label}>
                    📍 Cidade / Bairro
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder="Ex: São Paulo - Vila Madalena"
                    className={styles.input}
                  />
                </div>

                {/* Faixa de Preço */}
                <div className={styles.formGroup}>
                  <label htmlFor="faixaPreco" className={styles.label}>
                    💰 Faixa de Preço
                  </label>
                  <select
                    id="faixaPreco"
                    name="faixaPreco"
                    value={formData.faixaPreco}
                    onChange={handleInputChange}
                    className={styles.input}
                  >
                    <option value="">Selecione a faixa de preço</option>
                    <option value="ate-100">Até R$ 100</option>
                    <option value="100-250">R$ 100 - R$ 250</option>
                    <option value="250-500">R$ 250 - R$ 500</option>
                    <option value="500-1000">R$ 500 - R$ 1.000</option>
                    <option value="acima-1000">Acima de R$ 1.000</option>
                  </select>
                </div>

                {/* Nota sobre foto */}
                <div className={styles.infoBox}>
                  📸 Após cadastro, você poderá adicionar uma foto profissional de seu perfil
                </div>
              </>
            )}

            {/* Mensagem de erro */}
            {erro && <div className={styles.erro}>{erro}</div>}

            {/* Botão de envio */}
            <button type="submit" className={`${styles.submitBtn} ${sucesso ? styles.success : ""}`} disabled={sucesso}>
              {sucesso ? "✓ Cadastrando..." : "Cadastrar"}
            </button>
          </form>

          {/* Link para login */}
          <p className={styles.linkWrapper}>
            Já tem conta?{" "}
            <Link href="/entrar" className={styles.link}>
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
