import React from "react";
import styled from "styled-components";

const SkeletonCardHorizontal = () => {
  return <Wrap />;
};

const Wrap = styled.div`
  background-color: #2e2e2e;
  border-radius: 20px;
  min-width: 285px;
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

export default SkeletonCardHorizontal;
