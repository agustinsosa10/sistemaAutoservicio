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
