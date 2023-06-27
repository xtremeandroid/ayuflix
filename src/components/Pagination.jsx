import React from "react";
import { styled } from "styled-components";

const Pagination = ({ lastPage, page, setPage }) => {
  return (
    <PaginationWrapper>
      <Button onClick={() => setPage(1)}>1</Button>
      <Button onClick={() => (page >= 2 ? setPage(page - 1) : setPage(1))}>
        Prev
      </Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
      <Button onClick={() => setPage(lastPage)}>Last</Button>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 50px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
  background: red;
  color: white;
  font-size: 1.2em;
  border-radius: 10%;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
  border: none;

  &:hover {
    color: red;
    background-color: transparent;
  }
`;

export default Pagination;
