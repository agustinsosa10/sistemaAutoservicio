import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
    })
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


//Este código configura una instancia única de Prisma Client para evitar crear múltiples conexiones a la base de datos, eso evita que consuma memoria innecesaria y mejora el rendimiento de la aplicación.