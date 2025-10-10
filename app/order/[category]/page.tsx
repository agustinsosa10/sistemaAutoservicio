//pagina principal donde se crean las ordenes

import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma" //importando la instancia de prisma reutiliza las conexiones existentes, en vez de crear una nueva conexion cada vez que se importa

async function getProducts(category: string) {
  const products = await prisma.product.findMany({ //trae todos los productos de la base de datos que pertenecen a la categoria que se pasa por parametro
    where: {
      category: {
        slug: category 
      }
    }
  })
  return products
}

export default async function OrderPage({params}: { params: { category : string }}) { //typescript asegura que params es un objeto que tiene una propiedad category de tipo string
  const products = await getProducts(params.category)
  
  return (
    <>
      <Heading>
        Elige y personaliza tu pedido a continuación
      </Heading>
    
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </>
  )
}

