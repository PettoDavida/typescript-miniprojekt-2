import { useContext } from "react"
import { productsContext } from "../components/context"
import { GetLocalProducts, SetLocalProducts } from "../components/localStorage"
import ProductCard from "../components/productCard"
import { Clothing } from "../components/products"
import "../CSS/productsPage.css"

function ProductsPage(){
    
    const products = useContext(productsContext)

    if (localStorage.getItem('products') === null) {
        SetLocalProducts()
    } else {
        GetLocalProducts()
    }    
    
    return (
        <div className="containerDiv">
            {products.products.map((_object: Clothing, _i: number) => {
                return(
                    <ProductCard name={_object.name} image={_object.image} color={_object.color} sizes={_object.sizes} type={_object.type} key={_i}/>
                )
                })}
        </div>
    )
}

export default ProductsPage

