# 🛒 Sistema de Autoservicio

Sistema de Comanda para establecimientos gastronómicos, desarrollado como parte de la Práctica Profesional Supervisada de la carrera Programador Universitario de Sistemas (UNVIME).
Este proyecto fue implementado utilizando tecnologías modernas como Next.js, React, TypeScript, Prisma, NextAuth.js, SWR, Zod, Cloudinary, React Toastify, Tailwind CSS y desplegado en Vercel.
El sistema permite gestionar pedidos de manera digital a través de tres interfaces principales —cliente, cocina/administración y pedidos listos— con el objetivo de optimizar la comunicación interna, reducir errores y mejorar la experiencia del usuario dentro del entorno gastronómico.


---

## 🛠 Tecnologías utilizadas

Next.js (App Router): para SSR (server side rendering), SSG (generación estática) y rutas API integradas.

TypeScript: para asegurar tipado estático que ayuda a evitar errores comunes.

Prisma: ORM para definir el esquema de base de datos, migraciones y consultas seguras.

PostgreSQL: solución de base de datos relacional.

Tailwind CSS: para estilos y diseño responsivo.

Otras dependencias (según package.json) incluyen utilidades de configuración, scripts, etc.

---

## 🧰 Comandos útiles

npm run dev --> Ejecutar el servidor de desarrollo

npx prisma studio --> Abrir cliente web para ver la BD

npx prisma migrate dev --> Ejecutar migraciones

npx prisma db seed --> Cargar datos iniciales a la BD

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

### 8. Para ingresar al panel de administracion

usuario : admin
password : password

---

## 🧩 Funcionalidades principales

Interfaz pública para ver productos, agregarlos al carrito y realizar compras.

Panel de administración donde se puede crear, editar y eliminar productos.

Gestión de usuarios (login de administrador).

Interfaz para ver pedidos listos

---

## 🧱 Estructura del Proyecto
```
app/                 # Archivos de Next.js (páginas, layouts, rutas API)
components/          # Componentes reutilizables de UI
prisma/              # Esquema, migraciones y seeds
public/              # Archivos estáticos (imágenes, fuentes)
src/                 # Código fuente adicional (si aplica)
.env                 # Variables de entorno
next.config.mjs      # Configuración de Next.js
tailwind.config.ts   # Configuración de Tailwind CSS
tsconfig.json        # Configuración de TypeScript
package.json         # Dependencias y scripts
```
---

### 💡 Características Técnicas Destacadas

#### 🧩 Arquitectura full-stack en un único proyecto  
Frontend + backend en Next.js.

#### ✅ Validaciones y control de estado en el frontend  

#### 🧱 ORM moderno con Prisma  
Esquema limpio y migraciones controladas.

#### 🎨 Diseño responsivo y minimalista  
Usando Tailwind CSS.

#### 🔔 Feedback visual  
Mediante Toast Notifications.


