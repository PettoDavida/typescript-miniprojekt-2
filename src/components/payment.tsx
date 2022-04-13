import { useContext, useEffect, useState } from "react";
import "../CSS/payment.css";
import Button from "@mui/material/Button";
import { Field, Form, Formik, } from "formik";
import * as Yup from "yup";
import SwishLogo from '../Images/Swish.png'
import MasterCardLogo from '../Images/Mastercard.png'
import PayPalLogo from '../Images/Paypal.png'
import SwishQRLogo from '../Images/SwishQR.png'
import { cartContext, contactInfoContext, fraktContext, orderContext } from "./context";
import { useNavigate } from "react-router-dom"
import { Card,  Radio,  Typography } from "@mui/material";
import { TextField } from "formik-mui";

enum Betalsätt{
  empty = 0,
  Kort,
  Swish,
  PayPal
}

interface CardInfo{
  cardHolder: string,
  cardNumber: string,
  expiryDate: string,
  cvc: string,
}

function PaymentMethod() {

  const {frakt} = useContext(fraktContext)
  const {order, setOrder} = useContext(orderContext)
  const navigate = useNavigate();
  const {contactInfo} = useContext(contactInfoContext)

  

  const handleClick = () => {
    const myPromise = new Promise((resolve, reject) => {
      setOrder(true)
      setTimeout(() => {
        resolve('foo');
      }, 2000);
    });
    myPromise.then(() => {
      navigate("orderconfirmation")
    })
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

    const [selectedValue, setSelectedValue] = useState(Betalsätt.empty);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(parseInt(event.target.value) as Betalsätt)
    }
  
    const BetalSätt = (props: any) => {
      return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <Radio 
            checked={selectedValue === props.sätt} 
            onChange={handleChange}
            value={props.sätt}
          />
          <img className='betallogo' src={props.icon} alt=""/>
          <Typography>{Betalsätt[props.sätt]}</Typography>
        </div>
      )
    }
    const KortInfo = (props: any) => {
      const validationSchema = Yup.object().shape({
        cardHolder: Yup.string().required("Förnamn är obligatoriskt"),
        cardNumber: Yup.string()
          .required("Kortnummer är obligatoriskt")
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(16, "Kortnummret är inte giltigt")
          .max(16, "Kortnummret är inte giltigt"),
        expiryDate: Yup.string()
          .required("Giltigt till är obligatoriskt")
          .min(5, "Giltigt till ska vara i xx/xxxx eller xx/xx")
          .max(7, "Giltigt till ska vara i xx/xxxx eller xx/xx"),
        cvc: Yup.string()
          .required("CVC är obligatoriskt")
          .min(3, "CVC är inte giltigt")
          .max(3, "CVC är inte giltigt"),
      })


      const initialValues: CardInfo = {
        cardHolder: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
      }
  
      return(
          <div style={{display: selectedValue === props.sätt ? "block" : "none"}}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  handleClick()
                  actions.setSubmitting(false);
                }}
                validationSchema={validationSchema}   
                >
              <Form>
                <Field 
                component={TextField}
                name="cardHolder"
                type="text"
                label="Fullt namn"
                margin="dense"
                />
                <br />
                <Field
                component={TextField}
                name="cardNumber"
                type="tel"
                label="Kortnummer"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="expiryDate"
                type="expiryDate"
                label="Giltigt till"
                margin="dense"
                />

                <br />
                <Field 
                component={TextField}
                name="cvc"
                type="cvc"
                label="CVC"
                margin="dense"
                />
                <br />
                <Button disabled={order} type="submit">Submit</Button>

              </Form>
            </Formik>
          </div>
      )
    }
    const SwishInfo = (props: any) => {
      const validationSchema = Yup.object().shape({
        phoneNumber: Yup.number().required("Telefonnummer är obligatoriskt")
        .typeError("Du får endast ange siffror i detta fältet"),
      })

      const initialValue = {
        phoneNumber: contactInfo.phoneNumber,
      }
  
  
      return(
          <div className="SwishDiv" style={{display: selectedValue === props.sätt ? "flex" : "none"}}>
            <img src={SwishQRLogo} alt="" className="swishQR" />
            <Typography>Scanna QR koden eller <br/> välj telefonnummer i rutan under</Typography>
            <br />
            <Formik
                initialValues={initialValue}
                onSubmit={(values, actions) => {
                  handleClick()
                  actions.setSubmitting(false);
                }}
                validationSchema={validationSchema}   
                >
              <Form>
                <Field 
                component={TextField}
                name="phoneNumber"
                type="tel"
                label="Nummer"
                margin="dense"
                />
                <br />
                <Button disabled={order} type="submit">Submit</Button>

              </Form>
            </Formik>
          </div>
      )
    }
    const PayPalInfo = (props: any) => {
      const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email är obligatoriskt").email("Formatet på email är fel"),
      })


      const initialValue = {
        email: contactInfo.email,
      }

  
      return(
          <div style={{display: selectedValue === props.sätt ? "block" : "none"}}>
            <Formik
                initialValues={initialValue}
                onSubmit={(values, actions) => {
                  handleClick()
                  actions.setSubmitting(false);
                }}
                validationSchema={validationSchema}   
                >
              <Form>
                <Field 
                component={TextField}
                name="email"
                type="email"
                label="E-mail"
                margin="dense"
                />
                <br />
                <Button disabled={order} type="submit">Submit</Button>

              </Form>
            </Formik>
          </div>
      )
    }

  return (
    <div className="ContactInfoDiv">
      <Card sx={{display: 'inline-block', padding: '2rem'}} raised={true}>
            <Typography variant="h5">Välj Betalsätt</Typography>
            <Typography>Varor: {totalPriceOfItemsInCart}Kr</Typography>
            <Typography>Moms: {totalPriceOfItemsInCart/4}Kr</Typography>
            <Typography>Frakt: {frakt}Kr</Typography>
            <Typography>Total Pris: {totalPriceOfItemsInCart + frakt}Kr</Typography>
            <BetalSätt sätt={Betalsätt.Kort} icon={MasterCardLogo} />
            <KortInfo sätt={Betalsätt.Kort}/>

            <BetalSätt sätt={Betalsätt.Swish} icon={SwishLogo} />
            <SwishInfo sätt={Betalsätt.Swish}/>

            <BetalSätt sätt={Betalsätt.PayPal} icon={PayPalLogo} />
            <PayPalInfo sätt={Betalsätt.PayPal}/>
      </Card>

    </div>
  );
}


export default PaymentMethod;

