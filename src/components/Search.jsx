import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const NavigateTo = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchBox>
      <SearchInput
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search....."
      />
      <SearchButton
        onClick={
          searchTerm
            ? () => {
                NavigateTo(`/search/${searchTerm}`);
              }
            : () => alert("Enter Search Term First")
        }
      >
        <AiOutlineSearch />
      </SearchButton>
    </SearchBox>
  );
};

const SearchBox = styled.div``;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 20px;
  background: transparent;
  color: white;
  font-size: 1.2rem;
  border: 2px solid white;
  padding: 20px;
  outline: none;
  max-width: 400px;

  &:hover {
    filter: brightness(0.85);
  }
`;

const SearchButton = styled.button`
  height: 40px;
  border-radius: 20px;
  width: 15%;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1.5em;

  &:hover {
    color: red;
    background: black;
  }
`;

export default Search;
