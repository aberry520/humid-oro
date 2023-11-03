import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import * as CigarJSON from "../../cigars.json";

const HomeDiv = styled.div`
  border: black solid;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 90vw;
`;

export async function loader() {
  // const url = 'https://cigars.p.rapidapi.com/cigars?page=1';
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': 'c404c0dfb7mshb5e1e6476869267p1d83fcjsne66a642aa104',
  //         'X-RapidAPI-Host': 'cigars.p.rapidapi.com'
  //     }
  // };

  // try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //     return {Home}
  // } catch (error) {
  //     console.error(error);
  // }
  // console.log(CigarJSON.cigars)
  {
    Home;
  }
  return CigarJSON.cigars;
}
export default function Home() {
  const cigars = useLoaderData();
  // console.log(cigars[0])
  return (
    <>
      <HomeDiv>
        <Filters />
        <Cigars cigars={cigars} />
      </HomeDiv>
    </>
  );
}
