import React from "react";
import styled from "styled-components";

const WhoWeAre = () => {
  return (
    <WhoWeAreDiv>
      <div className="img">
        <img src="https://pwt-yn98xose70xh.netdna-ssl.com/wp-content/uploads/2020/01/5.png" />
      </div>
      <div>
        <h1>Who We Are</h1>
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
      </div>
    </WhoWeAreDiv>
  );
};

export default WhoWeAre;

const WhoWeAreDiv = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  padding: 50px;
  background: rgba(196, 196, 255, 0.3);
  column-gap: 30px;
  .img {
    width: 50%;
    img {
      width: 100%;
    }
  }
  div {
    width: 50%;
  }
  h1 {
    margin-bottom: 25px;
  }
  @media (max-width: 800px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    background: center/65% no-repeat
      url("https://pwt-yn98xose70xh.netdna-ssl.com/wp-content/uploads/2020/01/5.png");
    background-color: rgba(196, 196, 255, 0.3);
    background-blend-mode: screen;
    div {
      width: 90%;
    }
    .img {
      display: none;
    }
  }
`;
