import styled from "styled-components";

const NavBorder = styled.div`
  border: black solid;
  margin: 0;
  height: 300px;
`;

export const CigarCard = ({cigars}) => {
    // console.log("Cigar Card: ", cigars)
  return (
    <>
      <NavBorder>
        <h1>Cigar Card</h1>
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
