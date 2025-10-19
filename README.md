# Futurist Vibe Portfolio

Um portfólio pessoal com tema futurista, desenvolvido para apresentar projetos, habilidades e informações de contato de forma interativa e moderna.

## Descrição

Este é um site de portfólio single-page application (SPA) construído com tecnologias modernas para oferecer uma experiência visual imersiva. Inclui animações suaves, design responsivo e seções dedicadas para herói, sobre, projetos, contato e muito mais.

## Funcionalidades

- **Design Futurista**: Tema escuro com elementos visuais inspirados em ficção científica.
- **Animações Interativas**: Utiliza GSAP para transições suaves e efeitos visuais.
- **Responsivo**: Otimizado para dispositivos móveis e desktop.
- **Seções Organizadas**:
  - Hero: Apresentação inicial com chamada para ação.
  - Sobre: Informações pessoais e habilidades.
  - Projetos: Galeria de projetos com links e descrições.
  - Contato: Formulário de contato e links para redes sociais.
- **Cursor Personalizado**: Interação visual aprimorada.
- **Transições de Página**: Animações entre seções.

## Tecnologias Utilizadas

- **Frontend**:
  - React 18
  - TypeScript
  - Vite (para build e desenvolvimento)
  - Tailwind CSS (para estilização)
  - shadcn/ui (componentes UI)
  - GSAP (animações)
  - PostCSS (processamento CSS)

- **Ferramentas**:
  - ESLint (linting)
  - Bun (gerenciador de pacotes alternativo)

## Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou bun

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/FelipeFrancoo/futurist-vibe-port.git
   cd futurist-vibe-port
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   bun install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   bun run dev
   ```

## Uso

- **Desenvolvimento**: Execute `npm run dev` para iniciar o servidor local.
- **Build**: Execute `npm run build` para gerar os arquivos de produção.
- **Preview**: Execute `npm run preview` para visualizar o build localmente.

## Estrutura do Projeto

```
futurist-vibe-port/
├── public/                 # Arquivos estáticos
│   ├── robots.txt
│   └── projects/           # Imagens de projetos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/             # Componentes shadcn/ui
│   │   └── ...             # Outros componentes (Hero, About, etc.)
│   ├── hooks/              # Hooks customizados
│   ├── lib/                # Utilitários
│   ├── pages/              # Páginas da aplicação
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── index.html              # HTML base
├── package.json            # Dependências e scripts
├── tailwind.config.ts      # Configuração Tailwind
├── vite.config.ts          # Configuração Vite
└── tsconfig.json           # Configuração TypeScript
```

## Autor

**Felipe Franco**

- GitHub: [FelipeFrancoo](https://github.com/FelipeFrancoo)
- LinkedIn: https://www.linkedin.com/in/felipe-franco-b33ba12b4
- Email: felipefrancolima12@gmail.com

---

Feito com ❤️ usando React e Vite.
