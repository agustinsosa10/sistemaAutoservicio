//funcion para obtener las ordenes pendientes (status: false)
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
