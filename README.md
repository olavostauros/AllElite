# AllElite — Manual de Identidade Visual

Este repositório contém o **Manual de Identidade Visual da marca AllElite**, publicado como site estático gerado com [Astro](https://astro.build).

## Propósito

O manual documenta os elementos visuais que compõem a identidade da AllElite: paleta de cores, tipografia, logo e suas variações, tom de voz, e diretrizes de uso. Destina-se a designers, desenvolvedores e agentes automatizados que precisam aplicar ou verificar a identidade visual da marca com consistência.

## Estrutura do projeto

```text
/
├── public/          # Assets estáticos (fontes, imagens, ícones)
├── src/
│   ├── components/  # Componentes Astro reutilizáveis
│   └── pages/       # Rotas do site (arquivo .astro ou .md = uma página)
├── astro.config.mjs # Configuração do Astro
└── package.json
```

## Comandos

Todos os comandos são executados na raiz do projeto:

| Comando             | Ação                                          |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Instala as dependências                       |
| `npm run dev`       | Inicia o servidor local em `localhost:4321`   |
| `npm run build`     | Gera o site de produção em `./dist/`          |
| `npm run preview`   | Pré-visualiza o build antes de publicar       |
| `npm run astro ...` | Executa comandos do CLI Astro                 |

Requer Node >= 22.12.0.

## Para agentes

- Stack: Astro + TypeScript (strict mode). Sem framework de UI integrado por padrão.
- Roteamento baseado em arquivos em `src/pages/`.
- Assets estáticos em `public/`.
- Conteúdo do manual em `src/pages/` e componentes em `src/components/`.
- Consulte `CLAUDE.md` para instruções de desenvolvimento e arquitetura.
