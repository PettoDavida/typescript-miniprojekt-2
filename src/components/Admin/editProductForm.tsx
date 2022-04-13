import {
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from "yup";
import { Button, MenuItem } from '@mui/material';
import { productsContext } from '../context';
import { useContext } from 'react';
import { Clothing } from '../../products';
import "../../CSS/newProductForm.css"
import { Select, TextField } from 'formik-mui';



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
  productImage: Yup.string().test("is-url-valid", "Bilden måste vara en URL", (value) => {return isValidUrl(value)}).required("Produkten måste ha en bild i URL form"),
  productPrice: Yup.number().min(1, "Produkten får inte kosta mindre än 0 kr").max(9999, "Produkten får inte kosta mer än 9999 kr").required("Produkten måste ha ett pris i kronor"),
  productAbout: Yup.string().required("Produkten måste ha en beskrivning")
})

export function EditProduct(props: any) {

    const prod: Clothing = props.prod
    

 const {products, setProducts} = useContext(productsContext)

 const editProduct = (values: any) => {
   const index = products.findIndex((p) => p.id === prod.id)
   products[index].name = values.productName
   products[index].image = values.productImage
   products[index].price = values.productPrice
   products[index].type = values.productType
   products[index].about = values.productAbout
   setProducts([...products])
}

  const initialValues: MyFormValues = { 
       productName: prod.name,
       productImage: prod.image,
       productPrice: prod.price,
       productType: prod.type,
       productAbout: prod.about 
     }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          editProduct(values)
          actions.setSubmitting(false);
          props.onCloseModal()
        }}
        validationSchema={yupValidate}
      >
         <Form>
           <Field 
            component={TextField}
            name="productName"
            type="productName"
            label="Name"
            margin="dense"
           />
           <br />
           <Field 
            component={TextField}
            multiline
            name="productImage"
            type="productImage"
            label="Image URL"
            margin="dense"

           />
           <br />
           <Field 
            component={TextField}
            name="productPrice"
            type="productPrice"
            label="Price"
            margin="dense"

           />
           <br />
           <br />
           <Field 
           component={Select} 
           name='productType' 
           label="Type"
           >
            <MenuItem value="shirt">Shirt</MenuItem>
            <MenuItem value="pants">Pants</MenuItem>
            <MenuItem value="hoodie">Hoodie</MenuItem>
           </Field>
           <br />
           <Field 
            component={TextField}
            multiline
            name="productAbout"
            type="productAbout"
            label="About"
            margin="dense"
           />
           <br />
           <Button type="submit">Submit</Button>
         </Form>
      </Formik>
    </div>
  );
};

