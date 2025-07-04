# SherlockRamos Blog Template

Este projeto é um template base do blog **SherlockRamos** construído com [Hugo](https://gohugo.io/) e o tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod). Ele já está preparado para deploy via **GitHub Pages**.

## Estrutura do Site
- **Home**: página inicial em modo de perfil.
- **Blog** (`/posts/`): seção para publicações, com suporte às categorias:
  - *Inteligência Artificial*
  - *Ferramentas de Estudo*
  - *Abobrinha*
- **Contato** (`/contact/`): links para Twitter, Instagram e GitHub.

## Design e UX/UI
- Paleta de cores:
  - Primária: `#131D4F`
  - Secundárias: `#EFE4D2`, `#254D70`, `#131D4F`, `#954C2E`
- Fontes modernas (Inter/Roboto) e suporte a `MarkdownExtensions` habilitado em `config.yaml`.
- CSS modular em `assets/css/custom.css` para personalizações futuras.

## Deploy no GitHub Pages
O workflow em `.github/workflows/hugo.yaml` gera o site e publica automaticamente no GitHub Pages a cada push na branch `main`.

Para rodar localmente:
```bash
hugo server -D
```
