import { Button, Typography } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "../CSS/product.css"
import { cartContext } from "./context"
import {Clothing} from "./products"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ProductCard(prod: Clothing){
    const {cart, setCart} = useContext(cartContext)

    return(
        <div className="productDiv">
          <Link to={"/productspage/" + prod.id} key={prod.id}>
            <img className="productImg" src={prod.image} alt="" /> 
            <div className="nameAndPrice">
              <Typography variant="h6">{prod.name}</Typography>
              <Typography variant="h6">{prod.price}kr</Typography>
            </div>
          </Link>
            {cart.find(element=>element.clothing.id === prod.id) ? (
              <div className="productCardButtons">
                <Button className="productCardButtonAdd" variant="outlined" onClick={() => {cart[cart.findIndex(element=>element.clothing.id === prod.id)].amount += 1; setCart([...cart])}}>
                  <AddShoppingCartIcon/>
                </Button>

                <Button className="productCardButtonRemove" color="warning" variant="outlined" onClick={() => setCart(cart.filter((c) => c.clothing.id !== prod.id))}>
                  <RemoveShoppingCartIcon/>
                </Button>
              </div>
            ) : (
              <Button className="productCardButtonAdd" variant="outlined" onClick={() => {setCart([...cart, {clothing: prod, amount: 1}])}}>
                <AddShoppingCartIcon/>
              </Button>
            )}
        </div>
    )


}


export default ProductCard