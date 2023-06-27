import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          AYU<span>FLIX</span>
        </Link>
      </Logo>
      <NavMenu>
        <Link to="/">Home</Link>
      </NavMenu>
      <NavMenu>
        <Link to="/explore">Explore</Link>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.div`
  overflow-x: hidden;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid gray;
  z-index: 3;
  position: fixed;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-transform: none;
    text-decoration: none;
    color: white;
    font-size: 1.3em;
    color: red;
  }
`;

const Logo = styled.div`
  margin-left: 15px;
  a {
    text-transform: none;
    color: white;
    font-size: 1.4em;
    font-weight: 900;
  }
  span {
    color: red;
  }
`;

const NavMenu = styled.div`
  margin-right: 15px;
`;
export default Header;
