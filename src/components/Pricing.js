import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  const [price, setPrice] = useState({
    basic: "$19.99",
    professional: "$24.99",
    master: "$39.99",
  });
  const slideTheCircle = () => {
    setToggle((state) => !state);
  };

  useEffect(() => {
    if (toggle) {
      setPrice({
        basic: "$119.99",
        professional: "$124.99",
        master: "$139.99",
      });
    } else {
      setPrice({
        basic: "$19.99",
        professional: "$24.99",
        master: "$39.99",
      });
    }
  }, [toggle]);

  return (
    <PricingDiv toggle={toggle}>
      <h1>Our Pricing</h1>
      <div className="mode">
        <span>Monthly</span>
        <span className="bar">
          <span className="circle" onClick={slideTheCircle}></span>
        </span>
        <span>Annually</span>
      </div>
      <div className="cards">
        <div className="basic">
          <span>Basic</span>
          <span className="price">{price.basic}</span>
          <span>Unlimited Bandwidth</span>
          <span>Unlimited Disk</span>
          <span>1 Domain</span>
          <button>Learn More</button>
        </div>
        <div className="professional">
          <span>Professional</span>
          <span className="price">{price.professional}</span>
          <span>Unlimited Bandwidth</span>
          <span>Unlimited Disk</span>
          <span>4 Domains</span>
          <button>Learn More</button>
        </div>
        <div className="master">
          <span>Master</span>
          <span className="price">{price.master}</span>
          <span>Unlimited Bandwidth</span>
          <span>Unlimited Disk</span>
          <span>Unlimited Domains</span>
          <button>Learn More</button>
        </div>
      </div>
    </PricingDiv>
  );
};

export default Pricing;

const PricingDiv = styled.div`
  padding: 50px;
  text-align: center;
  background-color: rgba(196, 196, 255, 0.7);
  /* background: no-repeat center
    url("https://www.kindpng.com/picc/m/436-4368492_abstract-wave-lines-graphic-design-hd-png-download.png"); */
  h1 {
    margin-bottom: 40px;
  }
  .mode {
    font-family: "Noto Sans JP", sans-serif;
    padding-bottom: 12.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    font-weight: bold;
    font-size: 13px;
    .bar {
      height: 20px;
      width: 50px;
      border-radius: 50px;
      background: ${({ toggle }) =>
        toggle
          ? "linear-gradient(90deg, #000B33 0%, rgba(0, 11, 51, 0.28) 100%)"
          : "#bbb"};
      display: inline-block;
      position: relative;
      .circle {
        cursor: pointer;
        position: absolute;
        top: 0;
        ${({ toggle }) =>
          toggle
            ? css`
                right: 0;
              `
            : css`
                left: 0;
              `}
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: white;
        border: 1px solid lightgray;
      }
    }
  }
  .cards {
    display: flex;
    justify-content: center;
    height: 400px;
    div {
      padding: 20px;
      display: flex;
      flex-direction: column;
      height: 90%;
      width: 250px;
      margin: auto 0;
      background: radial-gradient(
        42.57% 8827.2% at 50% 50%,
        rgba(1, 19, 83, 0.86) 17.33%,
        #000b33 100%
      );
      color: white;
      &:hover {
        transform: scaleY(1.02);
      }
      .price {
        font-size: 40px;
        font-weight: bold;
        font-family: "Open Sans", sans-serif;
      }
      span:first-of-type {
        border-bottom: 0;
        padding: 0;
      }
      span:nth-of-type(2) {
        padding-top: 0;
      }
      span {
        font-size: 12px;
        font-weight: bold;
        border-bottom: 1px solid grey;
        padding: 15px;
        letter-spacing: 1px;
        font-family: "Noto Sans JP", sans-serif;
      }
      button {
        height: 35px;
        border-radius: 10px;
        border: 0;
        margin-top: 30px;
        background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
        color: #000b33;
        &:hover {
          transform: scale(1.05);
          letter-spacing: 1px;
        }
      }
    }
    .basic {
      border-radius: 10px 0 0 10px;
      &:hover {
        box-shadow: -2px 2px 3px #000b33;
      }
    }
    .master {
      border-radius: 0 10px 10px 0;
      &:hover {
        box-shadow: 2px 2px 3px #000b33;
      }
    }
    .professional {
      background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
      height: 100%;
      border-radius: 10px;
      &:hover {
        box-shadow: 1px 1px 3px #00d9f5, -1px -1px 3px #00f5a0;
      }
      button {
        margin-top: 50px;
        background: radial-gradient(
          42.57% 8827.2% at 50% 50%,
          rgba(1, 19, 83, 0.86) 17.33%,
          #000b33 100%
        );
        color: white;
      }
      span {
        border-bottom: 1px solid white;
        color: #000b33;
      }
    }
  }
  @media (max-width: 650px) {
    .cards {
      flex-direction: column;
      height: auto;
      align-items: center;
      row-gap: 20px;
      div {
        width: 75%;
      }
      .basic,
      .professional,
      .master {
        border-radius: 10px;
      }
    }
  }
`;
