import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const NavigateTo = useNavigate();
  return (
    <Wrap onClick={() => NavigateTo(`/movie/${movie.imdbID}`)}>
      <Poster
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
      />
      <Details>
        <Title>{movie.Title}</Title>
        <Year>{movie.Year}</Year>
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
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 8px;
  color: #a1a5b0;
`;
const Year = styled.div`
  color: #a1a5b0;
  font-size: 14px;
  font-weight: 400;
`;
export default MovieCard;
