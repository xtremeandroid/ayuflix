import React from "react";
import { styled } from "styled-components";
import Search from "../components/Search";

const Home = () => {
  return (
    <Container>
      <Content1>
        <h1>
          Search for the movies you love with AYU<span>FLIX</span>
        </h1>
        <p>
          We love movies just as much as you do. Search and learn about the best
          movies for free.
        </p>
        <Search />
      </Content1>
      <Content2>
        <Banner>
          <img src="./movie_banner.jpg" alt="banner" />
        </Banner>
      </Content2>
    </Container>
  );
};

export const Container = styled.div`
  min-height: calc(100vh - 250px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-x: hidden;
  span {
    color: red;
  }
`;

const Content1 = styled.div`
  flex: 1;
  max-width: 400px;

  p {
    margin-top: 20px;
    font-size: 1.2em;
    line-height: 2;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 2.5em;
  }
`;

const Content2 = styled.div`
  flex: 1;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 479px) {
    display: none;
  }
`;

const Banner = styled.div`
  margin: 0 20px;
  padding: 20px;
  img {
    width: 100%;
    border-radius: 15px;
  }
`;
export default Home;
