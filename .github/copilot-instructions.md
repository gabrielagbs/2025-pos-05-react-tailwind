# Copilot instructions for this repository

Resumo curto
- Repositório de atividade: notas para construir UI com React / Tailwind (veja [README.md](README.md#L1-L20)).
- Atualmente o repositório contém apenas documentação (README, LICENSE); não há `package.json`, `src/` nem arquivos de build detectáveis.

O que o agente deve saber primeiro
- Confirmar o tipo de projeto (Next.js vs React CRA) procurando por `package.json`, `next.config.js`, `tailwind.config.js`, `src/`, `app/`.
- Se esses arquivos estiverem ausentes, não assumir scaffold automático — pergunte ao mantenedor antes de criar um app. Indique opções (Next.js recomendado quando o README referencia Next).

Padrões e convenções detectáveis / recomendadas neste repositório
- Estrutura esperada para um exercício React+Tailwind:
  - `src/components/` para componentes reutilizáveis
  - `src/pages/` ou `app/` para rotas (Next.js)
  - `src/styles/globals.css` com as diretivas do Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`)
- Preferir classes utilitárias do Tailwind para layout/estilos; componentes pequenos e compostos em `components/`.

Fluxo de trabalho e comandos (quando solicitado pelo mantenedor)
- Para verificar o estado do repositório:
  - `git status` e `ls -la` na raiz
  - Procurar `package.json` com `git ls-files package.json` ou buscando arquivos por nome
- Comandos de scaffold (só executar após confirmação):
  - Scaffold Next + Tailwind (exemplo):
    ```bash
    npx create-next-app@latest my-app --typescript
    cd my-app
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
  - Instalar dependências em um projeto existente: `npm install` ou `pnpm install` dependendo do gerenciador escolhido.

Integrações e pontos de atenção
- O `README.md` referencia Next e Tailwind; priorize compatibilidade com essas ferramentas ([README.md](README.md#L1-L20)).
- Checar por ações de CI em `.github/workflows/` antes de alterar scripts/shells.

Quando modificar o repositório
- Evite criar grandes mudanças sem abrir uma PR e descrever o que foi feito (contexto de sala de aula esperado).
- Se for criar o projeto base (scaffold), inclua um pequeno `README.md` na raiz do novo app com instruções de como executar (`npm run dev`) e mencione qual gerenciador usar.

Exemplos específicos a citar em PRs
- “Adicionei `tailwind.config.js` e `postcss.config.js` e inicializei `src/styles/globals.css` com as diretivas do Tailwind.”
- “Criei `src/components/Header.tsx` e `src/pages/index.tsx` (Next.js) com classes utilitárias para layout responsivo.”

Perguntas recomendadas ao manteredor (exigir confirmação antes de scaffolding)
- Deseja Next.js (recomendado) ou Create React App?
- Prefere TypeScript ou JavaScript?
- Quer que eu gere um template com componentes iniciais (Header, Footer, Grid de cards)?

Seções não detectadas neste repo
- Não há testes, CI nem scripts de build detectados — peça instruções se o usuário quiser que o agente adicione CI/testes.

Feedback
- Se algo estiver incompleto ou você preferir outra estrutura, diga qual e eu atualizo estas instruções.
