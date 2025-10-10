"use client"
import Image from "next/image"                  //optimizacion de imagenes en nextjs
import Link from "next/link"                    //componente para navegar entre paginas sin recargar la pagina
import { useParams } from 'next/navigation'     //hook para obtener los parametros de la url
import { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category  // category es un objeto que tiene la estructura de la tabla Category en la base de datos
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    const params = useParams<{category: string}>()

    return (
        <div
            className={`${category.slug === params.category ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`} //si la categoria de la url es igual a la categoria del icono, se le aplica un fondo diferente
        >
            <div className="w-16 h-16 relative">
                <Image
                    fill
                    src={`/icon_${category.slug}.svg`} // aca las imagenes las obtengo de la carpeta public
                    alt="Imagen Categoria"
                />
            </div>

            <Link
                className="text-xl font-bold"
                href={`/order/${category.slug}`} // aca navego a la pagina de la categoria
            >{category.name}</Link>
        </div>
    ) 
}
