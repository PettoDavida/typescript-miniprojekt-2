import { Badge, Button, Drawer, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartContext, cartItem } from "./context"
import { useNavigate } from "react-router";

function ShoppingCart(){

    const navigate = useNavigate()

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
        // console.log(cart);
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
        <Typography>
            <Button onClick={() => setIsDrawerOpen(true)}>
                <Badge badgeContent={itemsInCart} color="primary">
                    <ShoppingCartIcon color="action" />
                </Badge>
            </Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Button disabled={cart === undefined || cart.length === 0} size="large" onClick={() => {navigate('dina-uppgifter'); setIsDrawerOpen(false)}}>
                    <PaymentIcon color="action"/>
                </Button>
                Total Price: {totalPriceOfItemsInCart} kr
                {cart.map((_object: cartItem, _i: number) => {
                    return(
                        <div className="cartItemDiv" key={_i}>
                            <Typography variant="h6">
                                {_object.clothing.name}
                            </Typography>
                            {_object.clothing.price * _object.amount} kr
                            <Button onClick={()=>{ChangeAmount(_object.clothing.id, -1)}}>
                                <RemoveIcon/>
                            </Button>
                            {_object.amount}
                            <Button onClick={() => {ChangeAmount(_object.clothing.id, +1)}}>
                                <AddIcon/>
                            </Button>
                        </div>
                    )
                })}
            </Drawer>
        </Typography>

        


        
    )
}

export default ShoppingCart