import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Search } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1000px;
  justify-content: space-around;
  margin: auto;
`;
const NavBorder = styled.div`
  border: black solid;
  margin: 0;
`;

export const NavBar = () => {
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const navigate = useNavigate();

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    setLastSearch(e.target.value)
  };

  const handleSearchClick = (e) => {
    if (search === ""){
        navigate(`/search/${lastSearch}`);
    }else{
        navigate(`/search/${search}`);
        setSearch("")
    }
  };
  return (
    <>
      <NavBorder>
        <Nav>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <form>
            <input
              type="search"
              placeholder="Search"
              onChange={handleChangeSearch}
              value={search}
            />
            <button type="button" name="searchButton" onClick={(e)=>{handleSearchClick(e)}}>Search</button>
          </form>
          <Link to={"user/"}>
            <p>Profile</p>
          </Link>
        </Nav>
      </NavBorder>
    </>
  );
};
