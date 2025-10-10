//funcion para subir todos los datos a la base de datos

import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() //instancia para poder consultar a la base de datos

async function main() {
    try {
        await prisma.category.createMany({          //inserta todas las categorias en la tabla Category
            data: categories
        })
        await prisma.product.createMany({           //inserta todos los productos en la tabla Product
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

main()
    .then( async () => {
        await prisma.$disconnect() //desconecta la instancia de prisma cuando termina de subir los datos
    })
    .catch( async (e) => {  //por si hay algun error al ejecutar la funcion main
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })