<<<<<<< HEAD
# 🛒 Full Stack E-commerce con Next.js, TypeScript y Prisma

Este proyecto es una aplicación *full-stack* construida con *Next.js* y *TypeScript, utilizando **Prisma ORM* para gestionar la base de datos *PostgreSQL* alojada en [Render](https://dashboard.render.com/).

---

## 🚀 Tecnologías principales

### 🧠 Next.js (App Router)

- Framework basado en *React* que permite combinar:
  - Renderizado del lado del servidor (SSR)
  - Generación de páginas estáticas (SSG)
  - Renderizado del cliente (CSR)
  - Backend integrado mediante rutas API (app/api)

### 🛡 TypeScript

Superconjunto de JavaScript que agrega *tipado estático* para evitar errores comunes.

🧰 Comandos útiles
Comando Descripción
npm run dev Ejecutar el servidor de desarrollo
npx prisma studio Abrir cliente web para ver la BD
npx prisma migrate dev Ejecutar migraciones
npx prisma db seed Cargar datos iniciales a la BD

🗄 Base de datos: PostgreSQL en Render
Base de datos relacional modelada con Prisma. Puedes ver la estructura con:

---

## 🧪 Cómo iniciar el proyecto

### 1. Clonar el repositorio

bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

### 2.Instalar dependencias

npm install

### 3.Configurar las variables de entorno

DATABASE_URL="postgresql://usuario:contraseña@host:puerto/nombre_basedatos"

### 4.Ejecutar las migraciones de Prisma

npx prisma migrate dev

### 5.(Opcional) Cargar datos iniciales (seed)

npx prisma db seed

### 6. Levantar el servidor de desarrollo

npm run dev

### 7. Ingresar a la interfaz de la base de datos ejecutar

npx prisma studio

### 7. Para ingresar al panel de administracion

usuario : admin
password : password

=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> 14cbf90 (subiendo proyecto)
