import styled from "styled-components";

const NavBorder = styled.div`
  border: black solid;
  margin: 0;
  min-height: 300px;
  max-height: fit-content;
  max-width: 30ch;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;

export const CigarCard = ({cigars}) => {

  return (
    <>
      <NavBorder>
        <h1>Cigar Card</h1>
        <img src={cigars.thumbnail} />
        <h2>{cigars.name}</h2>
        <h3>
            Country: {cigars.country}
            <br/>
            Strength: {cigars.strength}
            <br/>
            Length: {cigars.length}"
            <br/>
            Ring Gauge: {cigars.ringGauge}
        </h3>
      </NavBorder>
    </>
  );
};
