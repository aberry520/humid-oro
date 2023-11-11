import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import { useEffect, useState } from "react";

const HomeDiv = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  max-width: 90vw;
`;

export async function loader() {
  const url = `http://127.0.0.1:8001/cigar/`;
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
  const cigarsHomeInit = useLoaderData();
  const [cigarsHome, setCigarsHome] = useState(cigarsHomeInit);
  const [cigarFilter, setCigarFilter] = useState();
  const [origin, setOrigin] = useState();
  const [strength, setStrength] = useState();

  function strengthChange(e) {
    const type = e.target.value;
    if (e.target.value === type) {
      console.log(e.target.value);
      if (type != "Strength") {
        const strength = cigarsHome.results.filter(
          (cigar) => cigar.strength === type
        );
        setCigarFilter(strength);
      } else {
        setCigarFilter();
      }
    }
  }
  function originChange(e) {
    const type = e.target.value;
    setOrigin;
    if (cigarFilter !== undefined) {
      const multiFilter = cigarFilter.filter(
        (cigar) => cigar.strength === type
      );
      setCigarFilter(multiFilter);
      console.log(multiFilter);
    } else {
      if (e.target.value === type) {
        console.log(e.target.value);

        if (type != "Origin") {
          const origin = cigarsHome.results.filter(
            (cigar) => cigar.origin === type
          );
          setCigarFilter(origin);
        } else {
          setCigarFilter();
        }
      }
    }
  }
  console.log(cigarFilter);

  return (
    <>
      <HomeDiv>
        <Filters
          strengthChange={strengthChange}
          originChange={originChange}
          cigarsHome={cigarsHome}
        />
        <Cigars cigarsHome={cigarsHome} cigarFilter={cigarFilter} />
      </HomeDiv>
    </>
  );
}
