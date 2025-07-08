# SherlockRamos

Este projeto é um blog feito com o [Hugo](https://gohugo.io/) utilizando o tema **PaperMod**.

## Como alterar cores e fontes

As principais personalizações de estilo ficam em `assets/css/custom.css`.

1. Abra o arquivo `assets/css/custom.css`.
2. Edite as variáveis CSS no bloco `:root`:
   - `--primary`, `--secondary`, `--accent1`, `--accent2`: controlam as cores do tema.
   - `--font-family`: define a família tipográfica usada em todo o site.
3. Salve o arquivo e gere o site com `hugo`.

## Como inserir botões

Os botões exibidos na página inicial estão configurados em `config.yaml`, dentro de `params.profileMode.buttons`.

Para adicionar um novo botão:

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

Após atualizar o arquivo execute `hugo` para gerar o site.

## Construindo o site

Para visualizar o resultado em ambiente local:

```bash
hugo server -D
```

O site estará disponível em `http://localhost:1313/`.
