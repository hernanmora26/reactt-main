import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
            <img className="logo" src="./img/logopng.png" alt="logo toc cell"></img>
            
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/2`}> Celulares </NavLink>
                </li>

                <li>
                  <NavLink to={`/categoria/3`}> Accesorios </NavLink>
                </li>

            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar