import React from 'react'

let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
console.log(id);

function OrderConfirmation() {
    
  return (
    <div>  
    <h2>Tack för din beställning!</h2>
    <p>Ditt ordernummer: {id}</p>
    </div>
  )
}

export default OrderConfirmation;