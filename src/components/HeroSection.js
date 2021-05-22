import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  const changeDivBg = (on) => {
    switch (on) {
      case "focus":
        document.querySelector(".search-input").style.background =
          "linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)";
        break;
      case "blur":
        document.querySelector(".search-input").style.background = "#c4c4c4";
        break;
    }
  };

  return (
    <HeroPageDiv>
      <div className="title">
        <h1>
          <span>GET A</span> FREE DOMAIN
        </h1>
        <h5>We offer free domain name with our hosting packages</h5>
      </div>
      <div className="search-input">
        <input
          placeholder="Type in your dream domain"
          onBlur={() => changeDivBg("blur")}
          onFocus={() => changeDivBg("focus")}
        />
        <button>Search</button>
      </div>
    </HeroPageDiv>
  );
};

export default HeroSection;

let searchInputBg = "#c4c4c4";

const HeroPageDiv = styled.div`
  height: 100vh;
  padding-top: 60px;
  padding-left: 50px;
  padding-bottom: 60px;
  /* background: linear-gradient(90deg, #32ccbc, #90f7ec); */
  background: url("https://www.magnumwebcompany.com/wp-content/uploads/web-hosting-1.png");
  background-position: right center;
  background-repeat: no-repeat;
  background-color: black;
  mix-blend-mode: overlay;
  background-size: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  row-gap: 50px;
  color: white;
  .title {
    h1 {
      margin-bottom: 5px;

      span {
        background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
        border-radius: 10px;
        color: #000b33;
        padding: 0 5px;
      }
    }
    h5 {
      text-align: center;
      color: #666;
    }
  }
  .search-input {
    background-color: ${searchInputBg};
    /* border-radius: 50px; */
    padding: 5px 5px 5px 20px;
    display: flex;
    align-items: center;
    /* box-shadow: 0 2px 5px grey; */
    input {
      height: 100%;
      padding-right: 5px;
      width: 300px;
      background-color: inherit;
      outline: 0;
      border: 0;
      font-size: 18px;
      color: #000b33;
    }
    button {
      background-color: #000b33;
      border: 0;
      color: white;
      width: 100px;
      padding: 12.5px 0;
      /* border-radius: 50px; */
      font-size: 15px;
      font-weight: bold;
      &:hover {
        background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
        color: #000b33;
      }
    }
  }
  @media (max-width: 950px) {
    background: black;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 600px) {
    padding: 0;
    .search-input {
      padding: 5px;

      width: 90%;
      input {
        width: 75%;
        font-size: 1rem;
      }
      button {
        width: 25%;
      }
    }
  }
`;
