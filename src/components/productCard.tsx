import { useContext } from "react"
import "../CSS/product.css"
import { Context } from "./cartContext"
import {Clothing} from "./products"

function ProductCard(prod: Clothing){
    const {cart, setCart} = useContext(Context)
    return(
        <div  className="productDiv">
            <img className="productImg" src={prod.image} alt="" /> 
            <h3 className="productName">{prod.name}</h3>
            {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.name !== prod.name))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
        </div>
    )


}


export default ProductCard