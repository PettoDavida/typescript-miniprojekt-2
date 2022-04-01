import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { productsContext } from "../context"
import "../../CSS/product.css"
import "../../CSS/adminProduct.css"
import {Clothing} from "../products"
import { EditProduct } from "./editProductForm"

function AdminProductCard(prod: Clothing){

    const {products, setProducts} = useContext(productsContext)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {setOpen(true)}

    const handleClose = () => {setOpen(false)}

    return(
        <div  className="productDiv">
            <img className="productImg" src={prod.image} alt="" /> 
            <h3 className="productName">{prod.name}</h3>
            <div className="adminPageButtons">
            <div className="editProduct">
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Edit
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Ändra produkt</DialogTitle>
                        <DialogContent>
                            <EditProduct onCloseModal={handleClose} prod={prod} />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            <Button
              variant="contained"
              color='error'
              onClick={() => setProducts(products.filter((c) => c.id !== prod.id))}
            >
              Remove
            </Button>
            </div>
        </div>
    )


}


export default AdminProductCard