import "../CSS/header.css"
import { Link } from "react-router-dom"
import ShoppingCart from "./shoppingCart"


function Header(){


    return (
        <header>
            <div className="flexHeaderLeft">
                <Link to="/"><span className="headerSpan">Home</span></Link>
                <Link to="/productspage"><span className="headerSpan">Produkter</span></Link>
            </div>
            <div className="flexHeaderRight">
                <ShoppingCart />
                <Link to="/admin"><span className="headerSpan">Admin</span></Link>
            </div>
        </header>
    )
}

export default Header