import React, { useEffect, useState } from "react";
import { setTheme } from "./../../utils/themes.js";
import "./toggle.css";
import styled, { keyframes } from "styled-components";

const reverse = keyframes`
  0% {
    left: 47px;
    width: 40px;
  }
  60% {
    left: 5px;
    width: 80px;
  }
  100% {
    left: 5px;
  }
`;

const switchKF = keyframes`

  0% {
    left: 6px;
  }
  60% {
    left: 7px;
    width: 80px;
  }
  100% {
    left: 47px;
    width: 40px;
  }
`;

const ToggleCheckbox = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
`;

const Togglelabel = styled.label`
  ${ToggleCheckbox}:focus + & {
    outline: solid 3px var(--button-border);
    transition: outline 100ms ease-in;
  }

  width: 100px;
  height: 54px;
  background: var(--indigo-color);
  border-radius: 100px;
  border: 3px solid var(--indigo-border);
  display: flex;
  position: relative;
  transition: all 350ms ease-in;
  color: var(--indigo-color);

  ${ToggleCheckbox}:checked + & {
    background: var(--blue-color);
    color: var(--blue-color);
    border-color: var(--blue-border);
  }

  ${ToggleCheckbox}:checked + &:before {
    animation-name: ${reverse};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    transition: all 360ms ease-in;
    background: var(--yellow-background);
    border-color: var(--yellow-border);
  }

  &:before {
    animation-name: switch;
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    content: "";
    width: 40px;
    height: 40px;
    border: 3px solid var(--gray-border);
    top: 4px;
    left: 40px;
    position: absolute;
    border-radius: 40px;
    background: white;
  }

  &:after {
    transition-delay: 0ms;
    transition: all 250ms ease-in;
    position: absolute;
    content: "";
    box-shadow:
      var(--gray-dots) -14px 0 0 1px,
      var(--gray-dots) -22px 12px 0 -1px;
    left: 80px;
    top: 10px;
    width: 6px;
    height: 6px;
    background: transparent;
    border-radius: 50%;
    opacity: 1;
  }

  ${ToggleCheckbox}:checked + &:after {
    transition-delay: 50ms;
    opacity: 0;
  }
`;

const ContainerToggle = styled.div`
  display: grid;
  place-items: center;
  min-height: 60px;
  position: relative;
  grid-area: toggle;
  margin: 00px;
`;

const ToggleLabelBackground = styled.span`
  ${ToggleCheckbox}:checked + ${Togglelabel} & {
    width: 5px;
    left: 65px;
    top: 22px;
  }

  ${ToggleCheckbox}:checked + ${Togglelabel} &:before {
    top: -4px;
    left: -5px;
    width: 20px;
    height: 5px;
  }

  ${ToggleCheckbox}:checked + ${Togglelabel} &:after {
    top: 3px;
    width: 20px;
    height: 5px;
    left: -10px;
  }

  border-radius: 5px;
  position: relative;
  background: white;
  left: 32px;
  width: 6px;
  transition: all 150ms ease-in;
  top: 25px;
  height: 4px;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    top: -15px;
    border-radius: 5px;
    background: white;
    left: -20px;
    transition: all 150ms ease-in;
  }

  &:after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    left: -20px;
    top: 10px;
    border-radius: 5px;
    background: white;
    transition: all 150ms ease-in;
  }
`;
function Toggle({ setClassName }) {
  const darkLabel = "color mode toggle, dark mode";
  const lightLabel = "color mode toggle, light mode";
  // false = dark mode because of the way I wrote the CSS
  const [active, setActive] = useState(false);
  // the opposite, for screenreaders
  const [ariaActive, setAriaActive] = useState(true);
  const [ariaLabel, setAriaLabel] = useState(darkLabel);
  const theme = localStorage.getItem("theme");

  const changeThemeAndToggle = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light", setClassName);
      setActive(true);
      setAriaActive(false);
      setAriaLabel(lightLabel);
    } else {
      setTheme("theme-dark", setClassName);
      setActive(false);
      setAriaActive(true);
      setAriaLabel(darkLabel);
    }
  };

  const handleOnClick = () => {
    changeThemeAndToggle();
  };

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      changeThemeAndToggle();
    }
  };

  useEffect(() => {
    if (theme === "theme-dark") {
      setActive(false);
      setAriaActive(true);
      setAriaLabel(darkLabel);
    } else if (theme === "theme-light") {
      setActive(true);
      setAriaActive(false);
      setAriaLabel(lightLabel);
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-light") {
      setTheme("theme-light", setClassName);
      setActive(true);
      setAriaActive(false);
      setAriaLabel(lightLabel);
    } else {
      setTheme("theme-dark", setClassName);
      setActive(false);
      setAriaActive(true);
      setAriaLabel(darkLabel);
    }
  }, []);

  return (
    <ContainerToggle title="color mode toggle">
      <ToggleCheckbox
        role="switch"
        aria-checked={ariaActive}
        onKeyDown={handleKeypress}
        type="checkbox"
        id="toggle"
        onClick={handleOnClick}
        checked={active}
        readOnly
      />
      <Togglelabel htmlFor="toggle" aria-label={ariaLabel}>
        <ToggleLabelBackground></ToggleLabelBackground>
      </Togglelabel>
    </ContainerToggle>
  );
}

export default Toggle;
