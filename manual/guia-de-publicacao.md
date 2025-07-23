# Guia de Publicação do Blog SherlockRamos

Este manual fornece um passo a passo para criar, publicar e verificar novos posts no blog.

## 1. Estrutura de Diretórios e Arquivos

- **Posts:** Ficam em `content/blog/`.
- **Categorias:** Cada subdiretório dentro de `content/blog/` representa uma categoria (ex: `inteligencia-artificial`, `ferramentas-de-estudo`). Para criar uma nova categoria, basta criar um novo diretório.
- **Imagens:** Armazene as imagens relacionadas aos posts no diretório `static/images/blog/` (crie-o se não existir) para manter a organização.

## 2. Como Criar um Novo Post

### Nome do Arquivo

O nome do arquivo é fundamental e deve seguir o padrão:

`YYYY-MM-DD-titulo-do-post.md`

**Exemplo:** `2025-07-26-como-usar-o-chatgpt.md`

### Conteúdo e Metadados (Front Matter)

Use o arquétipo `post` como base. Você pode criar um novo arquivo e copiar o conteúdo abaixo ou usar o comando do Hugo: `hugo new blog/nome-da-categoria/YYYY-MM-DD-titulo.md`.

```markdown
+++
title = "Título do Post"
date = 2025-07-26T10:00:00-03:00
draft = false
summary = "Um resumo conciso e chamativo do seu post, com no máximo 1-2 frases. Este resumo aparece na listagem de posts."
tags = ["tag1", "tag2", "desenvolvimento"]
categories = ["Nome da Categoria"]
+++

## Comece a Escrever Aqui

O conteúdo do seu post em Markdown começa aqui.
```

**Preenchimento dos Campos:**

- **`title`**: O título principal do seu post.
- **`date`**: A data e hora da publicação no formato `YYYY-MM-DDTHH:MM:SS-03:00`.
- **`draft`**: Mude para `false` para que o post seja publicado. Se for `true`, ele não aparecerá no site final.
- **`summary`**: Um resumo curto que aparecerá na página inicial e nas listagens.
- **`tags`**: Etiquetas para o post (em letras minúsculas). Elas ajudam a encontrar conteúdo relacionado. Use tags específicas como `ia`, `carreira`, `python`, `estudo`.
- **`categories`**: A categoria principal do post. Deve corresponder ao nome do diretório onde o arquivo está (ex: `"Inteligência Artificial"`).

## 3. Processo de Deploy (Publicação)

O deploy é automatizado através do GitHub Actions.

1.  **Crie uma Nova Branch:** Antes de adicionar seu post, crie uma branch para trabalhar.
    ```bash
    git checkout -b minha-nova-publicacao
    ```
2.  **Adicione e Commite seus Arquivos:** Adicione o novo arquivo de post (e quaisquer imagens) e faça o commit.
    ```bash
    git add .
    git commit -m "feat: Adiciona novo post sobre Título do Post"
    ```
3.  **Envie para o GitHub:**
    ```bash
    git push origin minha-nova-publicacao
    ```
4.  **Crie um Pull Request (PR):**
    - Vá para o repositório no GitHub.
    - Você verá um aviso para criar um Pull Request da sua nova branch. Clique nele.
    - Revise as mudanças e crie o PR, direcionando-o para a branch `master`.
5.  **Merge do Pull Request:** Após a revisão (se necessária), faça o "merge" do Pull Request na branch `master`.

## 4. Verificando o Deploy

1.  **Aguarde a Action:** Assim que o PR for "mergeado", uma GitHub Action será iniciada automaticamente. Você pode acompanhar o progresso na aba "Actions" do seu repositório.
2.  **Verifique o Status:** Um ícone verde de "check" indica que o build e o deploy foram bem-sucedidos. Um "X" vermelho indica uma falha.
3.  **Acesse o Site:** Após a conclusão da Action, as alterações estarão no ar. Acesse a URL do blog para ver seu novo post: [https://profgabrielramos-ai.github.io/](https://profgabrielramos-ai.github.io/)

Se algo der errado, verifique o log da GitHub Action para identificar a causa do erro.
