import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <div className="logo">
          <h1>Logo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h4>CONNECT</h4>
          <ul>
            <li>
              <i className="fab fa-facebook"></i>
              <a href="#">Facebook</a>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
              <a href="#">Twitter</a>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
              <a href="#">Instagram</a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>SERVICES</h4>
          <ul>
            <li>
              <a href="#">Reseller Hosting</a>
            </li>
            <li>
              <a href="#">Domain Names</a>
            </li>
            <li>
              <a href="#">Shared Hosting</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </FooterDiv>
      <CopyrightDiv>
        <h6>Copyright &#169; 2021 example.com - All Rights Reserved</h6>
      </CopyrightDiv>
    </>
  );
};

export default Footer;

const FooterDiv = styled.div`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-family: "Cairo", sans-serif;
  .logo {
    p {
      border-top: 1.5px solid #000b33;
      width: 60%;
    }
  }

  ul {
    /* padding: 0 5px 0 0;
    width: max-content; */
    /* border-right: 1px solid #000b33;
    border-top: 1px solid #000b33; */
  }

  h1 {
    margin-bottom: 10px;
  }
  h4 {
    width: max-content;
    margin-bottom: 5px;
    border-bottom: 1px solid #000b338f;
    color: #000b33;
  }
  li {
    font-size: small;
    a {
      color: #001974;
      &:hover {
        text-decoration: underline;
      }
    }
    i {
      color: #000b33;
      margin-right: 10px;
      font-size: initial;
    }
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1rem;
    .logo {
      grid-column: span 3;
      p {
        border-top: 1.5px solid #000b33;
        width: 100%;
      }
    }
  }
`;

const CopyrightDiv = styled.div`
  padding: 10px;
  text-align: center;
  background: radial-gradient(
    42.57% 8827.2% at 50% 50%,
    rgba(1, 19, 83, 0.86) 17.33%,
    #000b33 100%
  );
  color: white;
  letter-spacing: 1px;
`;
