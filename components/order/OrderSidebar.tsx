//barra lateral de las ordenes en la interfaz de los clientes

import { prisma } from '@/src/lib/prisma' //importando la instancia de prisma reutiliza las conexiones existentes, en vez de crear una nueva conexion cada vez que se importa
import CategoryIcon from '../ui/CategoryIcon'
import Logo from '../ui/Logo'

async function getCategories() {
  return await prisma.category.findMany() //trae todas las categorias de la base de datos
}

export default async function OrderSidebar() {
  const categories = await getCategories()
  
  return (
    <aside className="md:w-72 md:h-screen bg-white">
        <Logo />
        <nav className='mt-10'>
            {categories.map(category => (
              <CategoryIcon 
                key={category.id}
                category={category}
              />
            ))}
        </nav>
    </aside>
  )
}
