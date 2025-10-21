//componente para navegar entre las paginas de los productos

import Link from "next/link";

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({ page, totalPages }: ProductsPaginationProps) {
    const pages = Array.from({length: totalPages}, (_, i) => i+ 1 ) //generamos el numero de paginas en base a totalpages



    return (
        <nav className='flex justify-center py-10'>
            {//boton anterior, solo se muestra si no estas en la primer pag
            }
            {page > 1 && (
                <Link
                    href={`/admin/products?page=${page - 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >&laquo;</Link>
            )}

            {pages.map(currentPage => (
                <Link
                    key={currentPage}
                    href={`/admin/products?page=${currentPage}`}
                    className={`${page === currentPage && 'font-black'}  bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >{currentPage}</Link>
            ))}

            {//boton siguiente, solo se muestra si no estas en la ultima pag
}   
            {page < totalPages && (
                <Link
                    href={`/admin/products?page=${page + 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >&raquo;</Link>
            )}

        </nav>
    )
}
