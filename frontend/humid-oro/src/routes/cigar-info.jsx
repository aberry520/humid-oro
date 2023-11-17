import { useLoaderData, useParams } from "react-router-dom";

import styled from "styled-components";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";
import { ReviewForm } from "../components/ReviewForm";

const InfoDiv = styled.div`
  /* border: black solid; */
  background-color: white;
  padding: 25px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  max-width: 80ch;
  h1 {
    text-align: center;
  }
  img {
    width: 300px;
    height: 300px;
    margin: 10px;
    object-fit: contain;
  }
`;
const Info = styled.div`
  display: flex;
`;
export default function CigarInfo() {
  const params = useParams();
  const [cigarInfo, setCigarInfo] = useState();
  async function getInfo() {
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
    getInfo();
  }, [params.id]);
  return (
    <>
      <InfoDiv>
        {cigarInfo ? (
          <>
            <h1>{cigarInfo.name}</h1>
            <Info>
              <img src={cigarInfo.image} />
              <h3>
                Brand: {cigarInfo.brand.name}
                <br />
                Country: {cigarInfo.origin}
                <br />
                Filler: {cigarInfo.filler}
                <br />
                Wrapper: {cigarInfo.wrapper}
                <br />
                Strength: {cigarInfo.strength}
                <br />
                Length: {cigarInfo.length}"
                <br />
                Ring Gauge: {cigarInfo.gauge}
                <br />
                Wrapper Color: {cigarInfo.color}
              </h3>
            </Info>
            {Cookies.get("Authorization") ? (
              <ReviewForm cigarInfo={cigarInfo} />
            ) : null}
          </>
        ) : null}
      </InfoDiv>
    </>
  );
}
