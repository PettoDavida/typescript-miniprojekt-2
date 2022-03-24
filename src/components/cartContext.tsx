import { createContext, FC, useState } from "react"
import { Clothing } from "./products"

type cartType = {
    cart: Clothing[];
    setCart: React.Dispatch<React.SetStateAction<Clothing[]>>
}

export const Context = createContext<cartType>({} as cartType)

const Provider: FC = ({children}) => {
    const [cart, setCart] = useState([] as Clothing[])

    return(
        <Context.Provider value={{cart, setCart}}>
            {children}
        </Context.Provider>
    )
}

export default Provider
