import { useContext, useEffect } from "react"
import { productsContext } from "./context"
import { clothes } from "./products"

export function SetLocalProducts() {
    const {products, setProducts} = useContext(productsContext)

    setProducts(clothes)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(clothes))
    },[])

    console.log(products);
    

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
