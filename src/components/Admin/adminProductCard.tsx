import { Button, ButtonGroup, Card, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { productsContext } from "../context"
import "../../CSS/product.css"
import {Clothing} from "../../products"
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
        <Card sx={{display: 'inline-block', padding:'1rem' ,margin: '1rem'}} raised={true}>
            <img className="productImg" src={prod.image} alt="" /> 
            <Typography variant="h5">{prod.name}</Typography>
            <ButtonGroup>
                
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
                
            <Button
              variant="contained"
              color='error'
              onClick={() => setProducts(products.filter((c) => c.id !== prod.id))}
            >
              Remove
            </Button>
            </ButtonGroup>
        </Card>
    )


}


export default AdminProductCard