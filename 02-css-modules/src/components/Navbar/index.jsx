import { useState } from "react";
import Toggle from "./../Toggle/Toggle.jsx";
import styles from "./navbar.module.css";
import BasketEmpty from "../BasketEmpty.jsx";

export default function Navbar(props) {
  const [navVisible, setNavVisible] = useState(false);

  const changeNavNisible = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["navbar-icon"] + " navbar-icon"}></div>

      <button
        className={styles["mobile-nav-toggle"] + " mobile-nav-toggle"}
        aria-controls="primary-navigation"
        onClick={changeNavNisible}
      ></button>
      <nav
        className={styles["primary-navigation"]}
        data-visible={`${navVisible}`}
      >
        <li>
          <a href="#home">Inicio</a>
        </li>
        <div className={styles["cart"]}>
          <a href="#">
            <BasketEmpty className={styles["cart"]} />
          </a>
        </div>
        <div className={styles["toggle-btn"]}>
          <Toggle setClassName={props.setClassName} />
        </div>
      </nav>
    </header>
  );
}
