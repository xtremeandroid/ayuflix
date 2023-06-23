import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./Home";
import Search from "../components/Search";
import { styled } from "styled-components";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_API_KEY
}`;

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    getMovies(params.query);
  }, [params.query]);

  const getMovies = async (title) => {
    const apiResponse = await axios.get(`${API_URL}&s=${title}`);
    setMovies(apiResponse.data.Search);
  };

  return (
    <Container>
      <Content>
        <Heading>Search Movies</Heading>
        <Search />

        {movies ? (
          <MovieWrapper>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </MovieWrapper>
        ) : (
          <MovieWrapper>
            <h2>No Movies Found</h2>
          </MovieWrapper>
        )}
      </Content>
    </Container>
  );
};

const Heading = styled.h2`
  color: red;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieWrapper = styled.div`
  margin-top: 50px;
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

export default SearchPage;
