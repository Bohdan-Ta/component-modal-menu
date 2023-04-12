import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;  
    }
    ul{
list-style-type: none;
    }
    li{
        margin-top: 1rem;
    }
    a {
text-decoration: none;
color: black;
font-size: 1.5rem;
transition: color 300ms;
:hover {
    color: lightblue;
    
}

    }
`;

const MenuIcon = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: button;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.25rem;
    height: 0.33rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: transform 300ms;
    margin-bottom: 1px;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(135deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-135deg)" : "rotate(0)")};
    }
  }
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 25%;
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
`;

const ModalMenu = () => {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Global />
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <a href="#" onClick={() => showNav(!nav)}>
              HOME
            </a>
          </li>
          <li>
            <a href="#" onClick={() => showNav(!nav)}>
              BLOG
            </a>
          </li>
          <li>
            <a href="#" onClick={() => showNav(!nav)}>
              JOBS
            </a>
          </li>
          <li>
            <a href="#" onClick={() => showNav(!nav)}>
              CONTACTS
            </a>
          </li>
        </ul>
      </MenuLinks>
    </div>
  );
};

export default ModalMenu;
