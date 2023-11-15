import styled from "styled-components";
import { Pagination } from "./Pagination";
import { CigarCard } from "./CigarCard";
import { Link } from "react-router-dom";

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
const CigarCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
`;
const Page = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
`;
export const Cigars = ({
  cigarsHome,
  cigarsSearch,
  cigarFilter,
  loading,
  error,
  setCounter,
  counter,
  next,
  prev,
  setNext,
  getCigarsSort,
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
  function loadNext() {
    // console.log(cigarsHome.next);
    if (cigarsHome.next !== null) {
      getCigarsSort(next);
      setCounter(1);
      setNext(next + 1);
    }
  }
  function loadPrev() {
    if (next > 2) {
      getCigarsSort(next - 2);
      setNext(next - 1);
    }
  }
  return (
    <>
      <Cigar>
        {loading == true ? (
          <img src="../../public/ezgif.com-crop.gif" className="gif" />
        ) : (
          // <p>Loading...</p>
          <div>
            {cigarsHome && <h1>All Cigars</h1>}
            {cigarsSearch ? cigarsSearch && <h1>Search Results</h1> : null}
            {items?.length <= 0 ? (
              <h1>Sorry No Results</h1>
            ) : (
              <CigarCards>
                {cigarsHome?.results.map((item) => (
                  <Link key={item.id} to={"/info/" + item.id}>
                    <CigarCard key={item.id} cigars={item} loading="lazy" />
                  </Link>
                ))}
              </CigarCards>
            )}
            {cigarsSearch && (
              <Pagination
                itemsPerPage={15}
                items={items}
                setCounter={setCounter}
                counter={counter}
                next={next}
                setNext={setNext}
                getCigarsSort={getCigarsSort}
              />
            )}
            <Page>
              {cigarsHome?.previous && <button onClick={loadPrev}>Prev</button>}
              {cigarsHome && <p>Page {next - 1}</p>}
              {cigarsHome?.next && <button onClick={loadNext}>Next</button>}
            </Page>
          </div>
        )}
        {error && <h3>{error}</h3>}
      </Cigar>
    </>
  );
};
