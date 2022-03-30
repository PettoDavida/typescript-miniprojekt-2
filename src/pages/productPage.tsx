
import { clothes } from "../components/products";
import "../CSS/productPage.css"

function ProductPage(){

    let getURL = window.location.href

    let decodedURL = decodeURI(getURL)
    let itemFromURL = getClothingItemFromFullURL(decodedURL)


    for (let index = 0; index < clothes.length; index++) {
        console.log(clothes[index].name)
        if (itemFromURL === clothes[index].name) {
            return(
                <div>
                    <h1>{clothes[index].name}</h1>
                    <img className="productImg" src={clothes[index].image} alt="" />
                </div>
            )
        }
        
    }
    
    return (
        <div>
            <h1>
                Product Page
                <br />
                {itemFromURL}
            </h1>
        </div>
    )
}

function getClothingItemFromFullURL(url: string){
    return url.split('/').pop()
}

export default ProductPage

