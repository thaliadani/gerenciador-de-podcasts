# 🎙️ Podcast Manager API
Uma API Node.js com TypeScript para gerenciar episódios de podcasts em vídeo 📹

## 🌟 Funcionalidades
- 🗂️ Listar episódios de podcasts

- 🔍 Filtrar episódios por nome do podcast

## 📌 Exemplos de Categorias
- 🏥 Saúde

- 💪 Fitness

- 🧠 Mentalidade

- 😂 Humor

## 🛠️ Tecnologias Utilizadas
- Node.js

- TypeScript

- HTTP Module

## 📦 Modelo de Dados

```typescript
interface PodcastModel {
    podcastName: string;    // Nome do podcast
    episode: string;       // Nome/título do episódio
    videoId: string;       // ID do vídeo (Youtube/Vimeo/etc)
    categories: string[];  // Categorias do episódio
}
```
## 🚀 Rotas da API
- GET /api/list - Lista todos os episódios
- GET /api/episode - Filtra por nome do podcast

## 🏗️ Como Executar
- Clone o repositório

- Instale as dependências: npm install

- Inicie o servidor: npm start

- Acesse http://localhost:3333
