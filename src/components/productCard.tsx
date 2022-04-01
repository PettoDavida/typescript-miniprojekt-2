import { Alert, Button, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "../CSS/product.css"
import { cartContext } from "./context"
import {Clothing} from "./products"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ProductCard(prod: Clothing){
    const {cart, setCart} = useContext(cartContext)

    const [successOnAddProduct, setSuccessOnAddProduct] = useState(false)

    const onAddNewProduct = () => {
      setCart([...cart, {clothing: prod, amount: 1}])
      setSuccessOnAddProduct(true)
      const id = setInterval(() => {setSuccessOnAddProduct(false); clearInterval(id)},500)
    }

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
              <Button className="productCardButtonAdd" variant="outlined" onClick={() => {onAddNewProduct()}}>
                <AddShoppingCartIcon/>
              </Button>
            )}
              <Alert style={{display: successOnAddProduct ? 'flex' : 'none'}} severity="success">Item Added to cart</Alert>  
        </div>
    )


}


export default ProductCard