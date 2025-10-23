<<<<<<< HEAD
//funcion para obtener las ordenes pendientes (status: false)
=======
//con esta funcion obtenemos las ordenes que estan pendientes
//asi las mostramos en la interfaz de orden pendientes

>>>>>>> 30e9a2101c80e099f20305e255c2e9be3f14bec0
import { prisma } from "@/src/lib/prisma"

export const dynamic = 'force-dynamic'

export async function GET() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
            orderProducts: {                //incluyo los productos de cada orden, por que no estan definidos en la base de datos
                include: {
                    product: true
                }
            }
        }
    })
    return Response.json(orders)
}
