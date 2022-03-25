import { useContext, useEffect, useState } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { cartContext } from "./context"

function ShoppingCart(){

    const cart = useContext(cartContext)
    const [itemsInCart, setItemsInCart]= useState(Number)

    useEffect(() => {
        setItemsInCart(cart.cart.length)
        console.log(cart);
    }, [cart])
    

    return(
        <h3><HiOutlineShoppingCart/>{itemsInCart}</h3>
    )
}

export default ShoppingCart