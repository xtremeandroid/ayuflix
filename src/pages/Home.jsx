import React from "react";
import { styled } from "styled-components";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCardTrending from "../components/MovieCardHorizontal";
import { API_URL } from "../App";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const apiResponse = await axios.get(
      `${API_URL}/3/trending/all/day?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }`
    );
    setMovies(apiResponse.data.results);
  };
  return (
    <Container>
      <ContentWrapper>
        <Content1>
          <h1>
            Search for the movies you love with AYU<span>FLIX</span>
          </h1>
          <p>
            We love movies just as much as you do. Search and learn about the
            best movies for free.
          </p>
          <Search />
        </Content1>
        <Content2>
          <Banner>
            <img src="./movie_banner.jpg" alt="banner" />
          </Banner>
        </Content2>
      </ContentWrapper>
      <Content3>
        <h2>Trending Shows and Movies</h2>
        <MovieWrapper>
          {movies.map((movie) => (
            <MovieCardTrending movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </Content3>
    </Container>
  );
};

export const Container = styled.div`
  min-height: calc(100vh - 250px);
  padding: 20px;
  overflow-x: hidden;
  margin-top: 62px;
  span {
    color: red;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Content3 = styled.div`
  h2 {
    margin-top: 20px;
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

const MovieWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin-top: 50px;
    color: red;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (max-width: 479px) {
    justify-content: center;
  }
`;

export default Home;
