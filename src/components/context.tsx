import { createContext, FC, useState } from "react"
import { Clothing } from "./products"

type cartType = {
    cart: Clothing[];
    setCart: React.Dispatch<React.SetStateAction<Clothing[]>>
}

export const cartContext = createContext<cartType>({} as cartType)

type productType = {
    products: Clothing[]
    setProducts: React.Dispatch<React.SetStateAction<Clothing[]>>
}

export const productsContext = createContext<productType>({} as productType)


const Provider: FC = ({children}) => {
    const [cart, setCart] = useState([] as Clothing[])
    const [products, setProducts] = useState([] as Clothing[])


    return(
        <productsContext.Provider value={{products, setProducts}}>
            <cartContext.Provider value={{cart, setCart}}>
                {children}
            </cartContext.Provider>
        </productsContext.Provider>
    )
}

export default Provider
