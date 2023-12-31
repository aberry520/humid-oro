import styled from "styled-components";
import { CigarCard } from "./CigarCard";
import { Link } from "react-router-dom";

const Cigar = styled.div`
  border: solid #bf976d;
  background-color: #fff8f0;
  margin: 0px 20px;

  min-width: fit-content;
  max-width: 1200px;
  min-height: fit-content;
  padding: 3%;
  h1 {
    margin: 25px auto;
    text-align: center;
  }
  box-shadow: 1px 29px 40px 0px rgba(0, 0, 0, 0.25);
`;
const Loading = styled.div`
  margin-bottom: 20%;
  position: absolute;
  text-align: center;
  height: 60vh;
  width: 100vw;
  right: 0;
  top: 20;
  padding-left: 80%;
  padding-top: 10%;
  cursor: wait;
  .gif {
    max-width: 300px;
  }
`;
const CigarCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
`;

const Results = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Page = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 3%;
`;
export const Cigars = ({
  cigarsHome,
  cigarsSearch,
  cigarFilter,
  loading,
  setLoading,
  error,
  setCounter,
  next,
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
    if (cigarsHome.next !== null) {
      getCigarsSort(next);
      setCounter(1);
      setNext(next + 1);
      window.scrollTo(0, 0);
      setLoading(true);
    }
  }
  function loadPrev() {
    if (next > 2) {
      getCigarsSort(next - 2);
      setNext(next - 1);
      window.scrollTo(0, 0);
      setLoading(true);
    }
  }

  return (
    <>
      <Cigar>
        {loading == true ? (
          <Loading>
            <img src="/ezgif.com-crop.gif" className="gif" />
            <h3>Loading Cigars...</h3>
          </Loading>
        ) : (
          <div>
            {cigarsHome && <h1>All Cigars</h1>}
            {cigarsHome && (
              <p>
                Page {next - 1} of {Math.ceil(cigarsHome?.count / 30)}
              </p>
            )}
            {cigarsSearch ? cigarsSearch && <h1>Search Results</h1> : null}
            {items?.length <= 0 ? (
              <Results>
                <Link to={"/add/"}>
                  <img className="results" src="/burn.svg" />
                </Link>
              </Results>
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
              <CigarCards>
                {items?.map((item) => (
                  <Link key={item.id} to={"/info/" + item.id}>
                    <CigarCard key={item.id} cigars={item} loading="lazy" />
                  </Link>
                ))}
              </CigarCards>
            )}
            <Page>
              {cigarsHome?.previous && <button onClick={loadPrev}>Prev</button>}
              {cigarsHome && (
                <p>
                  Page {next - 1} of {Math.ceil(cigarsHome?.count / 30)}
                </p>
              )}
              {cigarsHome?.next && <button onClick={loadNext}>Next</button>}
            </Page>
          </div>
        )}
        {error && <h3>{error}</h3>}
      </Cigar>
    </>
  );
};
