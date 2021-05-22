import React from "react";
import styled from "styled-components";

const WhyUs = () => {
  return (
    <WhyUsDiv>
      <div>
        <h1>Why Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis morbi
          posuere viverra suscipit neque tellus convallis arcu lacus. Sit sed in
          rutrum erat enim. Morbi dolor sem malesuada mauris. Semper nullam arcu
          et mattis enim est, hendrerit. Tincidunt gravida egestas mauris
          scelerisque sagittis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis morbi
          posuere viverra suscipit neque tellus convallis arcu lacus. Sit sed in
          rutrum erat enim. Morbi dolor sem malesuada mauris.{" "}
        </p>
        <button>Read More</button>
      </div>
      <div className="img">
        <img src="https://pwt-yn98xose70xh.netdna-ssl.com/wp-content/uploads/2020/01/5.png" />
      </div>
    </WhyUsDiv>
  );
};

export default WhyUs;

const WhyUsDiv = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  padding: 50px;
  background: rgba(196, 196, 255, 0.7);
  column-gap: 30px;
  div {
    width: 50%;
    h1 {
      margin-bottom: 25px;
    }
  }
  .img {
    width: 50%;
    img {
      width: 100%;
    }
  }

  button {
    margin-top: 50px;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    border: 0;
    background: #000b33;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    &:hover {
      letter-spacing: 2px;
      border: 1.5px solid #00d9f5;
    }
  }
  @media (max-width: 800px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    background: center/65% no-repeat
      url("https://pwt-yn98xose70xh.netdna-ssl.com/wp-content/uploads/2020/01/5.png");
    background-color: rgba(196, 196, 255, 0.7);
    background-blend-mode: screen;
    div {
      width: 90%;
    }
    .img {
      display: none;
    }
  }
`;
