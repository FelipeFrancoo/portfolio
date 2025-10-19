# Documentação das Animações GSAP

## 🎨 Visão Geral

Este projeto utiliza **GSAP (GreenSock Animation Platform)** para criar animações suaves, elegantes e performáticas, mantendo o estilo minimalista e futurista dark.

## 📦 Instalação

```bash
npm install gsap
```

## 🎯 Componentes Animados

### 1. **Hero Section**
**Arquivo:** `src/components/Hero.tsx`

#### Animações Implementadas:
- ✨ **Título Principal**: Fade in + slide up suave com duração de 1s
- 📝 **Subtítulo**: Fade in + slide up com delay de 0.4s para criar ritmo
- 🔘 **Botão CTA**: Fade in + scale com delay de 0.3s
- 📏 **Linhas Geométricas**: Animação de largura (scaleX) com efeito de desenho
- ⬇️ **Elemento Flutuante**: Fade in + movimento perpétuo de flutuação (yoyo)
- 🌊 **Background**: Movimento sutil de background position (20s loop)

#### Configurações:
```typescript
duration: 1s (slow)
ease: "power2.out"
stagger: 0.1s - 0.4s entre elementos
```

---

### 2. **Header/Navegação**
**Arquivo:** `src/components/Header.tsx`

#### Animações Implementadas:
- 📜 **Scroll Effect**: Header encolhe e ganha fundo translúcido ao rolar
  - Padding: 20px → 12px
  - Background: transparent → rgba(13,13,13,0.8)
  - Duração: 0.3s
  
- 🔗 **Links Hover**: 
  - Movimento Y: 0 → -2px
  - Cor: cinza → branco
  - Underline: scale-x de 0 → 1
  - Duração: 0.3s

---

### 3. **Projects Section**
**Arquivo:** `src/components/Projects.tsx`

#### Animações Implementadas:
- 📋 **Título da Seção**: Fade in + slide up com ScrollTrigger
- 🎴 **Cards de Projetos**: 
  - Fade in + translateY + scale (0.95 → 1)
  - Stagger de 0.1s entre cards
  - Trigger: quando entra 85% da viewport
  
- 🔘 **Botões Interativos**:
  - Hover: Glow effect ciano suave
  - Ícones: Scale + rotation leve (5°)
  - Duração: 0.3s

#### ScrollTrigger Config:
```typescript
start: "top 85%"
toggleActions: "play none none none"
```

---

### 4. **About Section**
**Arquivo:** `src/components/About.tsx`

#### Animações Implementadas:
- 📖 **Título**: Fade in + slide from left (-50px)
- 📝 **Texto Descritivo**: Fade in + slide from left (-30px)
- 🎯 **Título Skills**: Fade in + slide from right (30px)
- 🃏 **Cards de Skills**:
  - Fade in + scale (0.9 → 1) + translateY
  - Stagger de 0.08s
  - Ease: "back.out(1.7)" para efeito bounce elegante
  
- 🎪 **Hover em Skills**:
  - Card: translateY -5px + scale 1.05
  - Ícone: rotation 5° + scale 1.1

---

### 5. **Contact Section**
**Arquivo:** `src/components/Contact.tsx`

#### Animações Implementadas:
- 🏷️ **Título**: Fade in + translateY
- 📄 **Conteúdo Esquerdo**: Fade in + translateX from left
- 📋 **Formulário**: Fade in + translateX from right
- 🔗 **Ícones Sociais**:
  - Stagger animation (0.1s delay)
  - Scale from 0 com bounce effect
  
- 🎭 **Hover Ícones Sociais**:
  - Container: scale 1.1 + rotation 5°
  - SVG: counter-rotation -5°
  
- ✉️ **Botão Enviar**: Scale pulse ao clicar (0.95 → 1)

---

### 6. **Footer**
**Arquivo:** `src/components/Footer.tsx`

#### Animações Implementadas:
- Fade in + translateY ao entrar na viewport
- Trigger: quando topo atinge 90% da viewport

---

### 7. **Page Transition**
**Arquivo:** `src/components/PageTransition.tsx`

#### Funcionalidade:
- Fade in global da página (0.6s)
- Aplicado ao wrapper principal

---

### 8. **Custom Cursor** ✨
**Arquivo:** `src/components/CustomCursor.tsx`

#### Características:
- 🎯 **Ponto Central**: Pequeno círculo prateado (12px) com gradiente
  - Segue o mouse imediatamente (0.05s)
  - Glow efeito sutil com box-shadow
  - Scale 0.5x ao hover em elementos clicáveis
  
