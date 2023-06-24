import React, { useEffect, useState } from "react";
import { Container } from "./Home";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_API_KEY
}`;

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    getMovies(params.id);
  }, []);

  const getMovies = async (id) => {
    const apiResponse = await axios.get(`${API_URL}&i=${id}`);
    setMovieDetails(apiResponse.data);
    console.log(apiResponse.data);
  };

  return (
    <Container1>
      <Content>
        <Poster
          src={
            movieDetails.Poster !== "N/A"
              ? movieDetails.Poster
              : "https://via.placeholder.com/400"
          }
        />
      </Content>
      <Content>
        <Detail>
          <DetailCard>
            <h3>
              <span>IMDb Rating : </span>
              {movieDetails.imdbRating}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Title : </span>
              {movieDetails.Title}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Year of Release : </span>
              {movieDetails.Year}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Genre : </span>
              {movieDetails.Genre}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Plot : </span> {movieDetails.Plot}
            </h3>
          </DetailCard>
        </Detail>
      </Content>
    </Container1>
  );
};

const Container1 = styled(Container)`
  align-items: center;
  justify-content: left;
  display: flex;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

  @media only screen and (max-width: 479px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-left: 0;
  }

  @media only screen and (max-width: 479px) {
    margin-left: 0;
  }
`;

const Poster = styled.img`
  width: 250px !important;
  height: 340px;
`;

const Detail = styled.div`
  margin-left: 50px;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-left: 25px;
    margin-top: 25px;
  }

  @media only screen and (max-width: 479px) {
    margin-left: 25px;
    margin-top: 25px;
  }
`;

const DetailCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin: 20px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
  }

  @media only screen and (max-width: 479px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
  }
`;

export default MovieDetails;
