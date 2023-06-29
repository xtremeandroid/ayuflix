import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../App";

const SeriesDetails = () => {
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [castDetails, setCastDetails] = useState([]);
  const params = useParams();
  const [directorName, setDirectorName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetails();
    getCastDetails();
  }, []);

  const getDetails = async () => {
    const apiResponse = await axios.get(
      `${API_URL}/3/tv/${params.id}?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }`
    );
    setSeriesDetails(apiResponse.data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const getCastDetails = async () => {
    const apiResponse = await axios.get(
      `${API_URL}/3/tv/${params.id}/credits?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }`
    );
    const castData = apiResponse.data;
    setCastDetails(castData.cast.slice(0, 20));
    const director = castData.crew.find((person) => person.job === "Director");
    director
      ? setDirectorName(director.name)
      : setDirectorName("Not Available");
  };

  return (
    <Container1 background={seriesDetails.backdrop_path}>
      <DetailsWrapper>
        <Content>
          {loading ? (
            <PosterSkeleton />
          ) : (
            <Poster
              src={
                seriesDetails.poster_path
                  ? `https://image.tmdb.org/t/p/original/${seriesDetails.poster_path}`
                  : "https://via.placeholder.com/400"
              }
            />
          )}
        </Content>
        <Content>
          <Detail>
            <DetailCard>
              <h3>
                <span>User Ratings : </span>
                {Math.floor(seriesDetails.vote_average)}
              </h3>
            </DetailCard>
            <DetailCard>
              <h3>
                <span>Title : </span>
                {seriesDetails.original_name}
              </h3>
            </DetailCard>

            <DetailCard>
              <h3>
                <span>Release Date: </span>
                {seriesDetails.first_air_date}
              </h3>
            </DetailCard>

            <DetailCard>
              <h3>
                <span>Genre : </span>
                {seriesDetails.genres && seriesDetails.genres.length > 0 ? (
                  seriesDetails.genres.map((genre, index) => (
                    <React.Fragment key={index}>
                      {genre.name}
                      {index !== seriesDetails.genres.length - 1 && ", "}
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
                {seriesDetails.overview}
              </h3>
            </DetailCard>
            <DetailCard>
              <h3>
                <span>Director : </span>
                {directorName}
              </h3>
            </DetailCard>
            <DetailCard>
              <h3>
                <span>Watch Now : </span>
                <a href={seriesDetails.homepage}>
                  {" "}
                  {seriesDetails.original_name}
                </a>
              </h3>
            </DetailCard>
          </Detail>
        </Content>
      </DetailsWrapper>
      <CastDetails>
        <h3>Cast Details</h3>
        <Grid>
          {loading
            ? new Array(10)
                .fill(0)
                .map((element, index) => <CastImageSkeleton key={index} />)
            : castDetails.map((cast) => (
                <CastCard key={cast.id}>
                  <CastImage
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={cast.name}
                  />
                  <CastName>{cast.character}</CastName>
                  <CastName>({cast.name})</CastName>
                </CastCard>
              ))}

          {/* {castDetails.map((cast) => (
            <CastCard key={cast.id}>
              <CastImage
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                    : "https://via.placeholder.com/150"
                }
                alt={cast.name}
              />
              <CastName>{cast.character}</CastName>
              <CastName>({cast.name})</CastName>
            </CastCard>
          ))} */}
        </Grid>
      </CastDetails>
    </Container1>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.8);

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 479px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const Container1 = styled.div`
  padding: 20px;
  overflow-x: hidden;
  margin-top: 62px;
  span {
    color: red;
  }
  align-items: center;
  justify-content: left;
  display: flex;
  position: relative;
  min-height: 100vh;
  flex-direction: column;

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
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

  @media only screen and (max-width: 479px) {
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
  flex-wrap: wrap;

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
    max-width: 100%;
  }

  @media only screen and (max-width: 479px) {
    max-width: 100%;
  }
`;

const Detail = styled.div`
  min-height: 600px;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-left: 0;
    margin-top: 5px;
    padding: 10%;
    width: 100%;
    min-height: auto;
  }

  @media only screen and (max-width: 479px) {
    margin-left: 0;
    margin-top: 5px;
    padding: 10px;
    width: 100%;
    min-height: auto;
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

const CastDetails = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: start;
  margin-top: 20px;
  h3 {
    color: red;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
  max-width: 100%;
`;

const CastCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 295px;
`;

const CastImage = styled.img`
  width: 150px;
  height: 225px;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
    height: auto;
  }
`;

const CastName = styled.h4`
  margin-top: 10px;
`;

const PosterSkeleton = styled.div`
  background-color: #2e2e2e;
  min-width: 400px;
  min-height: 600px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    min-width: 100%;
    min-height: auto;
  }

  @media only screen and (max-width: 479px) {
    min-width: 100%;
    min-height: auto;
  }
`;

const CastImageSkeleton = styled.div`
  background-color: #2e2e2e;
  min-height: 295px;
  min-width: 165px;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
    height: auto;
  }
`;

export default SeriesDetails;
