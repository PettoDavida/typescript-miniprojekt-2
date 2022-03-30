import { Badge, Button, Drawer, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import { cartContext } from "./context"
import { Clothing } from "./products";
import "../CSS/shoppingCart.css"

function ShoppingCart(){

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const cart = useContext(cartContext)
    const [itemsInCart, setItemsInCart]= useState(Number)

    useEffect(() => {
        setItemsInCart(cart.cart.length)
        console.log(cart);
    }, [cart])
    
    
    

    return(
        <div>
            <Button onClick={() => setIsDrawerOpen(true)}>
                <Badge badgeContent={itemsInCart} color="primary">
                    <ShoppingCartIcon color="action" />
                </Badge>
            </Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Button>
                    <PaymentIcon color="action"/>
                </Button>
                {cart.cart.map((_object: Clothing, _i: number) => {
                    return(
                        <div className="cartItemDiv" key={_i}>
                            <img className="cartImg" src={_object.image} alt="" />
                            <Typography variant="h6">
                                {_object.name}
                            </Typography>
                        </div>
                    )
                })}
            </Drawer>
        </div>
        


        
    )
}

export default ShoppingCart