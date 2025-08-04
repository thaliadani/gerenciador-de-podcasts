# 🎙️ Podcast Manager API
Uma API Node.js com TypeScript para gerenciar episódios de podcasts em vídeo 📹

## 🌟 Funcionalidades
- 🗂️ Listar episódios de podcasts organizados por categorias

- 🔍 Filtrar episódios por nome do podcast

- 📂 Gerenciar diferentes sessões/categorias de podcasts

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
- GET /podcasts - Lista todos os episódios
- GET /podcasts?category=<categoria> - Filtra por categoria
- GET /podcasts?name=<nome> - Filtra por nome do podcast

## 🏗️ Como Executar
- Clone o repositório

- Instale as dependências: npm install

- Inicie o servidor: npm start

- Acesse http://localhost:3000
