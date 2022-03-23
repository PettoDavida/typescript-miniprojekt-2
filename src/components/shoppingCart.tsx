import { useContext } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { Context } from "./cartContext"

function ShoppingCart(){

    const cart = useContext(Context)

    console.log(cart)

    return(
        <h3><HiOutlineShoppingCart/></h3>
    )
}

export default ShoppingCart