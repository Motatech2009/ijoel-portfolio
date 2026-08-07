# Portfólio do Ijoel

Landing page profissional do Ijoel para apresentar sites, catálogos digitais e sistemas sob medida.

## Rodar no computador

Requisitos: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Publicar no GitHub

1. Crie um repositório vazio no GitHub.
2. Extraia este projeto e abra a pasta no terminal.
3. Execute:

```bash
git init
git add .
git commit -m "Portfólio inicial"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Publicar na Vercel

1. Entre em `vercel.com` usando sua conta do GitHub.
2. Clique em **Add New > Project**.
3. Importe o repositório deste portfólio.
4. A Vercel reconhecerá o Next.js automaticamente.
5. Clique em **Deploy**.

Não é necessário configurar banco de dados nem variáveis de ambiente para esta versão.

## Onde editar

- Conteúdo principal: `app/page.tsx`
- Cores e estilos: `app/globals.css`
- Título e descrição do navegador: `app/layout.tsx`
- Imagens: `public/projetos` e `public/segmentos`

## Contato configurado

- WhatsApp: (43) 98828-1227
- Instagram: @ijoel_mota
