# 🚀 Guia Rápido - Animações GSAP

## Iniciar o Projeto

```bash
cd futurist-vibe-port
npm install
npm run dev
```

## 🎬 Animações Implementadas

### ✅ Componentes Animados:

1. **Hero Section**
   - Entrada sequencial do texto (fade + slide)
   - Linhas geométricas desenhando
   - Elemento flutuante com movimento perpétuo
   - Background shift sutil

2. **Header**
   - Efeito de scroll com encolhimento
   - Links com hover animado (levitação + glow)

3. **Projects**
   - Cards aparecem com scroll (ScrollTrigger)
   - Botões com glow effect no hover
   - Ícones com rotação suave

4. **About**
   - Texto desliza da esquerda
   - Skills surgem da direita com bounce
   - Cards de skills com hover animado

5. **Contact**
   - Formulário e conteúdo deslizam de lados opostos
   - Ícones sociais com scale + rotation
   - Botão de envio com pulse effect

6. **Footer**
   - Fade in ao entrar na viewport

7. **Cursor Customizado** ⭐
   - Ponto central prateado brilhante
   - Anel externo com lag elegante
   - Scale aumentado em elementos clicáveis
   - Visível contra fundo dark

## 🎨 Estilo Visual

### Paleta de Cores:
- Fundo: `#0d0d0d` (preto profundo)
- Texto: `#eaeaea` (branco gelo)
- Destaques: `#b8b8b8` (prata)
- Glow: `#00ffff` (ciano)

### Princípios:
- Minimalismo futurista
- Transições suaves (0.3s - 1s)
- Sem loops infinitos
- Performance 60fps

## 📁 Arquivos Principais

```
src/
├── components/
│   ├── Hero.tsx          → Animações de entrada hero
│   ├── Header.tsx        → Scroll + hover effects
│   ├── Projects.tsx      → ScrollTrigger cards
│   ├── About.tsx         → Animações bidirecionais
│   ├── Contact.tsx       → Form + social icons
│   ├── Footer.tsx        → Fade in simples
│   ├── CustomCursor.tsx  → Cursor personalizado
│   └── PageTransition.tsx → Transição global
├── hooks/
│   └── use-gsap.ts       → Hook + configs GSAP
└── index.css             → Estilos globais
```

## 🛠️ Customização Rápida

### Alterar Duração de Animação:

```typescript
// Em use-gsap.ts
export const gsapConfig = {
  duration: {
    fast: 0.3,    // ← Ajuste aqui
    normal: 0.6,  // ← Ajuste aqui
    slow: 1,      // ← Ajuste aqui
  },
};
```

### Alterar Easing:

```typescript
ease: gsapConfig.ease.smooth    // suave
ease: gsapConfig.ease.bounce    // com bounce
ease: gsapConfig.ease.elastic   // elástico
```

### Desabilitar Cursor Customizado:

Em `src/pages/Index.tsx`:
```tsx
// Remova estas linhas:
import CustomCursor from "@/components/CustomCursor";
<CustomCursor />

// E remova a classe:
className="... cursor-none"
```

## 🎯 Testes

### Verificar Performance:
1. Abra DevTools (F12)
2. Vá para Performance
3. Grave durante scroll
4. Verifique FPS (deve ser ~60)

### Verificar Animações:
- ✅ Hero carrega com sequência suave
- ✅ Header muda ao rolar
- ✅ Projects aparecem ao entrar na tela
- ✅ Hover nos botões mostra glow
- ✅ Cursor customizado segue o mouse

## 🐛 Problemas Comuns

**Animações não rodam?**
→ Verifique console do navegador

**Cursor não aparece?**
→ Verifique se a classe `cursor-none` está aplicada

**ScrollTrigger não funciona?**
→ Certifique-se que ScrollTrigger está registrado

**Performance ruim?**
→ Desabilite o cursor customizado temporariamente

## 📱 Responsividade

As animações são otimizadas para:
- ✅ Desktop (1920px+)
- ✅ Laptop (1440px)
- ✅ Tablet (768px)
- ✅ Mobile (375px+)

## 🎉 Resultado Final

Um portfólio minimalista, futurista e dark com:
- ✨ Animações sutis e elegantes
- 🚀 Performance otimizada (60fps)
- 🎨 Visual tecnológico e profissional
- 💫 Interações fluidas e responsivas

---

**Enjoy! 🎨🚀**
