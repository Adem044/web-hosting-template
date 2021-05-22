import React from "react";
import styled from "styled-components";

const GetInTouch = () => {
  return (
    <GetInTouchDiv>
      <h2>Looking for a custom solution ?</h2>
      <p>
        Our technicians can provide you with the best custom made solutions on
        the market, no matter whether you’re a small business or large
        entreprise.
      </p>
      <button>
        <i className="fas fa-envelope"></i>GET IN TOUCH
      </button>
    </GetInTouchDiv>
  );
};

export default GetInTouch;

const GetInTouchDiv = styled.div`
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: radial-gradient(
    42.57% 8827.2% at 50% 50%,
    rgba(1, 19, 83, 0.86) 17.33%,
    #000b33 100%
  );
  h2 {
    margin-bottom: 7.5px;
    color: #00d9f5;
  }
  p {
    margin-bottom: 40px;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
  }
  button {
    width: max-content;
    padding: 0 2rem;
    height: 35px;
    border-radius: 10px;
    background: #000b33;
    border: 1.5px solid #00d9f5;
    font-weight: bold;
    color: white;
    &:hover {
      transform: scale(1.05);
    }
    i {
      margin-right: 7.5px;
      color: #00d9f5;
    }
  }
`;
