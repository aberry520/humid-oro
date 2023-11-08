import styled from "styled-components";
import { CigarCard } from "./CigarCard";
import { Pagination } from "./Pagination";
import { useEffect, useState } from "react";

const Cigar = styled.div`
  border: solid #bf976d;
  background-color: #364f59;
  margin: 5px;
  min-width: fit-content;
  padding: 20px;
  /* display: flex; */
  /* justify-content: center; */
  min-height: fit-content;
  h1 {
    margin: 25px auto;
    text-align: center;
  }
  box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
`;
const CigarCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Cigars = ({
  cigarsHome,
  cigarsSearch,
  handleNext,
  handlePrevious,
  page,
  search,
}) => {
  let items = [];
  console.log({ cigarsSearch });
  console.log({ cigarsHome });
  if (cigarsSearch === undefined && cigarsHome !== undefined) {
    console.log("home");
    items = cigarsHome.results;
  }
  if (cigarsHome === undefined && cigarsSearch !== undefined) {
    console.log("search");
    items = cigarsSearch.results;
  }
  console.log(items);
  return (
    <>
      <Cigar>
        <h1>Cigars</h1>
        <CigarCards>
          {/* {
            cigarsHome?.results.map((item, index) =>
            <CigarCard key={item.id} cigars={item}/>
            )
            }
            {results()} */}
        </CigarCards>
        <Pagination itemsPerPage={4} items={items} />,
      </Cigar>
    </>
  );
};
