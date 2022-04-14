import { createContext, FC, useState } from "react"
import { Clothing } from "../products"
import { ContactInfo } from "../pages/contactFormPage"

export interface cartItem{
    clothing: Clothing
    amount: number
}

type cartType = {
    cart: cartItem[]
    setCart: React.Dispatch<React.SetStateAction<cartItem[]>>
}

export const cartContext = createContext<cartType>({} as cartType)

type productType = {
    products: Clothing[]
    setProducts: React.Dispatch<React.SetStateAction<Clothing[]>>
}

export const productsContext = createContext<productType>({} as productType)

type contactInfoType = {
    contactInfo: ContactInfo
    setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>
}

export const contactInfoContext = createContext<contactInfoType>({} as contactInfoType)


type fraktType = {
    frakt: number
    setFrakt: React.Dispatch<React.SetStateAction<number>>
}

export const fraktContext = createContext<fraktType>({} as fraktType)

type orderType = {
    order: boolean
    setOrder: React.Dispatch<React.SetStateAction<boolean>>
}

export const orderContext = createContext<orderType>({} as orderType)

const Provider: FC = ({children}) => {
    const [cart, setCart] = useState([] as cartItem[])
    const [products, setProducts] = useState([] as Clothing[])
    const [frakt, setFrakt] = useState(0)
    const [order, setOrder] = useState(false)
    const [contactInfo, setContactInfo] = useState({} as ContactInfo)


    return(
        <contactInfoContext.Provider value={{contactInfo, setContactInfo}}>
            <orderContext.Provider value={{order, setOrder}}>
                <fraktContext.Provider value={{frakt, setFrakt}}>
                    <productsContext.Provider value={{products, setProducts}}>
                        <cartContext.Provider value={{cart, setCart}}>
                            {children}
                        </cartContext.Provider>
                    </productsContext.Provider>
                </fraktContext.Provider>
            </orderContext.Provider>
        </contactInfoContext.Provider>
    )
}

export default Provider
