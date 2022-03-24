import { HiOutlineShoppingCart } from "react-icons/hi"
import LocalCart from "./localStorage"

function ShoppingCart(){

    LocalCart()

    return(
        <h3><HiOutlineShoppingCart/></h3>
    )
}

export default ShoppingCart