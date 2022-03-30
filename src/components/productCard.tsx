import { Button } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "../CSS/product.css"
import { cartContext } from "./context"
import {Clothing} from "./products"

function ProductCard(prod: Clothing){
    const {cart, setCart} = useContext(cartContext)

    return(
        <div className="productDiv">
          <Link to={"/productspage/" + prod.name} key={prod.id}>
            <img className="productImg" src={prod.image} alt="" /> 
            <h3 className="productName">{prod.name}</h3>
          </Link>
            {cart.find(element=>element.name === prod.name) ? (
              <div>
                <Button variant="outlined" onClick={() => {setCart([...cart, prod])}}>
                Add to Cart
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                >
                  Remove All from Cart
                </Button>
              </div>
            ) : (
              <Button variant="outlined" onClick={() => {setCart([...cart, prod])}}>
                Add to Cart
              </Button>
            )}
        </div>
    )


}


export default ProductCard