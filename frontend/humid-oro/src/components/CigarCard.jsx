import styled from "styled-components";

const Card = styled.div`
  border: solid #bf976d;
  margin: 0;
  min-height: 300px;
  max-height: fit-content;
  max-width: 30ch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: column; */
  background-color: #364F59;
  box-shadow: 1px 29px 81px 0px rgba(0,0,0,0.75);
  img{
    margin-top: 15px;
  }
`;

export const CigarCard = ({cigars}) => {

  return (
    <>
      <Card>
        {/* <h1>Cigar Card</h1> */}
        <img src={cigars.thumbnail} />
        <h2>{cigars.name}</h2>
        <h3>
            Country: {cigars.country}
            <br/>
            Strength: {cigars.strength}
            <br/>
            Length: {cigars.length}"
            <br/>
            Ring Gauge: {cigars.gauge}
        </h3>
      </Card>
    </>
  );
};
