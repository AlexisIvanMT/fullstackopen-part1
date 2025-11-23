# Parte 1: Introducción a React

Este directorio contiene mis soluciones a los ejercicios de la **Parte 1** del curso [Full Stack Open](https://fullstackopen.com) de la Universidad de Helsinki. En esta sección se exploran los fundamentos del desarrollo con **React**: creación de componentes, gestión de estado, manejo de eventos y buenas prácticas de estructura del código.

## 📂 Estructura del directorio

Los ejercicios están organizados en carpetas por bloques temáticos:

- **`1.1-1.5`**: Ejercicios 1 a 5  
  → Introducción a React, componentes funcionales y uso de `props`.

- **`1.6-1.11`**: Ejercicios 6 a 11  
  → Manejo de estado con `useState`, eventos, renderizado condicional y listas con `key`.

- **`1.12-1.15`**: Ejercicios 12 a 15  
  →validación básica y refactorización de componentes.

> ⚠️ Estas carpetas **no son proyectos de React completos**. Solo contienen los archivos fuente relevantes para cada bloque.  
> El proyecto base (con `vite.config.js`, `package.json`, etc.) se usó localmente y no se incluye en el repositorio.


## ▶️ Cómo ejecutar

1. Crea un proyecto con vite de react.
2. Sustituye el archivo App.js en el proyeto por cada una de las carpetas del repositorio.
3. Instala dependencias con i install
4. Corre el proyecto con npm run dev # o npm start, según la configuración

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
