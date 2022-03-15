
import "../CSS/productPage.css"

function ProductPage(prop: any){
    
    let URL = getClothingItemFromFullURL(prop.clothingName)
    // decodeURI(URL)
    return (
        <div>
            <h1>
                Product Page
                <br />
                {URL}
            </h1>
        </div>
    )
}

function getClothingItemFromFullURL(url: string){
    return url.split('/').pop()
}

export default ProductPage

