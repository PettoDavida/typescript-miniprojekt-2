import { Alert, Button, ButtonGroup, Card, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { cartContext, productsContext } from "../components/context";
import "../CSS/productPage.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { SetLocalProducts, GetLocalProducts } from "../components/localStorage";

function ProductPage(){

  const products = useContext(productsContext)
  const {cart, setCart} = useContext(cartContext)
  const [successOnAddProduct, setSuccessOnAddProduct] = useState(false)

  if (localStorage.getItem('products') === null) {
      SetLocalProducts()
  } else {
      GetLocalProducts()
  } 

    let getURL = window.location.href

    let decodedURL = decodeURI(getURL)
    let itemFromURL = getClothingItemFromFullURL(decodedURL)

    

    for (let index = 0; index < products.products.length; index++) {
        
        if (itemFromURL === products.products[index].id.toString()) {
          const onAddNewProduct = () => {
            setCart([...cart, {clothing: products.products[index], amount: 1}])
            setSuccessOnAddProduct(true)
            const id = setInterval(() => {setSuccessOnAddProduct(false); clearInterval(id)},1000)
          }
          return(
          <div className="ContactInfoDiv">

            <Card className="productPageMain" sx={{display: 'inline-block', padding:'1rem' ,margin: '1rem'}} raised={true}>
              <Typography className="productPageTitle" variant="h3">
                {products.products[index].name}
              </Typography>
              
              <img className="productPageImg" src={products.products[index].image} alt={products.products[index].image + " bild"} />
              
              <Typography variant="h6">
                {products.products[index].about}
              </Typography>
              <br />
              <Typography variant="h6">
                {products.products[index].price}Kr
              </Typography>

              {cart.find(element=>element.clothing.id === products.products[index].id) ? (
                <ButtonGroup>
                  <Button className="productCardButtonAdd" variant="outlined" onClick={() => {cart[cart.findIndex(element=>element.clothing.id === products.products[index].id)].amount += 1; setCart([...cart])}}>
                    <AddShoppingCartIcon/>
                  </Button>
                  <Button className="productCardButtonRemove" color="warning" variant="outlined" onClick={() => setCart(cart.filter((c) => c.clothing.id !== products.products[index].id))}>
                    <RemoveShoppingCartIcon/>
                  </Button>
                </ButtonGroup>
              ) : (
                <Button className="productCardButtonAdd" variant="outlined" onClick={() => {onAddNewProduct()}}>
                  <AddShoppingCartIcon/>
                </Button>
              )}

            <Alert style={{display: successOnAddProduct ? 'flex' : 'none', position: 'absolute', bottom: '0', left: '0'}} variant="filled" severity="success">Item Added to cart</Alert>  
          
            </Card>
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

