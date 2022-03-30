import { Button } from "@mui/material"
import { useContext, useEffect } from "react"
import { productsContext } from "../context"
import "../../CSS/product.css"
import {Clothing} from "../products"

function AdminProductCard(prod: Clothing){

    const {products, setProducts} = useContext(productsContext)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])


    return(
        <div  className="productDiv">
            <img className="productImg" src={prod.image} alt="" /> 
            <h3 className="productName">{prod.name}</h3>
            <Button
              variant="contained"
              color='error'
              onClick={() => setProducts(products.filter((c) => c.id !== prod.id))}
            >
              Remove from Products
            </Button>
        </div>
    )


}


export default AdminProductCard