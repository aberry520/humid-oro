import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";

const HomeDiv = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 90vw;
`;

export async function loader() {
  const url = "http://127.0.0.1:8001/cigar/";
  try {
    const response = await fetch(url);
    const result = await response.json();
    {
      Home;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}
export default function Home() {
  const cigarsHome = useLoaderData();

  return (
    <>
      <HomeDiv>
        <Filters />
        <Cigars cigarsHome={cigarsHome} />
      </HomeDiv>
    </>
  );
}
