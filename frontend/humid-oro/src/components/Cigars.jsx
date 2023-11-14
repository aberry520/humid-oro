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

export const Cigars = ({
  cigarsHome,
  cigarsSearch,
  cigarFilter,
  loading,
  error,
}) => {
  let items;
  if (cigarsSearch === undefined && cigarsHome) {
    if (cigarsHome.results) {
      items = cigarsHome.results;
    } else {
      items = cigarsHome;
    }
  }
  if (cigarsHome === undefined && cigarsSearch !== undefined) {
    if (cigarsSearch.results) {
      items = cigarsSearch.results;
    } else {
      items = cigarsSearch;
    }
  }
  if (cigarFilter) {
    items = cigarFilter;
  }
  return (
    <>
      <Cigar>
        {loading == true ? (
          <img src="../../public/ezgif.com-crop.gif" className="gif" />
        ) : (
          <div>
            <h1>Cigars</h1>
            {items?.length <= 0 ? (
              <h1>No Results</h1>
            ) : (
              <Pagination itemsPerPage={15} items={items} />
            )}
          </div>
        )}
        {error && <h3>{error}</h3>}
      </Cigar>
    </>
  );
};
