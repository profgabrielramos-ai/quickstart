# SherlockRamos Blog

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/profgabrielramos-ai/sherlockramosblog?utm_source=oss&utm_medium=github&utm_campaign=profgabrielramos-ai%2Fsherlockramosblog&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

Bem-vindo ao repositório do blog SherlockRamos! Este projeto é um blog pessoal construído com o [Hugo](https://gohugo.io/), um gerador de sites estáticos rápido e flexível, utilizando o tema **PaperMod**.

## Tecnologias Utilizadas

*   **Hugo**: Framework para geração de sites estáticos.
*   **PaperMod**: Tema rápido e responsivo para Hugo.
*   **Git**: Controle de versão.
*   **GitHub Pages**: Hospedagem do site.

## Funcionalidades

*   Blog com categorias e tags.
*   Página inicial personalizável com modo de perfil.
*   Estilização customizável via CSS.
*   Integração com ícones de redes sociais.
*   Suporte a Markdown para criação de conteúdo.

## Primeiros Passos

Para configurar e executar o projeto localmente, siga as instruções abaixo.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   **Git**: Para clonar o repositório.
*   **Hugo**: Versão `0.148.1` ou superior. Você pode instalá-lo via Homebrew (macOS) ou seguindo as instruções no [site oficial do Hugo](https://gohugo.io/installation/).
    ```bash
    brew install hugo
    ```
*   **Node.js e npm**: Necessário para o `dart-sass` (se o tema usar Sass para compilação de CSS).
    ```bash
    npm install -g dart-sass
    ```

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/profgabrielramos-ai/sherlockramosblog.git
    cd sherlockramosblog
    ```

2.  **Inicialize e atualize os submódulos do Git:**
    O tema PaperMod é incluído como um submódulo.
    ```bash
    git submodule update --init --recursive
    ```

### Desenvolvimento Local

Para visualizar o site em seu ambiente de desenvolvimento local:

```bash
hugo server -D
```

O site estará disponível em `http://localhost:1313/`. Quaisquer alterações nos arquivos de conteúdo ou configuração serão automaticamente recarregadas.

## Personalização

### Cores e Fontes

As principais personalizações de estilo são definidas em `assets/css/custom.css`.

1.  Abra o arquivo `assets/css/custom.css`.
2.  Edite as variáveis CSS no bloco `:root` para ajustar as cores e a família tipográfica:
    ```css
    :root {
      --primary: #131D4F;   /* Cor principal */
      --secondary: #EFE4D2; /* Cor secundária/fundo */
      --accent1: #254D70;   /* Cor de destaque 1 */
      --accent2: #954C2E;   /* Cor de destaque 2 */
      --font-family: 'Inter', 'Roboto', 'Montserrat', sans-serif; /* Fontes */
    }
    ```
3.  Salve o arquivo.

### Botões na Página Inicial

Os botões exibidos na página inicial (no modo de perfil) são configurados em `config.yaml`, dentro de `params.profileMode.buttons`.

Para adicionar ou modificar botões:

```yaml
params:
  profileMode:
    buttons:
      - name: "Twitter"
        url: "https://x.com/GatoMaconhado_"
      - name: "GitHub"
        url: "https://github.com/sherlockramos"
      - name: "Novo Botão"
        url: "https://example.com"
```

Cada item precisa de um `name` (texto do botão) e um `url` (link ao clicar).

### Ícones Sociais

Os ícones de redes sociais no rodapé são configurados em `config.yaml`, dentro de `params.socialIcons`.

```yaml
params:
  socialIcons:
    - name: "Twitter"
      url: "https://twitter.com/GatoMaconhado_"
    - name: "Instagram"
      url: "https://instagram.com/prof.gabrielramos"
    - name: "GitHub"
      url: "https://github.com/profgabrielramos-ai"
```

### Modo de Perfil

O `profileMode` é ativado em `config.yaml` e permite configurar o título, subtítulo, imagem e botões da página inicial.

```yaml
params:
  profileMode:
    enabled: true
    title: "SherlockRamos"
    subtitle: "Bem-vindo ao blog do Sherlock Ramos"
    imageUrl: "https://pbs.twimg.com/profile_images/1848910652808613888/r81-u5pP_400x400.jpg"
    imageTitle: "Foto de Sherlock Ramos"
    imageWidth: 120
    imageHeight: 120
    buttons:
      # ... seus botões aqui
```

## Gerenciamento de Conteúdo

### Criando Novas Postagens

Para criar uma nova postagem de blog, você pode usar o comando do Hugo com o arquétipo `post`:

```bash
hugo new content/blog/minha-nova-postagem.md
```

Isso criará um novo arquivo Markdown em `content/blog/minha-nova-postagem.md` com o front matter pré-definido pelo arquétipo `archetypes/post.md`.

### Estrutura de Conteúdo

As postagens são organizadas em `content/blog/`. Cada categoria de blog (ex: `inteligencia-artificial`) deve ter um arquivo `_index.md` dentro de seu diretório para que o Hugo a reconheça como uma seção.

## Implantação (Deployment)

Este projeto está configurado para ser implantado automaticamente no [GitHub Pages](https://pages.github.com/) através de um workflow do GitHub Actions (`.github/workflows/hugo.yaml`).

Qualquer push para o branch `master` acionará o processo de build e deploy. Certifique-se de que as configurações de ambiente do GitHub Pages permitam o deploy do branch `master`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs ou sugerir melhorias, e enviar Pull Requests com suas contribuições.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.