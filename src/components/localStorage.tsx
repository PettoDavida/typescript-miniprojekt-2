import { useContext, useEffect } from "react"
import { productsContext } from "./context"
import { clothes } from "./products"

export function SetLocalProducts() {
    const {setProducts} = useContext(productsContext)

    setProducts(clothes)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(clothes))
    },[])

}

export function GetLocalProducts(){
    const {setProducts} = useContext(productsContext)

    useEffect(() => {
        const prods = JSON.parse(localStorage.getItem('products') || '{}')
        if (prods){
            setProducts(prods)
        }

    },[])

    
}