- 🔵 **Anel Externo**: Border prateada (40px)
  - Segue com lag elegante (0.5s) - efeito traço
  - Gradiente radial sutil no centro
  - Scale 2x ao hover
  
- ⚡ **Interatividade Refinada**: 
  - Detecta botões, links, inputs e elementos clicáveis
  - Scale diferenciado para cada elemento
  - Transições suaves (0.3s)
  
- 🎨 **Estilo**: Prateado brilhante contra fundo dark
  - Sem mix-blend-mode para máxima visibilidade
  - Efeito de profundidade com múltiplas camadas

#### Easing:
- Ponto: 0.05s com "power2.out" (instant follow)
- Anel: 0.5s com "power2.out" (lag intencional elegante)
- Hover: 0.3s com "power2.out"

---

## 🛠️ Hook Customizado

### `use-gsap.ts`
**Arquivo:** `src/hooks/use-gsap.ts`

Exporta:
- `gsap`: Instância principal do GSAP
- `ScrollTrigger`: Plugin para animações on-scroll
- `useGSAP`: Hook React para gerenciar contexto de animações
- `gsapConfig`: Configurações padrão (easings, durações)

#### Configurações Padrão:
```typescript
ease: {
  smooth: 'power2.out',
  elastic: 'elastic.out(1, 0.3)',
  bounce: 'back.out(1.7)',
}

duration: {
  fast: 0.3s,
  normal: 0.6s,
  slow: 1s,
}
```

---

## 🎨 Paleta de Cores

### Cores Principais (HSL):
- **Background**: `0 0% 5%` (#0d0d0d)
- **Foreground**: `0 0% 94%` (#eaeaea)
- **Silver**: `0 0% 72%` (#b8b8b8)
- **Graphite**: `0 0% 25%` (#3a3a3a)
- **Card**: `0 0% 8%` (#141414)
- **Border**: `0 0% 16%` (#2b2b2b)

### Efeitos de Glow:
- **Primary Glow**: `180 100% 50%` (Ciano)
- **Box Shadow Glow**: `0 0 20px rgba(184,184,184,0.2)`

---

## ⚡ Performance

### Otimizações Aplicadas:
1. ✅ **will-change** implícito via GSAP
2. ✅ **transform** e **opacity** (GPU-accelerated)
3. ✅ **ScrollTrigger** com throttling automático
4. ✅ Cleanup via `gsap.context()` para prevenir memory leaks
5. ✅ Animações rodam apenas uma vez (toggleActions: "play none none none")
6. ✅ Target: 60fps em todos os dispositivos

### Testes de Performance:
- Lighthouse Score: 90+ esperado
- FPS durante scroll: 60fps
- Tempo de carregamento das animações: < 100ms

---

## 🎯 Princípios de Design

### Filosofia das Animações:
1. **Subtileza**: Movimentos discretos e elegantes
2. **Fluidez**: Transições suaves com easings naturais
3. **Propósito**: Cada animação guia a atenção do usuário
4. **Minimalismo**: Sem loops infinitos ou distrações
5. **Responsividade**: Animações se adaptam ao scroll e interação

### Durações Recomendadas:
- **Micro-interações**: 0.2s - 0.3s (hover, clicks)
- **Transições médias**: 0.6s (entrada de componentes)
- **Animações longas**: 1s - 1.2s (hero, títulos)

---

## 🚀 Como Usar

### Adicionar Nova Animação:

```typescript
import { useEffect, useRef } from "react";
import { gsap, gsapConfig } from "@/hooks/use-gsap";

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        y: 30,
        duration: gsapConfig.duration.normal,
        ease: gsapConfig.ease.smooth,
      });
    }, elementRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return <div ref={elementRef}>Conteúdo</div>;
};
```

### Com ScrollTrigger:

```typescript
gsap.from(element, {
  opacity: 0,
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none",
  },
});
```

---

## 📚 Recursos

- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer)

---

## 🐛 Troubleshooting

### Problema: Animação não roda
**Solução**: Verificar se o elemento tem `ref` e se está montado no DOM

### Problema: ScrollTrigger não funciona
**Solução**: Importar e registrar o plugin:
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Problema: Memory leaks
**Solução**: Sempre usar `gsap.context()` e cleanup no useEffect:
```typescript
return () => ctx.revert();
```

---

**Desenvolvido com ❤️ usando GSAP + React + TypeScript**
