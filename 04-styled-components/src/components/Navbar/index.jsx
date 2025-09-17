import { useState } from "react";
import Toggle from "./../Toggle/Toggle.jsx";
import BasketEmpty from "../BasketEmpty.jsx";
import styled from "styled-components";
import shIconDark from "./../../assets/sh-icon-dark.jpeg";
import shIconLight from "./../../assets/sh-icon-light.jpeg";
import listDark from "./../../assets/list-dark.svg";
import listLight from "./../../assets/list-light.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 100;

  background: var(--navbar-color);
  color: var(--text-color);
  opacity: 0.9;

  --nav-focus-color: "";

  @media (max-width: 400px) {
    position: fixed;
    width: 100vw;
    top: 0;
    height: 80px;
  }
`;

const NavbarIcon = styled.div`
  background-image: url(${shIconDark});
  width: 300px;
  background-repeat: no-repeat;
  background-size: contain;

  transition: background-image 150ms ease-in-out;
  -webkit-transition: background-image 150ms ease-in-out;

  #root:has(> div.theme-light) header > & {
    background-image: url("${shIconLight}");
    width: 300px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media (max-width: 400px) {
    background-image: url(${shIconDark});
    width: 300px;
    background-repeat: no-repeat;
    background-size: contain;

    transition: background-image 150ms ease-in-out;
    -webkit-transition: background-image 150ms ease-in-out;
  }
`;

const MobileNavToggleBtn = styled.button`
  display: none;

  @media (max-width: 400px) {
    display: block;
    position: absolute;
    z-index: 999999;
    background-image: url("${listDark}");
    background-color: transparent;
    color: white;
    background-repeat: no-repeat;
    background-size: 100%;
    color: white;
    border: 0;
    width: 2rem;
    aspect-ratio: 1;
    top: 25px;
    right: 2rem;

    #root:has(div.theme-light) & {
      background-image: url("${listLight}");
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    z-index: 100000;
    position: fixed;
    top: 80px;
    left: 00vw;
    right: 0;
    background: steelblue;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    background: var(--navbar-color);
    backdrop-filter: blur(1rem);

    transform: translateX(100%);

    &[data-visible="true"] {
      visibility: visible;
      transform: translateX(0%);
      opacity: 1;
      transition: opacity 0.3s;
    }
    &[data-visible="false"] {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Li = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
  transition: 0.5s;
  line-height: 74px;

  &::after {

    position: absolute;
    left: 0;
    bottom: 0;
    content: " ";
    background: var(--focus-color);
    width: 100%;
    height: 4px;
    opacity: 0;

    transition: 0.5s;
    transition: background 0.5s;
  }

  &:hover::after {
    transform: scale(1) translateY(0);
    background: var(--focus-color);
    opacity: 1;
  }

  &:has(a:hover):hover, :hover {
    background-color: var(--focus-color);
  }
  @media (max-width: 400px) {
      width: 100%;
      text-align: center;

    &:focus::after {
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    @supports (backdrop-filter: blur(1rem)) {
        background: hsl(0, 0%, 0%, 0.75);
        background: var(--navbar-color);
  }
`;

const A = styled.a`
  height: 100%;
  width: 100%;
  min-width: 100%;
  vertical-align: middle;
  padding: 0px 20px;

  text-decoration: none;
  font-weight: bolder;
  font-size: 1.2rem;
  color: var(--navbar-text-color);

  @media (max-width: 400px) {
    padding: 0 2em;
  }
`;

const Cart = styled.div`
  width: 070px;
  height: 22px;

  a svg {
    fill: var(--navbar-text-color);
    width: 070px;
    height: 22px;
  }
  @media (max-width: 400px) {
    margin: 20px 0 20px 0;
  }
`;

const WithinCart = styled.a`
  width: 070px;
  height: 22px;
`;

const ToggleBtn = styled.div`
  @media (max-width: 400px) {
    padding: 0 2em;
  }
`;

export default function Navbar(props) {
  const [navVisible, setNavVisible] = useState(false);

  const changeNavNisible = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Header>
      <NavbarIcon />

      <MobileNavToggleBtn onClick={changeNavNisible} />
      <Nav data-visible={`${navVisible}`}>
        <Li>
          <A href="#home">Inicio</A>
        </Li>
        <Cart>
          <WithinCart href="#">
            <BasketEmpty className="cart" />
          </WithinCart>
        </Cart>
        <ToggleBtn>
          <Toggle setClassName={props.setClassName} />
        </ToggleBtn>
      </Nav>
    </Header>
  );
}
