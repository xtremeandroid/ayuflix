import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Container } from "./Home";
import MovieCardTrending from "../components/MovieCardHorizontal";
import axios from "axios";
import { API_URL } from "../App";
import Pagination from "../components/Pagination";
import SkeletonCardHorizontal from "../components/SkeletonCardHorizontal";

const Explore = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedOption, setSelectedOption] = useState("movie");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getTrending();
  }, [selectedOption, page]);

  const selectedObject = {
    movie: "Movies",
    tv: "Series",
    both: "Movies and Series",
  };

  const getTrending = async () => {
    const mediaType = selectedOption === "both" ? "all" : selectedOption;
    const apiResponse = await axios.get(
      `${API_URL}/3/trending/${mediaType}/day?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }&page=${page}`
    );
    setTrendingMovies(apiResponse.data.results);
    setLastPage(apiResponse.data.total_pages);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setPage(1);
  };

  return (
    <Container>
      <Heading>
        <h2>Featured {selectedObject[selectedOption]} ! </h2>
        <OptionWrapper>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="movie"
              checked={selectedOption === "movie"}
              onChange={handleOptionChange}
            />
            Movies
          </OptionLabel>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="tv"
              checked={selectedOption === "tv"}
              onChange={handleOptionChange}
            />
            Series
          </OptionLabel>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="both"
              checked={selectedOption === "both"}
              onChange={handleOptionChange}
            />
            Both
          </OptionLabel>
        </OptionWrapper>
      </Heading>
      {loading ? (
        <MovieWrapper>
          {new Array(24).fill(0).map((element, index) => (
            <SkeletonCardHorizontal key={index} />
          ))}
        </MovieWrapper>
      ) : (
        <>
          <MovieWrapper>
            {trendingMovies.map((movie) => (
              <MovieCardTrending movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
          <Pagination lastPage={lastPage} page={page} setPage={setPage} />
        </>
      )}
    </Container>
  );
};

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.3em;
  min-height: 40px;
  align-items: center;
`;

const OptionLabel = styled.label`
  margin-right: 10px;
`;

const OptionInput = styled.input`
  margin-right: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  position: relative;
  outline: none;
  cursor: pointer;

  &:checked::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #e50914;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
  }

  &:hover {
    border-color: #e50914;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.3);
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

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: white;
    margin-right: 10px;
    font-size: 1.3em;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5em;
`;

export default Explore;
