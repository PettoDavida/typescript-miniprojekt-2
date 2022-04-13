import { Card, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { orderContext, cartContext } from "./context";

let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

function OrderConfirmation() {
    
  const {setOrder} = useContext(orderContext)
  const {setCart} = useContext(cartContext)

useEffect(() => {
  setOrder(false)
  setCart([])
},[setOrder, setCart])
  return (
    <div className="ContactInfoDiv">  
      <Card sx={{display: 'inline-block', padding: '2rem'}} raised={true}>
        <Typography variant="h2">Tack för din beställning!</Typography>
        <Typography>Ditt ordernummer: {id}</Typography>
      </Card>
    </div>
  )
}

export default OrderConfirmation;