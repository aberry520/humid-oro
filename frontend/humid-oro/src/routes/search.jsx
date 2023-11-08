import { useParams } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const HomeDiv = styled.div`
  border: black solid;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 90vw;
`;

export default function Search({}) {
  const params = useParams();
  const [cigarsSearch, setCigarsSearch] = useState();
  async function getSearch() {
    const url = `http://127.0.0.1:8001/cigar/?search=${params.search}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCigarsSearch(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSearch();
  }, [params.search]);

  return (
    <>
      <HomeDiv>
        <Filters />
        <Cigars cigarsSearch={cigarsSearch} />
      </HomeDiv>
    </>
  );
}
