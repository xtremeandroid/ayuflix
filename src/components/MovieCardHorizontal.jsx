import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieCardTrending = ({ movie }) => {
  const NavigateTo = useNavigate();
  return (
    <Wrap
      onClick={
        movie.media_type === "tv"
          ? () => NavigateTo(`/tv/${movie.id}`)
          : () => NavigateTo(`/movie/${movie.id}`)
      }
    >
      <Poster
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : "https://via.placeholder.com/400"
        }
      />
      <Details>
        <Title>{movie.name ? movie.name : movie.title}</Title>
        <Year>
          {movie.first_air_date
            ? movie.first_air_date.slice(0, 4)
            : movie.release_date
            ? movie.release_date.slice(0, 4)
            : ""}
        </Year>
      </Details>
    </Wrap>
  );
};

const Wrap = styled.div`
  color: black;
  background-color: #14141a;
  border-radius: 20px;
  /* overflow: hidden; */
  max-width: 290px;
  min-height: 268px;
  margin: 10px;
  cursor: pointer;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 479px) {
    max-width: 100%;
  }
`;

const Poster = styled.img`
  width: 100%;
`;

const Details = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 8px;
  color: #a1a5b0;
`;
const Year = styled.div`
  color: #a1a5b0;
  font-size: 1.1em;
  font-weight: 400;
`;

export default MovieCardTrending;
