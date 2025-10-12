// funciones para carrito de compras

import { create } from 'zustand'
import { OrderItem } from './types'
import { Product } from '@prisma/client'

// defino la estructura del store
interface Store {
    order: OrderItem[]
    addToOrder: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    removeItem: (id: Product['id']) => void
    clearOrder: () => void
}

// creo el carrito de compras con zustand
export const useStore = create<Store>((set, get) => ({
    order: [], //inicializo el carrito vacio

    //funcion para agregar un producto al carrito
    addToOrder: (product) => {
        const {categoryId, image, ...data} = product
        let order : OrderItem[] = []

        //si el producto ya esta en el carrito, aumento la cantidad y el subtotal
        //con este condicional evitamos agregar productos duplicados al carrito
        if(get().order.find( item => item.id === product.id)) {
            order = get().order.map( item => item.id === product.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item )

        //si el producto no esta en el carrito, lo agrego con cantidad 1 y subtotal igual al precio
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }
        set(() => ({
            order
        }))
    },

    //aumento la cantidad de un producto en el carrito
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map( item => item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item )
        }))
    },

    //disminuyo la cantidad de un producto en el carrito
    decreaseQuantity: (id) => {
        const order = get().order.map( item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1)
        } : item )

        set(() => ({
            order
        }))
    },

    //eliminar un producto del carrito
    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    },

    //vaciar el carrito
    clearOrder: () => {
        set(() => ({
            order: []
        }))
    }
}))