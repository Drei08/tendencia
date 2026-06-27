import "./NavBar.css";

import {Link} from "react-router-dom";

import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      {/* <h2>Tendência</h2> */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  )
}

export default NavBar