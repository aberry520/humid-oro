import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  max-height: 2.5em;
`;

export const Search = () => {
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const navigate = useNavigate();

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    setLastSearch(e.target.value);
  };

  const handleSearchClick = (e) => {
    if (search === "") {
      navigate(`/search/${lastSearch}`);
    } else {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  const handleEnter = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <>
      <SearchDiv>
        <input
          type="search"
          placeholder="Search"
          onChange={handleChangeSearch}
          onKeyDown={handleEnter}
          value={search}
        />
        <button
          type="button"
          name="searchButton"
          onClick={(e) => {
            handleSearchClick(e);
          }}
        >
          Search
        </button>
      </SearchDiv>
    </>
  );
};
