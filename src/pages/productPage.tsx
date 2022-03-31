import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { cartContext, productsContext } from "../components/context";
import "../CSS/productPage.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ProductPage(){

  const products = useContext(productsContext)
  const {cart, setCart} = useContext(cartContext)

    let getURL = window.location.href

    let decodedURL = decodeURI(getURL)
    let itemFromURL = getClothingItemFromFullURL(decodedURL)


    for (let index = 0; index < products.products.length; index++) {
        
        if (itemFromURL === products.products[index].id.toString()) {
          // console.log(products.products[index].about)
            return(
                <div>
                    <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>
                      {products.products[index].name}
                    </Typography>
                      <img className="productImg" src={products.products[index].image} alt="" />
                    <Typography variant="h6">
                      {products.products[index].about}
                    </Typography>
                    {cart.find(element=>element.clothing.id === products.products[index].id) ? (
                    <div>
                      <Button variant="outlined" onClick={() => {cart[cart.findIndex(element=>element.clothing.id === products.products[index].id)].amount += 1; setCart([...cart])}}>
                        <AddShoppingCartIcon/>
                      </Button>
                            
                      <Button variant="outlined" color="warning" onClick={() => setCart(cart.filter((c) => c.clothing.id !== products.products[index].id))}>
                        <RemoveShoppingCartIcon/>
                      </Button>
                    </div>
                    ) : (
                      <Button variant="outlined" onClick={() => {setCart([...cart, {clothing: products.products[index], amount: 1}])}}>
                        <AddShoppingCartIcon/>
                      </Button>
                    )}
                </div>
            )
        }
        
    }
    
    return (
        <div>
            <h1>
                Product Page
                <br />
                {itemFromURL}
            </h1>
        </div>
    )
}

function getClothingItemFromFullURL(url: string){
    return url.split('/').pop()
}

export default ProductPage

