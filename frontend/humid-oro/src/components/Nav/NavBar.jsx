import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Search } from "react-router-dom";
import styled from "styled-components";
import { Search } from "./Search";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1000px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;
const NavBorder = styled.div`
  /* border: black solid; */
  /* background-color: #1a1a1a; */
  margin: 0;
`;

export const NavBar = () => {
  return (
    <>
      <NavBorder>
        <Nav>
          <Link to={"/"}>
            <img src="../public/humidoro.svg" />
          </Link>
          <div>
            <Search />
            <Link to={"user/"}>
              <p>Profile</p>
            </Link>
            <Link to={"add/"}>
              <p>Add Cigar</p>
            </Link>
          </div>
        </Nav>
      </NavBorder>
    </>
  );
};
