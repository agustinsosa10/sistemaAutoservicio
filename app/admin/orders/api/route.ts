//con esta funcion obtenemos las ordenes que estan pendientes
//asi las mostramos en la interfaz de orden pendientes

import { prisma } from "@/src/lib/prisma"

export const dynamic = 'force-dynamic'

export async function GET() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    return Response.json(orders)
}
