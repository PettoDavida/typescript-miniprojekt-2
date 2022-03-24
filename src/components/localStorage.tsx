import { useContext, useEffect } from "react"
import { Context } from "./cartContext"

function LocalCart() {
    const cart = useContext(Context)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    console.log(cart);
    

}

export default LocalCart