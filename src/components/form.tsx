import "../CSS/form.css"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";


function Form() {

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Förnamn är obligatoriskt"),
    lastName: Yup.string().required("Efternamn är obligatoriskt"),
    email: Yup.string().required("Email är obligatoriskt").email("Formatet på email är fel"),
    phoneNumber: Yup.number().required("Telefonnummer är obligatoriskt")
    .typeError("Du får endast ange siffror i detta fältet"),
    streetAddress: Yup.string()
    .required("Adress är obligatoriskt")
    .min(8, "Adress måste bestå av minst 8 siffror")
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });   

  return (
    <div className="mainDiv">
        <div className="formDiv">
            <span className="formTitle">Ange kontaktuppgifter för att slutföra beställningen</span>

            <div className="inputDivForm">
            <form onSubmit={formik.handleSubmit}>
              {formik.touched.firstName && formik.errors.firstName ? <div className="errorMessage">{formik.errors.firstName}</div>: null}
              <input 
              type="text" 
              id="firstName"
              name="firstName"
              className='textInput'
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              />
              <label id="inputLabel" htmlFor="firstName">Förnamn</label>


              {formik.touched.lastName && formik.errors.lastName ? <div className="errorMessage">{formik.errors.lastName}</div>: null}
              <input 
              type="text" 
              id="lastName"
              name="lastName"
              className='textInput'
              required 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              />
              <label id="inputLabel" htmlFor="lastName">Efternamn</label>


              {formik.touched.email && formik.errors.email ? <div className="errorMessage">{formik.errors.email}</div>: null}
              <input 
              className='textInput'
              type="email" 
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              />
              <label id="inputLabel" htmlFor="email">Email</label>


              {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className="errorMessage">{formik.errors.phoneNumber}</div>: null}
              <input 
              type="text" 
              id="phoneNumber"
              name="phoneNumber"
              className='textInput'
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              />
              <label id="inputLabel" htmlFor="phoneNumber">Telefonnummer</label>


              {formik.touched.streetAddress && formik.errors.streetAddress ? <div className="errorMessage">{formik.errors.streetAddress}</div>: null}
              <input 
              type="text" 
              id="streetAddress"
              name="streetAddress"
              className='textInput'
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.streetAddress}
              />
              <label id="inputLabel" htmlFor="adress">Adress</label>


            <div className="buttonDiv">
                <button type='submit' className='buyButton' onClick={() => {navigate('frakt')}}>Slutför beställning</button>
                </div>
            </form>
            </div>
            </div>
        </div>
  )
}


export default Form