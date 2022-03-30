import "../CSS/product.css"
import {clothes} from "./products"
import {Link} from "react-router-dom"

function ProductCard(){
    console.log(clothes)
    return(
        <div className="containerDiv">
            {clothes.map((_object: any, _i: number) => {
                return (
                    <Link to={"/productspage/" + clothes[_i].name} key={_i}>
                        <div  className="productDiv">
                            <img className="productImg" src={clothes[_i].image} alt="" /> 
                            <h3 className="productName">{clothes[_i].name}</h3>
                        </div>
                    </Link>
                )})}
        </div>
    )


}


export default ProductCard