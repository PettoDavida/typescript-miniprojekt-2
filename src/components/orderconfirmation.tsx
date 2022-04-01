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
    <div>  
    <h2>Tack för din beställning!</h2>
    <p>Ditt ordernummer: {id}</p>
    </div>
  )
}

export default OrderConfirmation;