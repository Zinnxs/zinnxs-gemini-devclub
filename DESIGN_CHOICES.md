# Decisões de Design - DevClub Landing Page

## 1. Identidade Visual e Moodboard
O desafio era criar algo "UAU" e disruptivo, mas sem perder a elegância (evitando neon agressivo ou um visual muito poluído). Para isso, adotei um estilo que mescla **Glassmorphism Escuro** com toques sutis de **Cyberpunk Clean**.
- **Fundo (Dark Mode):** Utilizei um tom bem escuro `#0B0E14`, que é mais confortável para a leitura do que um preto puro (`#000000`).
- **Cores de Destaque:** 
  - **Roxo (`#8B5CF6`) e Ciano (`#06B6D4`)** criam uma dualidade interessante. Eles representam tecnologia, criatividade e futuro.
  - **Dourado Pastel (`#F59E0B`)** foi usado pontualmente em CTAs primários ou badges para dar um ar de prestígio ("Premium").
- **Tipografia:** A fonte **Inter** foi escolhida por ser a melhor em legibilidade em telas. Usei pesos variados (Extrabold para títulos, criando contraste; Regular para corpo de texto, mantendo a sobriedade).

## 2. Animações e Fluidez (Framer Motion)
Para que a página fosse "disruptiva", o movimento era crucial.
- **Scroll Reveal (whileInView):** Cada seção, título e card aparece com um leve fade e movimento vertical. Isso cria ritmo à medida que o usuário desce a página.
- **Microinterações:**
  - O **cursor customizado** que aumenta de tamanho e fica transparente ao passar sobre botões e links.
  - Efeito "Ripple/Glow" no botão de CTA (Hero e final), fazendo o botão "pulsar" energia.
  - **Hover Effects:** Todos os cards (Sobre, Formações, Tutores) possuem um leve `translate-Y` e um aumento na sombra (Drop Shadow colorido) para dar profundidade (efeito 3D).

## 3. Estrutura e Componentização
### Hero Section
Em vez de utilizar uma biblioteca 3D pesada (Three.js) que poderia comprometer a performance no primeiro carregamento, criei uma ilusão de profundidade. Utilizei formas borradas (`blur-[120px]`) e máscaras CSS para criar um fundo "Aurora Boreal" reativo ao scroll. Do lado direito, um "Dashboard Flutuante" abstrato feito 100% com divs e CSS, animado no eixo Y, criando um visual técnico, moderno e muito leve de carregar.

### Histórias de Sucesso (Depoimentos)
Foi solicitado um scroll horizontal. Implementei um container com `snap-mandatory` para uma rolagem suave e precisa. O grande diferencial é a interação "Antes/Depois". Em vez de textos estáticos, criei um *toggle switch* (animado com `layoutId` e spring physics) que altera dinamicamente a foto (de cinza/informal para colorida/profissional), o cargo e o salário. Essa é a microinteração que gera o fator "UAU" por envolver o usuário ativamente.

### Nossos Tutores (Flip Cards)
Para não deixar a área de professores "feinha", utilizei perspectiva 3D do CSS (`transform-style: preserve-3d`). Ao passar o mouse, a foto do tutor gira no eixo Y revelando uma citação forte no verso. Isso incentiva a exploração e passa uma imagem de autoridade.

### Slider Infinito de Empresas
Uma fita infinita baseada em CSS Animations, mas controlada por React para as logos das empresas, começando em `grayscale` e revelando cor no hover, reforçando a autoridade sem roubar o foco principal.

## Conclusão
O código foi estruturado pensando em performance e manutenção. Não utilizamos templates prontos; cada borda e gradiente foi ajustado via classes utilitárias. A página equilibra o peso de ser institucional com a ousadia de uma marca que quer se destacar.
