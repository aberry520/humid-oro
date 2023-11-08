import { useLoaderData, useParams } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import Cookies from "js-cookie";
import { NavBar } from "../components/Nav/NavBar";
import { Pagination } from "../components/Pagination";
import { useEffect, useState } from "react";

const HomeDiv = styled.div`
  /* border: black solid; */
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 90vw;
`;

export default function CigarInfo() {
  const params = useParams();
  const [cigarInfo, setCigarInfo] = useState();
  async function getSearch() {
    const url = `http://127.0.0.1:8001/cigar/${params.id}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCigarInfo(result);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSearch();
  }, [params.id]);
  return (
    <>
      <HomeDiv>
        <h1>{cigarInfo.name}</h1>
        <img src={cigarInfo.image} />
      </HomeDiv>
    </>
  );
}
