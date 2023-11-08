import styled from "styled-components";
import { Pagination } from "./Pagination";

const Cigar = styled.div`
  border: solid #bf976d;
  background-color: #364f59;
  margin: 5px;
  min-width: fit-content;
  min-height: fit-content;
  h1 {
    margin: 25px auto;
    text-align: center;
  }
  box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
`;

export const Cigars = ({ cigarsHome, cigarsSearch }) => {
  let items = [];
  if (cigarsSearch === undefined && cigarsHome !== undefined) {
    items = cigarsHome.results;
  }
  if (cigarsHome === undefined && cigarsSearch !== undefined) {
    items = cigarsSearch.results;
  }

  return (
    <>
      <Cigar>
        <h1>Cigars</h1>
        <Pagination itemsPerPage={4} items={items} />,
      </Cigar>
    </>
  );
};
