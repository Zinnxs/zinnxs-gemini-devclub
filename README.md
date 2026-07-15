# DevClub - Landing Page

Esta é a página institucional do DevClub, construída para causar impacto, mesclando ousadia visual com elegância e usabilidade.

## Tecnologias Utilizadas

- **React / Vite:** Framework principal (A solicitação original mencionou Next.js, mas o ambiente atual utiliza Vite para melhor performance em SPAs e edição em tempo real).
- **Tailwind CSS (v4):** Estilização utilitária, permitindo criar um visual único sem depender de templates prontos.
- **Framer Motion:** Biblioteca de animações responsável pelas microinterações, scroll reveal e efeitos de layout fluidos.
- **Lucide React:** Ícones modernos e consistentes.
- **React CountUp:** Animação dos contadores na seção de métricas.

## Como rodar localmente

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` (ou a porta indicada no terminal).

## Deploy na Vercel

1. Crie uma conta no [Vercel](https://vercel.com).
2. Conecte seu repositório do GitHub.
3. Importe o projeto no Vercel. O Vercel detectará automaticamente que é um projeto Vite/React.
4. Clique em "Deploy".

## Estrutura do Projeto

- `src/components/`: Contém todos os componentes da página (Header, Hero, About, etc.), criados do zero e totalmente componentizados.
- `src/lib/utils.ts`: Utilitário `cn` para mesclar classes do Tailwind de forma condicional.
- `src/index.css`: Arquivo CSS global configurando a paleta de cores (`--color-brand-*`), fonte Inter e scrollbar customizada.
- `DESIGN_CHOICES.md`: Explicação detalhada das decisões de design tomadas.
