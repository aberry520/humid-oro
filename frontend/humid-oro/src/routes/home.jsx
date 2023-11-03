import { redirect } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";

const HomeDiv = styled.div`
  border: black solid;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 90vw;
`;

export async function loader() {
  try {
    const url = `http://localhost:8000/cigar`;
    const cigar = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((response) => response.json());
    console.log(cigar);
    if (!Array.isArray(cigar)) {
      throw Error("No");
    }
    return { Home };
  } catch (error) {
    return redirect("/login");
  }
}
export default function Home() {
  return (
    <>
      <HomeDiv>
        <Filters />
        <Cigars />
      </HomeDiv>
    </>
  );
}
