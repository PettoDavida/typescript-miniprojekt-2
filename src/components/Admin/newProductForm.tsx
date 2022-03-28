import * as React from 'react';
 import {
   Formik,
   Form,
   Field,
 } from 'formik';
 
 interface MyFormValues {
   productName: string;
    productImage: string
    productPrice: number
    productType: string
 }

 function validateProductName(value: string) {
    let error;
    if (value === '') {
      error = "Can't be Empty!";
    }
    return error;
  }

  function validateProductPrice(value: any) {
    let error;
    if(value === ''){
        error = "Can't be Empty!";
    }else if (!Number.isInteger(value)) {
      error = "Must be a number";
    }
    return error;
  }
 
 export const NewProduct: React.FC<{}> = () => {
   const initialValues: MyFormValues = { 
        productName: '' ,
        productImage: '',
        productPrice: 0,
        productType: ''};
   return (
     <div>
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
       >
           {({ errors, touched, isValidating }) => (
         <Form>
           <label htmlFor="productName">Product Name</label>
           <Field validate={validateProductName} id="productName" name="productName" placeholder="Product Name" />
           {errors.productName && touched.productName && <div>{errors.productName}</div>}
           <br />
           <label htmlFor="productImage">Product Image</label>
           <Field id="productImage" name="productImage" placeholder="Product Image" />
           <br />
           <label htmlFor="productPrice">Product Price</label>
           <Field validate={validateProductPrice} id="productPrice" name="productPrice" placeholder="Product Price" />
           {errors.productPrice && touched.productPrice && <div>{errors.productPrice}</div>}
           <br />
           <label htmlFor="productType">Product Type</label>
           <Field id="productType" name="productType" placeholder="Product Type" />
           <br />
           <button type="submit">Submit</button>
         </Form>
           )}
       </Formik>
     </div>
   );
 };