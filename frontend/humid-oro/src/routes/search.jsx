import { useParams } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

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
`;

export default function Search({}) {
  const params = useParams();
  const [cigarsSearch, setCigarsSearch] = useState();
  const [cigarFilter, setCigarFilter] = useState();
  const [origin, setOrigin] = useState();
  const [strength, setStrength] = useState();
  const [brand, setBrand] = useState();
  async function getSearch() {
    const url = `https://humid-oro.onrender.com/cigar/?search=${params.search}`;
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

  useEffect(() => {
    if (origin !== undefined && origin !== "Origin") {
      const originFilter = cigarsSearch.results.filter(
        (cigar) => cigar.origin === origin
      );
      setCigarFilter(originFilter);
    } else {
      setCigarFilter();
    }
    if (strength !== undefined && strength !== "Strength") {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) => cigar.strength === strength && cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
    if (brand !== undefined && brand !== "Brand") {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) => cigar.brand === brand && cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
    if (
      brand !== undefined &&
      brand !== "Brand" &&
      origin !== undefined &&
      origin !== "Origin" &&
      strength !== undefined &&
      strength !== "Strength"
    ) {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) =>
          cigar.brand.name === brand &&
          cigar.strength === strength &&
          cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
  }, [origin]);

  useEffect(() => {
    if (strength !== undefined && strength !== "Strength") {
      const strengthFilter = cigarsSearch.results.filter(
        (cigar) => cigar.strength === strength
      );
      setCigarFilter(strengthFilter);
    } else {
      setCigarFilter();
    }
    if (origin !== undefined && origin !== "Origin") {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) => cigar.origin === origin && cigar.strength === strength
      );
      setCigarFilter(multiFilter);
    }
    if (brand !== undefined && brand !== "Brand") {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) => cigar.brand.name === brand && cigar.strength === strength
      );
      setCigarFilter(multiFilter);
    }
    if (
      brand !== undefined &&
      brand !== "Brand" &&
      origin !== undefined &&
      origin !== "Origin" &&
      strength !== undefined &&
      strength !== "Strength"
    ) {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) =>
          cigar.brand.name === brand &&
          cigar.strength === strength &&
          cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
  }, [strength]);

  useEffect(() => {
    if (brand !== undefined && brand !== "Brand") {
      console.log("hi ", brand);
      const brandFilter = cigarsSearch.results.filter(
        (cigar) => cigar.brand.name === brand
      );
      setCigarFilter(brandFilter);
    } else {
      setCigarFilter();
    }
    if (origin !== undefined && origin !== "Origin") {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) => cigar.origin === origin && cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
    if (strength !== undefined && strength !== "Strength") {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) => cigar.brand.name === brand && cigar.strength === strength
      );
      setCigarFilter(multiFilter);
    }

    if (
      brand !== undefined &&
      brand !== "Brand" &&
      origin !== undefined &&
      origin !== "Origin" &&
      strength !== undefined &&
      strength !== "Strength"
    ) {
      const multiFilter = cigarsSearch.results.filter(
        (cigar) =>
          cigar.brand.name === brand &&
          cigar.strength === strength &&
          cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
  }, [brand]);

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
  return (
    <>
      <HomeDiv>
        <Filters
          strengthChange={strengthChange}
          originChange={originChange}
          brandChange={brandChange}
          cigarsSearch={cigarsSearch}
        />
        <Cigars cigarsSearch={cigarsSearch} cigarFilter={cigarFilter} />
      </HomeDiv>
    </>
  );
}
