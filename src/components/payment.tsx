import { useState } from "react";
import "../CSS/payment.css";
import { Button } from "@mui/material/Button";
import { Stack } from "@mui/material";

function PaymentMethod() {
  const [value, setValue] = useState(0);

  let payment = "payment";
  let paymentText = document.getElementById("paymentText");
  let SwishDiv = document.getElementById("SwishDiv");
  let SwishQR = document.getElementById("SwishQR");

  if (value === 1) {
    payment = "hidden";
    paymentText!.innerHTML = "Swish";
    SwishDiv!.style.display = "flex";
  } else if (value === 2) {
    payment = "hidden";
  } else if (value === 3) {
    payment = "hidden";
  }

  return (
    <div className="payment-div">
      <div className="choose-payment">
        <h2 id="paymentText">Välj betalningsätt!</h2>
      </div>
      <div className="payment-methods">
        <div className={payment} id="payment" onClick={() => setValue(1)}>
          <p>Swish</p>

          <img src="images/Swish.png" className="swish-logo" alt="" />
        </div>
        <div className={payment} id="payment" onClick={() => setValue(2)}>
          <p>Betalkort</p>

          <img src="images/Mastercard.png" className="betalkort-logo" alt="" />
        </div>
        <div className={payment} id="payment" onClick={() => setValue(3)}>
          <p>Paypal</p>

          <img src="images/Paypal.png" className="paypal-logo" alt="" />
        </div>
      </div>

      <div className="swish-payment" id="SwishDiv">
        <img
          src="images/SwishQR.png"
          alt=""
          className="swish-qr"
          id="SwishQR"
        />
        <p>Scanna QR koden eller skriv in telefonnumret i rutan under</p>
        <input type="text" name="phone" id="TextboxSwish" />
        <Stack direction="row" spacing={2}>
          <Button>Betala</Button>
        </Stack>
        {/*         <input type="button" value="Betala" id="paymentButtonSwish" />
         */}{" "}
      </div>
    </div>
  );
}

export default PaymentMethod;
