import { Alert, Button } from "@mui/material";
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
          // console.log(products.products[index].about)

          const onAddNewProduct = () => {
            setCart([...cart, {clothing: products.products[index], amount: 1}])
            setSuccessOnAddProduct(true)
            const id = setInterval(() => {setSuccessOnAddProduct(false); clearInterval(id)},500)
          }
            return(
                <div>
                    <span className="productPageTitle">
                      {products.products[index].name}
                    </span>
                    <div className="productPageImgAndAbout">
                      <div className="productPageImgAndButtons">
                      <img className="productPageImg" src={products.products[index].image} alt="" />
                      {cart.find(element=>element.clothing.id === products.products[index].id) ? (
                    <div className="productCardButtons productPageButtons">
                      <Button variant="outlined" onClick={() => {cart[cart.findIndex(element=>element.clothing.id === products.products[index].id)].amount += 1; setCart([...cart])}}>
                        <AddShoppingCartIcon/>
                      </Button>
                            
                      <Button variant="outlined" color="warning" onClick={() => setCart(cart.filter((c) => c.clothing.id !== products.products[index].id))}>
                        <RemoveShoppingCartIcon/>
                      </Button>
                    </div>
                    ) : (
                      <div>
                      <Button className="productPageButtons" variant="outlined" onClick={() => {onAddNewProduct()}}>
                        <AddShoppingCartIcon/>
                      </Button>
                      </div>
                    )}
                    </div>
                    <span className="productPageAbout">
                      {products.products[index].about}
                    </span>
                    </div>
                    
                  <Alert style={{display: successOnAddProduct ? 'flex' : 'none'}} severity="success">Item Added to cart</Alert>  
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

