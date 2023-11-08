import styled from "styled-components";

const Card = styled.div`
  border: solid #bf976d;
  margin: 0;
  min-height: 300px;
  max-height: fit-content;
  max-width: 25ch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  /* flex-direction: column; */
  background-color: #364f59;
  box-shadow: 1px 29px 81px 0px rgba(0, 0, 0, 0.75);
  img {
    margin-top: 15px;
    width: 80%;
    height: auto;
  }
  h2 {
    font-size: medium;
    margin: 0;
  }
  h3 {
    font-size: small;
    margin: 0;
  }
`;

export const CigarCard = ({ cigars }) => {
  return (
    <>
      <Card>
        <img src={cigars.thumbnail} />
        <h2>{cigars.name}</h2>
        <h3>
          Country: {cigars.origin}
          <br />
          Strength: {cigars.strength}
          <br />
          {/* Length: {cigars.length}"
          <br />
          Ring Gauge: {cigars.gauge} */}
        </h3>
      </Card>
    </>
  );
};
