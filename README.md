# Achei Perto - Página de Busca

Página de busca e exploração de profissionais para o aplicativo **Achei Perto**.

## Funcionalidades

- **Busca interativa**: Pesquise profissionais por serviço ou localização
- **Filtros avançados**: Categoria, faixa de preço, distância e avaliação
- **Ordenação**: Por relevância, distância, avaliação ou preço
- **Visualização em mapa**: Alternar entre lista e mapa de profissionais
- **Paginação**: Navegue pelos resultados
- **Acessibilidade**: ARIA labels e navegação por teclado
- **Design responsivo**: Adaptado para mobile e desktop

## Como rodar

\`\`\`bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
\`\`\`

Acesse `http://localhost:3000/buscar`

## Estrutura de arquivos

\`\`\`
src/
├── app/
│   └── buscar/
│       ├── page.tsx
│       └── buscar.module.css
├── components/
│   ├── SearchBar.tsx
│   ├── SearchBar.module.css
│   ├── FiltersPanel.tsx
│   ├── FiltersPanel.module.css
│   ├── ResultsList.tsx
│   ├── ResultsList.module.css
│   ├── ProfessionalCard.tsx
│   ├── ProfessionalCard.module.css
│   ├── MapToggle.tsx
│   ├── MapToggle.module.css
│   ├── SortControl.tsx
│   ├── SortControl.module.css
│   ├── NoResults.tsx
│   └── NoResults.module.css
└── mock/
    ├── profissionais.json
    └── categorias.json
\`\`\`

## Dados mock

Os dados estão em `public/mock/profissionais.json` e `public/mock/categorias.json`.

Cada profissional tem:
- `id`: Identificador único
- `nome`: Nome completo
- `categoria`: Categoria do serviço
- `descricao`: Descrição breve
- `foto`: URL da foto
- `preco_min` e `preco_max`: Faixa de preço
- `latitude` e `longitude`: Coordenadas para o mapa
- `nota`: Avaliação (0-5)
- `distancia_km`: Distância até o usuário
- `whatsapp`: Número para contato

## Futura integração com Supabase

Para conectar com um banco de dados real:

1. Configure uma tabela `profissionais` no Supabase
2. Substitua os dados mock pelo seguinte código:

\`\`\`tsx
// Exemplo de integração com Supabase
import { createBrowserClient } from "@supabase/ssr"

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const { data: profissionais } = await supabase
  .from("profissionais")
  .select("*")
\`\`\`

## Cores

- **Verde primário**: `#00b359`
- **Azul secundário**: `#0099cc`
- **Fundo**: `#ffffff`
- **Texto**: `#333333`

## SEO

- Título: "Buscar profissionais — Achei Perto"
- Meta description: Otimizada para português brasileiro
