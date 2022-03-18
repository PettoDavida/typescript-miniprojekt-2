import React, { useState } from 'react'
import "../CSS/form.css"
import {Formik, useFormik} from 'formik'



// const validate = formik.values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }
  
//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }
  
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
  
//   return errors;
// };


function Form() {
  const formik = useFormik({
    initialValues: {
      email: '',
      phoneNumber: '',
      streetAddress: '',
      firstName: '',
      lastName: '',
    },
    // validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  
  

  // const [telefonnummer, setTelefonnummer] = useState('');
  // const [adress, setAdress] = useState('');
  // console.log(telefonnummer)
  // console.log(adress)
  return (
    
    <div className="mainDiv">
        <div className="formDiv">
            {/* <span>Ange kontaktuppgifter för att slutföra beställningen</span>
            <div className='inputDiv'>
            
            <input name='Förnamn' className="textInput" type="text" required minLength={1} autoComplete="given-name" />
            <label id="inputLabel" htmlFor="Förnamn">Förnamn</label>

            <input name='Efternamn' className="textInput" type="text" required minLength={1} autoComplete="family-name" />
            <label id="inputLabel" htmlFor="Efternamn">Efternamn</label>

            <input name='Mail' className="textInput" type="text" required minLength={1} autoComplete="email" />
            <label id="inputLabel" htmlFor="Mail">Mail</label>

            <input name='Telefonnummer' className="textInput" value={telefonnummer} onInput={e => setTelefonnummer(e.currentTarget.value)} type="text" required minLength={1} autoComplete="tel" />
            <label id="inputLabel" htmlFor="Telefonnummer">Telefonnummer</label>

            <input name='Adress' className="textInput" value={adress} onInput={e => setAdress(e.currentTarget.value)} type="text" required minLength={1} autoComplete="street-address" />
            <label id="inputLabel" htmlFor="Adress">Adress</label>

            </div> */}
            <span>Ange kontaktuppgifter för att slutföra beställningen</span>

            <div className="inputDiv">
            <form onSubmit={formik.handleSubmit}>
              <input 
              type="text" 
              id="firstName"
              name="firstName"
              className='textInput'
              required minLength={1}
              />
              <label id="inputLabel" htmlFor="firstName">Förnamn</label>

              <input 
              type="text" 
              id="lastName"
              name="lastName"
              className='textInput'
              required minLength={1}
              />
              <label id="inputLabel" htmlFor="lastName">Efternamn</label>

              <input 
              className='textInput'
              type="email" 
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required minLength={1}
              />
              <label id="inputLabel" htmlFor="email">Email</label>

              <input 
              type="text" 
              id="phoneNumber"
              name="phoneNumber"
              className='textInput'
              required minLength={1}
              />
              <label id="inputLabel" htmlFor="phoneNumber">Telefonnummer</label>

              <input 
              type="text" 
              id="streetAddress"
              name="streetAddress"
              className='textInput'
              required minLength={1}
              />
              <label id="inputLabel" htmlFor="adress">Adress</label>
            </form>
            </div>
            <div className="buttonDiv">
                <button type='submit' className='buyButton'>Slutför beställning</button>
                </div>
            </div>
        </div>
  )
}

export default Form