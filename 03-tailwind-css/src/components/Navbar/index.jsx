import { useState } from "react";
import Toggle from "./../Toggle/Toggle.jsx";
import "./navbar.css";
import BasketEmpty from "../BasketEmpty.jsx";

export default function Navbar(props) {
  const [navVisible, setNavVisible] = useState(false);

  const changeNavNisible = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header className="flex place-content-between bg-[url('./../../assets/sh-icon-dark.jpeg')] w-[300px] bg-no-repeat bg-contain transition-[background-image] duration ease-[ease-in-out]">
      <div className="navbar-icon bg-[url('./../../assets/sh-icon-dark.jpeg')] w-[300px] bg-no-repeat bg-contain transition-[background-image] duration ease-[ease-in-out];"></div>

      <button
        className="mobile-nav-toggle hidden "
        aria-controls="primary-navigation"
        onClick={changeNavNisible}
      ></button>
      <nav className="flex items-center " data-visible={`${navVisible}`}>
        <li className="h-full flex flex-col relative transition-[0.5s] leading-[74px] after:absolute after:content-['_'] after:w-full after:h-1 after:opacity-0 after:transition-[0.5s] after:transition-[background] after:duration-[0.5s] after:left-0 after:bottom-0 hover:after:translate-y-0 hover:after:opacity-100 hover:after:scale-100">
          <a
            href="#home"
            className="h-full w-full min-w-full align-middle no-underline font-[bolder] text-[1.2rem] text-[color:var(--navbar-text-color)] px-5 py-0"
          >
            Inicio
          </a>
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
