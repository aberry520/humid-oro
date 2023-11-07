import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import Cookies from "js-cookie";
import { NavBar } from "../components/Nav/NavBar";


const HomeDiv = styled.div`
  border: black solid;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 90vw;
`;

export async function loader() {
  
  const url = 'http://127.0.0.1:8001/cigar/?page=1';
  try {
      const response = await fetch(url);
      const result = await response.json();
      {Home}
      return result
  } catch (error) {
      console.error(error);
  }
}
export default function Home() {
  const cigarsHome = useLoaderData();
  // console.log(cigars)
  return (
    <>
      {/* <NavBar/> */}
      <HomeDiv>
        <Filters />
        <Cigars cigarsHome={cigarsHome}/>
      </HomeDiv>
    </>
  );
}
