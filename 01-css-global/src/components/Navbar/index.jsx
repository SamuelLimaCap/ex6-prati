import { useState } from "react";
import Toggle from "./../Toggle/Toggle.jsx";
import BasketEmpty from "../BasketEmpty.jsx";

export default function Navbar(props) {
  const [navVisible, setNavVisible] = useState(false);

  const changeNavNisible = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header>
      <div className="navbar-icon"></div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={changeNavNisible}
      ></button>
      <nav className="primary-navigation" data-visible={`${navVisible}`}>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <div className="cart">
          <a href="#">
            <BasketEmpty className="cart" />
          </a>
        </div>
        <div className="toggle-btn">
          <Toggle setClassName={props.setClassName} />
        </div>
      </nav>
    </header>
  );
}
