import * as React from 'react';
 import {
   Formik,
   Form,
   Field,
 } from 'formik';
 import * as Yup from "yup";
import { Button } from '@mui/material';
import { productsContext } from '../context';
import { useContext } from 'react';
import { Clothing } from '../products';
import "../../CSS/newProductForm.css"


 interface MyFormValues {
    productName: string;
    productImage: string
    productPrice: number
    productType: string
    productAbout: string
 }


 const isValidUrl = (url: any) => {
  try {
    new URL(url);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

 const yupValidate = Yup.object().shape({
   productName: Yup.string().required("Produkten måste ha ett namn"),
   productImage: Yup.string().test("is-url-valid", "URL is not vaild", (value) => {return isValidUrl(value)}).required("Produkten måste ha en bild i URL form"),
   productPrice: Yup.number().min(1, "Produkten får inte kosta mindre än 0 kr").max(9999, "Produkten får inte kosta mer än 9999 kr").required("Produkten måste ha ett pris i kronor"),
   productAbout: Yup.string().required("Produkten måste ha en beskrivning")
 })
 
 export const NewProduct: React.FC<{}> = () => {

  const {products, setProducts} = useContext(productsContext)

  const addProduct = (values: any) => {
    const newId = products[products.length-1].id + 1
    const apparel: Clothing = {'id':newId, 'name': values.productName, 'image': values.productImage, 'price': values.productPrice, 'type': values.productType, 'about': values.productAbout}
    setProducts([...products, apparel])
    console.log(apparel);
  }

   const initialValues: MyFormValues = { 
        productName: '' ,
        productImage: '',
        productPrice: 0,
        productType: 'shirt',
        productAbout: ''
      }
   return (
     <div>
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           addProduct(values)
           actions.setSubmitting(false);
         }}
         validationSchema={yupValidate}
       >
           {({ errors, touched }) => (
         <Form>
           <label htmlFor="productName">Product Name</label>
           <Field className="newProductInput" id="productName" name="productName" placeholder="Product Name" />
           {errors.productName && touched.productName && <div>{errors.productName}</div>}
           <br />
           <label htmlFor="productImage">Product Image</label>
           <Field className="newProductInput" id="productImage" name="productImage" placeholder="Product Image" />
           {errors.productImage && touched.productImage && <div>{errors.productImage}</div>}
           <br />
           <label htmlFor="productPrice">Product Price</label>
           <Field className="newProductInput" id="productPrice" name="productPrice" placeholder="Product Price" />
           {errors.productPrice && touched.productPrice && <div>{errors.productPrice}</div>}
           <br />
           <label htmlFor="productType">Product Type</label>
           <Field as='select' id='productType' name='productType' >
             <option value="shirt" label='Shirt' />
             <option value="pants" label='Pants' />
             <option value="hoodie" label='Hoodie' />
           </Field>
           <br />
           <label htmlFor="productAbout">Product About</label>
           <br />
           <Field as="textarea" className="newProductTextArea" id="productAbout" name="productAbout" placeholder="Product About" />
           {errors.productAbout && touched.productAbout && <div>{errors.productAbout}</div>}
           <br />
           <Button type="submit">Submit</Button>
         </Form>
           )}
       </Formik>
     </div>
   );
 };

