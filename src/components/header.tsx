import "../CSS/header.css"
import { Link } from "react-router-dom"
import ShoppingCart from "./shoppingCart"

function Header(){


    return (
        <header>
            <div className="flexHeaderLeft">
                <Link to="/"><h1>Hello</h1></Link>
                <Link to="/productspage"><h3>Produkter</h3></Link>
            </div>
            <div className="flexHeaderRight">
                <ShoppingCart />
                <Link to="/admin"><h3>Admin</h3></Link>
            </div>
        </header>
    )
}

export default Header