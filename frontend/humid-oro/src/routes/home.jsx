import { useLoaderData } from "react-router-dom";
import { Filters } from "../components/Filters";
import { Cigars } from "../components/Cigars";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sort } from "../components/Sort";

const HomeDiv = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  max-width: 90vw;
  .gif {
    width: 500px;
    height: auto;
  }
`;

export async function loader() {
  console.log("loading");
}
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

  useEffect(() => {
    if (origin !== undefined && origin !== "Origin") {
      const originFilter = cigarsHome.results.filter(
        (cigar) => cigar.origin === origin
      );
      setCigarFilter(originFilter);
    } else {
      setCigarFilter();
    }
    if (strength !== undefined && strength !== "Strength") {
      const multiFilter = cigarsHome.results.filter(
        (cigar) => cigar.strength === strength && cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
    if (brand !== undefined && brand !== "Brand") {
      const multiFilter = cigarsHome.results.filter(
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
      const multiFilter = cigarsHome.results.filter(
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
      const strengthFilter = cigarsHome.results.filter(
        (cigar) => cigar.strength === strength
      );
      setCigarFilter(strengthFilter);
    } else {
      setCigarFilter();
    }
    if (origin !== undefined && origin !== "Origin") {
      const multiFilter = cigarsHome.results.filter(
        (cigar) => cigar.origin === origin && cigar.strength === strength
      );
      setCigarFilter(multiFilter);
    }
    if (brand !== undefined && brand !== "Brand") {
      const multiFilter = cigarsHome.results.filter(
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
      const multiFilter = cigarsHome.results.filter(
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
      const brandFilter = cigarsHome.results.filter(
        (cigar) => cigar.brand.name === brand
      );
      setCigarFilter(brandFilter);
    } else {
      setCigarFilter();
    }
    if (origin !== undefined && origin !== "Origin") {
      const multiFilter = cigarsHome.results.filter(
        (cigar) => cigar.origin === origin && cigar.origin === origin
      );
      setCigarFilter(multiFilter);
    }
    if (strength !== undefined && strength !== "Strength") {
      const multiFilter = cigarsHome.results.filter(
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
      const multiFilter = cigarsHome.results.filter(
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
  // console.log(cigarFilter);
  const [sort, setSort] = useState();
  async function getCigarsSort() {
    try {
      const url = `http://127.0.0.1:8001/cigar/?ordering=${sort}`;
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
    getCigarsSort();
  }, [sort]);
  function ascendingOrigin(e) {
    setSort(e.target.value);
  }
  function descendingOrigin(e) {
    setSort(e.target.value);
  }
  function ascendingBrand(e) {
    setSort(e.target.value);
  }
  function descendingBrand(e) {
    setSort(e.target.value);
  }
  function ascendingStrength(e) {
    setSort(e.target.value);
  }
  function descendingStrength(e) {
    setSort(e.target.value);
  }
  return (
    <>
      <HomeDiv>
        {/* <Filters
          strengthChange={strengthChange}
          originChange={originChange}
          brandChange={brandChange}
          cigarsHome={cigarsHome}
        /> */}
        <Sort
          ascendingOrigin={ascendingOrigin}
          descendingOrigin={descendingOrigin}
        />
        <Cigars
          cigarsHome={cigarsHome}
          cigarFilter={cigarFilter}
          loading={loading}
          error={error}
        />
      </HomeDiv>
    </>
  );
}
