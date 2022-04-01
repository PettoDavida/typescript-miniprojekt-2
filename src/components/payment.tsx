import { useContext, useEffect, useState } from "react";
import "../CSS/payment.css";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import SwishLogo from '../Images/Swish.png'
import MasterCardLogo from '../Images/Mastercard.png'
import PayPalLogo from '../Images/Paypal.png'
import SwishQRLogo from '../Images/SwishQR.png'
import { cartContext, fraktContext } from "./context";
import { useNavigate } from "react-router-dom"
function PaymentMethod() {
  const [value, setValue] = useState(0);
  const frakt = useContext(fraktContext)
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Namn är obligatoriskt"),
    cardNumber: Yup.string()
      .required("Kortnummer är obligatoriskt")
      .min(16, "Kortnummret är inte giltigt")
      .max(16, "Kortnummret är inte giltigt"),
    expirationMonth: Yup.string()
      .required("Utgångsdatum är obligatoriskt"),
    expirationYear: Yup.string()
      .required("Utgångsdatum är obligatoriskt"),
    cvc: Yup.string()
      .required("CVC är obligatoriskt")
      .min(3, "CVC är inte giltigt")
      .max(3, "CVC är inte giltigt"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      cvc: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const handleClick = () => {
    navigate("orderconfirmation")
  }

  let payment = "payment";
  let paymentText = document.getElementById("paymentText");
  let SwishDiv = document.getElementById("SwishDiv");
  let swishNumberButton = "hidden";
  let swishNumberText = "visible";
  let swishButton = "visible";
  let priser = "hidden";
  let betalkortForm = "hidden";

  if (value === 1) {
    payment = "hidden";
    paymentText!.innerHTML = "Swish";
    priser = "visible";
    SwishDiv!.style.display = "flex";
  } else if (value === 2) {
    payment = "hidden";
    paymentText!.innerHTML = "Betalkort";
    betalkortForm = "betalkortForm"
    priser = "visible";
  } else if (value === 3) {
    payment = "hidden";
    paymentText!.innerHTML = "PayPal";
    priser = "visible";
  } else if (value === 4) {
    payment = "hidden";
    swishNumberButton = "visible";
    swishNumberText = "hidden";
    swishButton = "hidden";
    priser = "visible";
  }


  const {cart} = useContext(cartContext)

    const [totalPriceOfItemsInCart, setTotalPriceOfItemsInCart]= useState(Number)

    useEffect(() => {
        let totalPrice = 0
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i]
            totalPrice += element.clothing.price * element.amount
        }
        setTotalPriceOfItemsInCart(totalPrice)
        // console.log(cart);
    }, [cart])

  return (
    <div className="payment-div">
      <div className="choose-payment">
        <h2 id="paymentText">Välj betalningsätt!</h2>
      </div>
      <div className="payment-methods">
        <div className={payment} id="payment" onClick={() => setValue(1)}>
          <p>Swish</p>

          <img src={SwishLogo} className="swish-logo" alt="" />
        </div>
        <div className={payment} id="payment" onClick={() => setValue(2)}>
          <p>Betalkort</p>

          <img src={MasterCardLogo} className="betalkort-logo" alt="" />
        </div>
        <div className={payment} id="payment" onClick={() => setValue(3)}>
          <p>Paypal</p>

          <img src={PayPalLogo} className="paypal-logo" alt="" />
        </div>
      </div>

      <div className="swish-payment" id="SwishDiv">
        <img
          src={SwishQRLogo}
          alt=""
          className="swish-qr"
          id="SwishQR"
        />
        <p>Scanna QR koden eller välj telefonnummer i rutan under</p>
        <div className="swishNumberDiv">
          <p className={swishNumberText}>0703539699</p>
          <button
            className={swishButton}
            onClick={() => setValue(4)}
            id="swishButton"
          >
            Byt swishnummer
          </button>
          <input
            type="text"
            name="phone"
            className={swishNumberButton}
            id="TextboxSwish"
          />
        </div>
      </div>

      <div className={betalkortForm}>
        <form onSubmit={formik.handleSubmit}>{formik.touched.fullName && formik.errors.fullName ? (<div className="errorMessage">{formik.errors.fullName} </div>) : null}
        <p>Kortinnehavarens namn</p>
          <input 
          type="text" 
          name="fullName" 
          value={formik.values.fullName} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />

          {formik.touched.expirationMonth && formik.errors.expirationMonth ? (<div className="errorMessage">{formik.errors.expirationMonth} </div>) : null}
          <p>Utgångsdatum</p>
          <select
          name="expirationDateMonth"
          placeholder=""
          > 
            <option value="placeholder">Månad</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          {formik.touched.expirationYear && formik.errors.expirationYear ? (<div className="errorMessage">{formik.errors.expirationYear} </div>) : null}
           <select
            name="expirationDateYear"
 
            >
              <option value="placeholder">År</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
              <option value="2035">2035</option>
              <option value="2036">2036</option>

            </select>

          {formik.touched.cvc && formik.errors.cvc ? (<div className="errorMessage">{formik.errors.cvc} </div>) : null}
          <p>CVC nummer</p>
          <input 
          type="text" 
          name="cvc" 
          value={formik.values.cvc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          />

          {formik.touched.cardNumber && formik.errors.cardNumber ? (<div className="errorMessage">{formik.errors.cardNumber} </div>) : null}
          <p>Kortnummer</p>
          <input 
          type="text" 
          name="cardNumber" 
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          />

        </form>
      </div>
      <div className={priser} id="priser">
        <p>Produkt pris:{totalPriceOfItemsInCart}</p>
        <p>Moms:{totalPriceOfItemsInCart/4}</p>
        <p>Frakt:{frakt.frakt}</p>
        <hr />
        <p>Totalt:{totalPriceOfItemsInCart + frakt.frakt}</p>
        <Stack direction="row" spacing={2}>
          <Button onClick={handleClick} variant="outlined">Betala</Button>
        </Stack>
      </div>
    </div>
  );
}

export default PaymentMethod;
