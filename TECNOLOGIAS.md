# 🛠️ Tecnologias Utilizadas - AcheiPerto

## Front-end

### Core
- **Next.js 16.0.0** - Framework React com SSR e rotas
- **React 19.2.0** - Biblioteca para interfaces
- **TypeScript 5** - Tipagem estática

### Estilização
- **CSS Modules** - Estilos isolados por componente
- **Tailwind CSS 4.1.9** - Framework CSS utilitário
- **Tailwind Animate** - Animações CSS

### Componentes UI
- **Radix UI** - Componentes acessíveis (accordion, dialog, dropdown, etc)
- **Lucide React** - Ícones
- **Shadcn/ui** - Sistema de componentes

### Mapas
- **Leaflet 1.9.4** - Biblioteca de mapas open-source
- **React Leaflet 5.0.0** - Integração Leaflet + React

### Formulários
- **React Hook Form 7.60.0** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas

## Back-end

### API Routes (Next.js)
- **Node.js** - Runtime JavaScript
- **File System (fs)** - Leitura/escrita de arquivos
- **API REST** - Endpoints HTTP

### Endpoints criados:
- `GET /api/profissionais` - Lista profissionais
- `GET /api/categorias` - Lista categorias
- `GET /api/views` - Visualizações totais
- `POST /api/views` - Registra visualização

## Dados

### Atual
- **JSON estático** - Mock data em `/public/mock/`
- **File-based storage** - Contador de views em `/data/`

### Futuro (planejado)
- **Supabase** - Banco de dados PostgreSQL
- **Supabase Auth** - Autenticação

## Build & Deploy

- **Turbopack** - Bundler rápido do Next.js
- **PostCSS** - Processador CSS
- **Autoprefixer** - Prefixos CSS automáticos

## Desenvolvimento

- **npm** - Gerenciador de pacotes
- **ESLint** - Linter JavaScript/TypeScript

## Estrutura do Projeto

```
acheiperto/
├── app/                    # Páginas e rotas
│   ├── api/               # API Routes (back-end)
│   ├── buscar/            # Página de busca
│   ├── cadastrar/         # Página de cadastro
│   ├── entrar/            # Página de login
│   └── perfil/[id]/       # Perfil dinâmico
├── components/            # Componentes React
│   └── ui/               # Componentes Shadcn/ui
├── public/               # Arquivos estáticos
│   └── mock/            # Dados mock (JSON)
├── data/                # Dados persistidos (views)
└── lib/                 # Utilitários
```

## Características

✅ **100% TypeScript** - Type-safe  
✅ **Responsivo** - Mobile-first  
✅ **Acessível** - ARIA labels  
✅ **SEO otimizado** - Meta tags  
✅ **Performance** - Turbopack + React 19  
✅ **Mapas interativos** - Leaflet gratuito  
✅ **API própria** - Back-end integrado  

## Comandos

```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm run start    # Servidor produção
npm run lint     # Verificar código
```
