import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sort } from "../components/Sort";
import { CigarCard } from "../components/CigarCard";

const HomeDiv = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  max-width: fit-content;
  .gif {
    width: 500px;
    height: auto;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  .welcome {
    text-align: center;
    font-size: 3em;
  }
`;

export default function Home() {
  // const cigarsHomeInit = useLoaderData();
  const [cigarsHome, setCigarsHome] = useState();
  const [cigarFilter, setCigarFilter] = useState();
  const [origin, setOrigin] = useState();
  const [strength, setStrength] = useState();
  const [brand, setBrand] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getCigars() {
    try {
      const url = `http://127.0.0.1:8001/cigar/`;
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        {
          Home;
        }
        console.log(result);
        setCigarsHome(result);
        setLoading(false);
        return result;
      } else {
        setError(
          "There seems to be an error connecting to our servers, please try again."
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getCigars();
  }, []);

  const [counter, setCounter] = useState(1);
  function strengthChange(e) {
    const type = e.target.value;
    setStrength(type);
  }
  function originChange(e) {
    const type = e.target.value;
    setOrigin(type);
  }
  function brandChange(e) {
    const type = e.target.value;
    setBrand(type);
  }

  const [sort, setSort] = useState(null);
  const [next, setNext] = useState(1);
  const prev = next - 1;
  async function getCigarsSort(page) {
    try {
      const url = `http://127.0.0.1:8001/cigar/?ordering=${sort}&page=${page}`;
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        {
          Home;
        }
        console.log(result);
        setCigarsHome(result);
        setLoading(false);
        return result;
      } else {
        setError("There seems to be an error, please try again.");
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getCigarsSort(next);
    setNext(2);
  }, [sort]);
  function ascendingOrigin(e) {
    setSort(e.target.value);
    setNext(1);
    setLoading(true);
  }
  function descendingOrigin(e) {
    setSort(e.target.value);
    setNext(1);
    setLoading(true);
  }
  function ascendingBrand(e) {
    setSort(e.target.value);
    setNext(1);
    setLoading(true);
  }
  function descendingBrand(e) {
    setSort(e.target.value);
    setNext(1);
    setLoading(true);
  }
  function ascendingStrength(e) {
    setSort(e.target.value);
    setNext(1);
    setLoading(true);
  }
  function descendingStrength(e) {
    setSort(e.target.value);
    setNext(1);
    setLoading(true);
  }
  useEffect(() => {
    setNext(2);
  }, []);
  console.log(next);
  return (
    <>
      <HomeDiv>
        <Sort
          ascendingOrigin={ascendingOrigin}
          descendingOrigin={descendingOrigin}
          ascendingStrength={ascendingStrength}
          descendingStrength={descendingStrength}
          ascendingBrand={ascendingBrand}
          descendingBrand={descendingBrand}
          setLoading={setLoading}
        />
        <Cigars
          cigarsHome={cigarsHome}
          cigarFilter={cigarFilter}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setCounter={setCounter}
          counter={counter}
          next={next}
          prev={prev}
          setNext={setNext}
          getCigarsSort={getCigarsSort}
        />
      </HomeDiv>
    </>
  );
}
