# Kiwi Messenger Web 🌱💬

Kiwi Messenger Web is a modern, open-source, web-based VoIP chat application built with **React**. It serves as the official frontend for **Project Civitas**, a federated communication platform powered by an **Elixir** backend.

## 🌍 About Project Civitas

**Project Civitas** is a decentralized, community-driven communication protocol and platform. It aims to provide open, privacy-focused alternatives to centralized messengers like WhatsApp, Discord, or Telegram.

Kiwi Messenger is one of its first client applications, currently supporting messaging over web with real-time communication, with future goals including voice/video chat and federation between independent servers.

## 🛠 Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: TailwindCSS
- **Authentication**: Google OAuth (via Supabase)
- **Backend**: Civitas (Elixir/Phoenix)
- **Database & Realtime**: Supabase (PostgreSQL + Realtime API)

## ✨ Features

- ⚡ Fast, responsive React-based UI
- 🧑‍💻 Google OAuth sign-in
- 📱 Mobile & desktop layout support
- 🔁 Real-time messaging via Supabase
- 🐣 Simple and clean open-source codebase
- 🪄 Designed with extensibility and federation in mind

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 22.16
- Supabase project or access to Civitas backend instance

### Installation

```bash
git clone https://github.com/your-org/kiwi-messenger-web.git
cd kiwi-messenger-web
npm install

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
