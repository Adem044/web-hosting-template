import React from "react";
import styled from "styled-components";
import Illustration from "../assets/undraw_Scrum_board_re_wk7v.svg";

const Services = () => {
  return (
    <ServicesDiv>
      <div className="title">
        <h1>Our Services</h1>
        <p>
          Domain registration is the process of registering a domain name, which
          identifies one or more IP addresses with a name that is easier.
        </p>
      </div>
      <div className="services">
        <div>
          <img src={Illustration} />
          <h4>Domain Registration</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nibh
            eget pharetra leo cras purus rhoncus. Amet elementum, sollicitudin
            ornare tortor blandit nibh a.
          </p>
        </div>
        <div>
          <img src={Illustration} />
          <h4>Reseller Hosting</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nibh
            eget pharetra leo cras purus rhoncus. Amet elementum, sollicitudin
            ornare tortor blandit nibh a.
          </p>
        </div>
        <div>
          <img src={Illustration} />
          <h4>Shared Hosting</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nibh
            eget pharetra leo cras purus rhoncus. Amet elementum, sollicitudin
            ornare tortor blandit nibh a.
          </p>
        </div>
      </div>
    </ServicesDiv>
  );
};

export default Services;

const ServicesDiv = styled.div`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    text-align: center;
    padding: 0 50px 50px 50px;
    h1 {
      margin-bottom: 10px;
    }
    p {
      width: 75%;
      margin: auto;
      color: #393939;
    }
  }
  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    img {
      width: 90%;
      margin-bottom: 20px;
    }
    h4 {
      margin-bottom: 10px;
    }
    p {
      color: #454545;
      font-size: 14px;
    }
  }
  @media (max-width: 800px) {
    height: auto;
    .services {
      grid-template-columns: 1fr 1fr;

      div:last-of-type {
        grid-column: span 2;
        justify-self: center;
        width: calc(50% - 15px);
      }
    }
  }
  @media (max-width: 650px) {
    padding: 10px;

    .title {
      padding: 10px;
      p {
        width: 100%;
      }
    }
    .services {
      display: flex;
      flex-wrap: wrap;
      row-gap: 25px;

      div:last-of-type {
        width: auto;
      }

      h4 {
        text-align: center;
      }
    }
  }
`;
