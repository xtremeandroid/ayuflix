import React, { useEffect, useState } from "react";
import { Container } from "./Home";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
// const API_URL = `https://www.omdbapi.com/?apikey=${
//   import.meta.env.VITE_APP_API_KEY
// }`;

const API_URL = "https://api.themoviedb.org";

const SeriesDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const apiResponse = await axios.get(
      `${API_URL}/3/tv/${params.id}?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }`
    );
    console.log(apiResponse.data);
    setMovieDetails(apiResponse.data);
  };
  return (
    <Container1 background={movieDetails.backdrop_path}>
      <Content>
        <Poster
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`
              : "https://via.placeholder.com/400"
          }
        />
      </Content>
      <Content>
        <Detail>
          <DetailCard>
            <h3>
              <span>User Ratings : </span>
              {Math.floor(movieDetails.vote_average)}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Title : </span>
              {movieDetails.original_name}
            </h3>
          </DetailCard>

          <DetailCard>
            <h3>
              <span>Year of Release : </span>
              {movieDetails.first_air_date}
            </h3>
          </DetailCard>

          <DetailCard>
            <h3>
              <span>Genre : </span>
              {movieDetails.genres && movieDetails.genres.length > 0 ? (
                movieDetails.genres.map((genre, index) => (
                  <React.Fragment key={index}>
                    {genre.name}
                    {index !== movieDetails.genres.length - 1 && ", "}
                  </React.Fragment>
                ))
              ) : (
                <span>No genre available</span>
              )}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Plot : </span>
              {movieDetails.overview}
            </h3>
          </DetailCard>
          <DetailCard>
            <h3>
              <span>Watch Now : </span>
              <a href={movieDetails.homepage}> {movieDetails.original_name}</a>
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
  position: relative;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) =>
      props.background
        ? `url(https://image.tmdb.org/t/p/original/${props.background})`
        : "black"};
    background-size: cover;
    filter: blur(10px);
    z-index: -1;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    /* flex-wrap: wrap; */
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

  @media only screen and (max-width: 479px) {
    /* flex-wrap: wrap; */
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
    margin: 0;
  }

  @media only screen and (max-width: 479px) {
    margin: 0;
  }
`;

const Poster = styled.img`
  width: 400px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    max-width: 340px;
  }

  @media only screen and (max-width: 479px) {
    max-width: 340px;
  }
`;

const Detail = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  margin-left: 50px;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
    padding: 10%;
    max-width: 350px;
  }

  @media only screen and (max-width: 479px) {
    margin-left: 0;
    margin-top: 30px;
    padding: 10px;
    max-width: 350px;
  }
`;

const DetailCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 50px;
  margin: 20px;

  span {
    margin-right: 5px;
  }

  a {
    color: white;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;

    h3 {
      font-size: 1em;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 479px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;

    h3 {
      font-size: 1em;
      margin-bottom: 10px;
    }
  }
`;

export default SeriesDetails;
