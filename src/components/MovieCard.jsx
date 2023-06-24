import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const NavigateTo = useNavigate();
  return (
    <Wrap
      key={movie.id}
      onClick={
        movie.media_type === "tv"
          ? () => NavigateTo(`/tv/${movie.id}`)
          : () => NavigateTo(`/movie/${movie.id}`)
      }
    >
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
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
  overflow: hidden;
  width: 221px;
  height: 424px;
  margin: 20px;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 222px !important;
  height: 298px;
`;

const Details = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 1.1em;
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
export default MovieCard;
