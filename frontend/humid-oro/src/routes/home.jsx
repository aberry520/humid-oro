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
  async function getCigars() {
    const url = `http://127.0.0.1:8001/cigar/`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      {
        Home;
      }
      console.log(result);
      setCigarsHome(result);
      setLoading(false);
      return result;
    } catch (error) {
      console.error(error);
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

  return (
    <>
      <HomeDiv>
        <Filters
          strengthChange={strengthChange}
          originChange={originChange}
          brandChange={brandChange}
          cigarsHome={cigarsHome}
        />
        {/* {loading == true ? (
          <img src="../../public/ezgif.com-crop.gif" className="gif" />
        ) : ( */}
        <Cigars
          cigarsHome={cigarsHome}
          cigarFilter={cigarFilter}
          loading={loading}
        />
        {/* )} */}
      </HomeDiv>
    </>
  );
}
