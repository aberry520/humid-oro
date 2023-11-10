import styled from "styled-components";
import { Pagination } from "./Pagination";

const Cigar = styled.div`
  border: solid #bf976d;
  /* background-color: #151414; */
  margin: 5px;
  min-width: fit-content;
  min-height: fit-content;
  h1 {
    margin: 25px auto;
    text-align: center;
  }
  box-shadow: 1px 29px 40px 0px rgba(0, 0, 0, 0.25);
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
        {items.length <= 0 ? (
          <h1>No Results</h1>
        ) : (
          <Pagination itemsPerPage={10} items={items} />
        )}
      </Cigar>
    </>
  );
};
