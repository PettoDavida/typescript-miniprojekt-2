
import { Button } from "@mui/material";
import { useContext } from "react";
import { cartContext } from "../components/context";
import { clothes } from "../components/products";
import "../CSS/productPage.css"

function ProductPage(){

  const {cart, setCart} = useContext(cartContext)

    let getURL = window.location.href

    let decodedURL = decodeURI(getURL)
    let itemFromURL = getClothingItemFromFullURL(decodedURL)


    for (let index = 0; index < clothes.length; index++) {
        console.log(clothes[index].name)
        if (itemFromURL === clothes[index].name) {
            return(
                <div>
                    <h1>{clothes[index].name}</h1>
                    <img className="productImg" src={clothes[index].image} alt="" />
                    {cart.find(element=>element.clothing.id === clothes[index].id) ? (
                    <div>
                      <Button variant="outlined" onClick={() => {cart[cart.findIndex(element=>element.clothing.id === clothes[index].id)].amount += 1; setCart([...cart])}}>
                      Add to Cart
                      </Button>
                            
                      <Button
                        variant="outlined"
                        onClick={() => setCart(cart.filter((c) => c.clothing.id !== clothes[index].id))}
                      >
                        Remove All from Cart
                      </Button>
                    </div>
                    ) : (
                      <Button variant="outlined" onClick={() => {setCart([...cart, {clothing: clothes[index], amount: 1}])}}>
                        Add to Cart
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

