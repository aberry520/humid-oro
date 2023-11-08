import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Search } from "react-router-dom";
import styled from "styled-components";
import { Search } from "./Search";

const Nav = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1000px;
  justify-content: space-around;
  margin: auto;
`;
const NavBorder = styled.div`
  border: black solid;
  background-color: #364F59;
  margin: 0;
`;

export const NavBar = () => {
 
  return (
    <>
      <NavBorder>
        <Nav>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Search />
          <Link to={"user/"}>
            <p>Profile</p>
          </Link>
        </Nav>
      </NavBorder>
    </>
  );
};
