import "../CSS/product.css"
import {clothes} from "./products"

function ProductCard(){
    console.log(clothes)
    return(
        <div className="containerDiv">
            {clothes.map((_object: any, _i: number) => {
                return (
                    <a key={_i} href={"/" + clothes[_i].name}>
                        <div  className="productDiv">
                            <img className="productImg" src={clothes[_i].image} alt="" /> 
                            <h3 className="productName">{clothes[_i].name}</h3>
                        </div>
                    </a>
                )})}
        </div>
    )


}


export default ProductCard