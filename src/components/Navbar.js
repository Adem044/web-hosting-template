import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const ulRef = useRef(null);
  const handleClick = () => {
    // ulRef.current.style.display = "flex";
    setShowDropDown((state) => !state);
  };
  return (
    <Nav showDropDown={showDropDown}>
      <div>
        <h1>Hosting</h1>
      </div>
      <ul ref={ulRef}>
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#hosting">Hosting</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#domain">Domain</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
      <div className="menu" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  * {
    color: white;
    font-family: "Cairo", sans-serif;
  }

  z-index: 100;
  position: fixed;
  width: 100vw;
  display: grid;
  padding: 10px 50px 0 50px;
  height: 60px;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  background: radial-gradient(
    42.57% 8827.2% at 50% 50%,
    rgba(1, 19, 83, 0.86) 17.33%,
    #000b33 100%
  );
  box-shadow: 0px 2px 5px #000b3351;
  ul {
    height: 100%;
    justify-self: center;
    display: flex;
    column-gap: 20px;
    li {
      height: 100%;
      display: flex;
      align-items: center;

      a {
        letter-spacing: 1px;
        padding: 0 5px;
        &:active {
          transform: translateY(2px);
        }
      }

      &:hover {
        /* background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%); */
        a:not(.active a) {
          /* color: #000b33; */
          text-decoration: underline;
        }
      }
    }
    .active {
      background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
      a {
        color: #000b33;
      }
    }
  }
  div:nth-of-type(2) {
    display: flex;
    column-gap: 20px;
    button {
      width: 90px;
      padding: 4px 0;
      border-radius: 10px;
      &:first-of-type {
        background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
        border: 0;
        color: #000b33;
        &:hover {
          filter: brightness(90%);
        }
      }
      background-color: transparent;
      border: 1.5px solid #00d9f5;
      &:hover {
        font-weight: bold;
      }
    }
  }
  .menu {
    display: none;
  }

  @media (max-width: 850px) {
    padding: 10px 20px 0 20px;
    ul {
      column-gap: 10px;
    }
  }
  @media (max-width: 750px) {
    ${({ showDropDown }) =>
      showDropDown
        ? css`
            flex-direction: column;
            align-items: center;
            height: auto;
            row-gap: 15px;
            ul {
              flex-direction: column;
              align-items: center;
              row-gap: 15px;
            }
            .menu {
              span:first-of-type {
                transform: rotate(45deg);
              }
              span:nth-of-type(2) {
                transform: rotate(-45deg) translate(5px, -5px);
              }
              span:last-of-type {
                display: none;
              }
            }
          `
        : css`
            justify-content: space-between;
            ul {
              display: none;
            }
            div:nth-of-type(2) {
              display: none;
            }
          `}
    padding: 10px 30px 10px 20px;

    display: flex;

    .menu {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      cursor: pointer;
      span {
        width: 30px;
        height: 3px;
        background-color: grey;
      }
    }
  }
`;
