import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./Home";
import Search from "../components/Search";
import { styled } from "styled-components";
import MovieCard from "../components/MovieCardVertical";
import axios from "axios";
import { API_URL } from "../App";
import SkeletonCardVertical from "../components/SkeletonCardVertical";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovies(params.query);
  }, [params.query]);

  const getMovies = async () => {
    const apiResponse = await axios.get(
      `${API_URL}/3/search/multi?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }&language=en-US&query=${params.query}`
    );
    setMovies(apiResponse.data.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container1>
      <Content>
        <Heading>Search Movies</Heading>
        <Search />

        {movies && movies.length > 0 ? (
          loading ? (
            <MovieWrapper>
              {new Array(12).fill(0).map((element, index) => (
                <SkeletonCardVertical key={index} />
              ))}
            </MovieWrapper>
          ) : (
            <MovieWrapper>
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </MovieWrapper>
          )
        ) : (
          <MovieWrapper>
            <h2>No Movies Found</h2>
          </MovieWrapper>
        )}
      </Content>
    </Container1>
  );
};

const Container1 = styled(Container)`
  align-items: center;
  justify-content: center;
  display: flex;
`;

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
  justify-content: space-evenly;
  align-items: flex-start;

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
