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


 interface MyFormValues {
   productName: string;
    productImage: string
    productPrice: number
    productType: string
 }

 const regMatch = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

 const yupValidate = Yup.object().shape({
   productName: Yup.string().required("Produkten måste ha ett namn"),
   productImage: Yup.string().matches(regMatch, "Produktens bild behövs i URL form").required("Produkten måste ha en bild i URL form"),
   productPrice: Yup.number().min(1, "Produkten får inte kosta mindre än 0 kr").max(9999, "Produkten får inte kosta mer än 9999 kr").required("Produkten måste ha ett pris i kronor"),
 })
 
 export const NewProduct: React.FC<{}> = () => {

  const {products, setProducts} = useContext(productsContext)

  const addProduct = (values: any) => {
    const newId = products[products.length-1].id + 1
    const apparel: Clothing = {'id':newId, 'name': values.productName, 'image': values.productImage, 'price': values.productPrice, 'type': values.productType}
    setProducts([...products, apparel])
    console.log(apparel);
  }

   const initialValues: MyFormValues = { 
        productName: '' ,
        productImage: '',
        productPrice: 0,
        productType: 'shirt'};
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
           <Field id="productName" name="productName" placeholder="Product Name" />
           {errors.productName && touched.productName && <div>{errors.productName}</div>}
           <br />
           <label htmlFor="productImage">Product Image</label>
           <Field id="productImage" name="productImage" placeholder="Product Image" />
           {errors.productImage && touched.productImage && <div>{errors.productImage}</div>}
           <br />
           <label htmlFor="productPrice">Product Price</label>
           <Field id="productPrice" name="productPrice" placeholder="Product Price" />
           {errors.productPrice && touched.productPrice && <div>{errors.productPrice}</div>}
           <br />
           <label htmlFor="productType">Product Type</label>
           <Field as='select' id='productType' name='productType' >
             <option value="shirt" label='Shirt' />
             <option value="pants" label='Pants' />
             <option value="hoodie" label='Hoodie' />
           </Field>
           <br />
           <Button type="submit">Submit</Button>
         </Form>
           )}
       </Formik>
     </div>
   );
 };
