import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useContext, useState } from "react"
import AdminProductCard from "../../components/Admin/adminProductCard"
import { NewProduct } from "../../components/Admin/newProductForm"
import { productsContext } from "../../components/context"
import { SetLocalProducts, GetLocalProducts } from "../../components/localStorage"
import { Clothing } from "../../components/products"
import '../../CSS/adminPage.css'

function AdminPage(){

    const products = useContext(productsContext)

    if (localStorage.getItem('products') === null) {
        SetLocalProducts()
    } else {
        GetLocalProducts()
    }  

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {setOpen(true)}

    const handleClose = () => {setOpen(false)}

    return(
        <div>
            <div className="createNewProduct">
                    <Button variant="contained" onClick={handleClickOpen}>
                        Create new product
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                          </DialogContentText>
                            <NewProduct/>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
        <div className="productsDiv">
            {products.products.map((_object: Clothing, _i: number) => {
                return(
                    <AdminProductCard name={_object.name} image={_object.image} price={_object.price} type={_object.type} key={_i}/>
                )
                })}
                
        </div>
        </div>
    )
}

export default AdminPage