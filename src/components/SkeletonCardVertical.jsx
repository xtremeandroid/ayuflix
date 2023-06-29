import React from "react";
import styled from "styled-components";

const SkeletonCardVertical = () => {
  return <Wrap />;
};

const Wrap = styled.div`
  background-color: #2e2e2e;
  border-radius: 20px;
  overflow: hidden;
  min-height: 424px;
  margin: 25px;
  cursor: pointer;
  min-width: 221px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 479px) {
    max-width: 100%;
  }
`;

export default SkeletonCardVertical;
