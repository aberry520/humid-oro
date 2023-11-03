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

export const Cigars = ({cigars}) => {
    console.log(cigars[0])
  return (
    <>
      <Cigar>
        <h1>Cigars</h1>
        <CigarCards>
            {
            cigars.map((item, index) =>
            <CigarCard key={item.cigarId} cigars={item}/>
            )
            }
        </CigarCards>
      </Cigar>
    </>
  );
};
