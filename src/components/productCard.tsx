import "../CSS/product.css"
import {clothes} from "./products"

function ProductCard(){
        
    return(
        <div>
            {clothes.map((_object: any, _i: number) => {return (<div><img src={clothes[_i].image} alt="" /> <h3>{clothes[_i].name}</h3></div>)})}
        </div>
    )


}


export default ProductCard