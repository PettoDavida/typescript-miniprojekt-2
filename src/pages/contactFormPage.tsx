import "../CSS/form.css"
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { Button, Card, Typography } from "@mui/material";
import { TextField } from "formik-mui";
import { contactInfoContext } from "../components/context";
import { useContext } from "react";

export interface ContactInfo {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  streetAddress: string,
  zip: string,
  city: string
}


function ContactFormPage() {

  const navigate = useNavigate()

  const {setContactInfo} = useContext(contactInfoContext)


  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Förnamn är obligatoriskt"),
    lastName: Yup.string().required("Efternamn är obligatoriskt"),
    email: Yup.string().required("Email är obligatoriskt").email("Formatet på email är fel"),
    phoneNumber: Yup.number().required("Telefonnummer är obligatoriskt")
    .typeError("Du får endast ange siffror i detta fältet"),
    streetAddress: Yup.string()
    .required("Adress är obligatoriskt")
    .min(8, "Adress måste bestå av minst 8 siffror"),
    zip: Yup.number().required('Post Nummer är obligatoriskt').typeError('Du får endast ange siffror i detta fältet'),
    city: Yup.string().required('Post Ort är obligatoriskt')
  });
  
  const initialValues: ContactInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber:'',
    streetAddress: '',
    zip: '',
    city: ''
  }

  const formatContactInfo = (values: any) => {
    const Info: ContactInfo = {'firstName': values.firstName, 
                               'lastName': values.lastName,
                               'email': values.email,
                               'phoneNumber': values.phoneNumber,
                               'streetAddress': values.streetAddress,
                               'zip': values.zip,
                               'city': values.city}
    setContactInfo(Info)
    console.log(Info);
  }
     

  return (
    <div className="ContactInfoDiv">
      <Card sx={{display: 'inline-block', padding: '2rem'}} raised={true}>
        <Typography variant="h5">Kontaktuppgifter</Typography>
        <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  formatContactInfo(values)
                  actions.setSubmitting(false);
                  navigate('frakt')
                }}
                validationSchema={validationSchema}   
                >
              <Form>
                <Field 
                component={TextField}
                name="firstName"
                type="firstName"
                label="Förnamn"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="lastName"
                type="lastName"
                label="Efternamn"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="email"
                type="email"
                label="Email"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="phoneNumber"
                type="phoneNumber"
                label="Mobil Nummer"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="streetAddress"
                type="streetAddress"
                label="Adress"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="zip"
                type="zip"
                label="Post Nummer"
                margin="dense"
                />
                <br />
                <Field 
                component={TextField}
                name="city"
                type="city"
                label="Post Ort"
                margin="dense"
                />
                <br />
                
                <Button type="submit">Submit</Button>
              </Form>
            </Formik>
      </Card>
    </div>
    
  )
}


export default ContactFormPage