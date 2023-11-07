import styled from "styled-components";
import { CigarCard } from "./CigarCard";

const Cigar = styled.div`
  border: black solid;
  margin: 5px;
  min-width: fit-content;
  /* display: flex; */
  /* justify-content: center; */
  min-height: fit-content;
  h1 {
    margin: 25px auto;
    text-align: center;
  }
`;
const CigarCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Cigars = ({cigarsHome, cigarsSearch}) => {
    // console.log(cigars[0])
    // console.log(cigarsSearch)
    function results(){
      if (cigarsSearch){
        if (cigarsSearch.count <= 0){
          return <h1>No Results</h1>
        } else {
          return cigarsSearch.results.map((item, index) =><CigarCard key={item.id} cigars={item}/>)
        }

      }

    }
  return (
    <>
      <Cigar>
        <h1>Cigars</h1>
        <CigarCards>
            {
            cigarsHome?.results.map((item, index) =>
            <CigarCard key={item.id} cigars={item}/>
            )
            }
            {results()}
        </CigarCards>
      </Cigar>
    </>
  );
};
