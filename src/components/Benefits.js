import React from "react";
import styled from "styled-components";
import MoneyIcon from "../assets/iconfinder_business_finance_money-15_2784210.svg";
import CPUIcon from "../assets/iconfinder_processor__computer__microchip__cpu__chip__device__frequency_2318040.svg";
import ClockIcon from "../assets/iconfinder_clock-time-ticker-times-hour_3643779.svg";
import LockIcon from "../assets/iconfinder_Email_email_envelope_message_padlock_locked_secured_6590506.svg";
import GearIcon from "../assets/iconfinder_icon-ios7-gear_211751.svg";
import ChatIcon from "../assets/iconfinder_66-wechat_1181189.svg";
const Benefits = () => {
  return (
    <BenefitsDiv>
      <h1>Benefits</h1>
      <div className="cards">
        <div className="card">
          <img src={MoneyIcon}></img>
          <h4>Moneys Back Guarantee</h4>
          <p>
            Fringilla arcu tincidunt praesent cras aliquet suspendisse. Magnis
            eget neque leo egestas ipsum. Tortor turpis tortor, ultricies velit.
            Scelerisque suspendisse id blandit aliquam tincidunt id libero ut.
          </p>
        </div>
        <div className="card">
          <img src={CPUIcon}></img>
          <h4>High Grade Entreprise Hardware</h4>
          <p>
            Fringilla arcu tincidunt praesent cras aliquet suspendisse. Magnis
            eget neque leo egestas ipsum. Tortor turpis tortor, ultricies velit.
            Scelerisque suspendisse id blandit aliquam tincidunt id libero ut.
          </p>
        </div>
        <div className="card">
          <img src={ClockIcon}></img>
          <h4>99.9% Uptime Guarantee</h4>
          <p>
            Fringilla arcu tincidunt praesent cras aliquet suspendisse. Magnis
            eget neque leo egestas ipsum. Tortor turpis tortor, ultricies velit.
            Scelerisque suspendisse id blandit aliquam tincidunt id libero ut.
          </p>
        </div>
        <div className="card">
          <img src={LockIcon}></img>
          <h4>Data Protection</h4>
          <p>
            Fringilla arcu tincidunt praesent cras aliquet suspendisse. Magnis
            eget neque leo egestas ipsum. Tortor turpis tortor, ultricies velit.
            Scelerisque suspendisse id blandit aliquam tincidunt id libero ut.
          </p>
        </div>
        <div className="card">
          <img src={GearIcon}></img>
          <h4>Easy to Setup</h4>
          <p>
            Fringilla arcu tincidunt praesent cras aliquet suspendisse. Magnis
            eget neque leo egestas ipsum. Tortor turpis tortor, ultricies velit.
            Scelerisque suspendisse id blandit aliquam tincidunt id libero ut.
          </p>
        </div>
        <div className="card">
          <img src={ChatIcon}></img>
          <h4>24/7 Online Support</h4>
          <p>
            Fringilla arcu tincidunt praesent cras aliquet suspendisse. Magnis
            eget neque leo egestas ipsum. Tortor turpis tortor, ultricies velit.
            Scelerisque suspendisse id blandit aliquam tincidunt id libero ut.
          </p>
        </div>
      </div>
    </BenefitsDiv>
  );
};

export default Benefits;

const BenefitsDiv = styled.div`
  background: rgba(196, 196, 255, 0.3);
  padding: 50px;
  h1 {
    margin-bottom: 30px;
    text-align: center;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    .card {
      img {
        height: 75px;
        margin-bottom: 10px;
      }
      h4 {
        margin-bottom: 10px;
      }
      p {
        color: #393939;
      }
    }
  }
  @media (max-width: 800px) {
    .cards {
      grid-template-columns: 1fr 1fr;
      .card {
        text-align: center;
      }
    }
  }
  @media (max-width: 650px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
`;
