import { Badge, Button, Drawer, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import { cartContext, cartItem } from "./context"
import "../CSS/shoppingCart.css"

function ShoppingCart(){

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const {cart, setCart} = useContext(cartContext)
    const [itemsInCart, setItemsInCart]= useState(Number)
    const [totalPriceOfItemsInCart, setTotalPriceOfItemsInCart]= useState(Number)

    useEffect(() => {
        let totalAmount = 0
        let totalPrice = 0
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i]
            totalAmount += element.amount
            totalPrice += element.clothing.price * element.amount
        }
        setItemsInCart(totalAmount)
        setTotalPriceOfItemsInCart(totalPrice)
        console.log(cart);
    }, [cart])
    
    function ChangeAmount(id: number, amount: number) {
        const index = cart.findIndex(element=>element.clothing.id === id)
        if (cart[index].amount + amount >= 0) {
            cart[index].amount += amount;
        }
        if (cart[index].amount === 0) {
            cart.splice(index, 1)
        }
        setCart([...cart])
    }
    

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
                {totalPriceOfItemsInCart} kr
                {cart.map((_object: cartItem, _i: number) => {
                    return(
                        <div className="cartItemDiv" key={_i}>
                            <img className="cartImg" src={_object.clothing.image} alt="" />
                            <Typography variant="h6">
                                {_object.clothing.name}
                                
                            </Typography>
                            {_object.clothing.price * _object.amount} kr
                            <Button onClick={()=>{ChangeAmount(_object.clothing.id, -1)}}>-1</Button>
                            {_object.amount}
                            <Button onClick={() => {ChangeAmount(_object.clothing.id, +1)}}>+1</Button>
                        </div>
                    )
                })}
            </Drawer>
        </div>
        


        
    )
}

export default ShoppingCart