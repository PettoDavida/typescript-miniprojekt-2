import ProductCard from "../components/productCard"
import { clothes, Clothing } from "../components/products"
import "../CSS/productsPage.css"

function ProductsPage(){
    
    
    return (
        <div className="containerDiv">
            {clothes.map((_object: Clothing, _i: number) => {
                return(
                    <ProductCard name={_object.name} image={_object.image} color={_object.color} sizes={_object.sizes} type={_object.type} key={_i}/>
                )
                })}
        </div>
    )
}

export default ProductsPage

