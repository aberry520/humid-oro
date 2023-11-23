import styled from "styled-components";

const Card = styled.div`
  margin: 0;
  min-height: 500px;

  max-width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px;

  background-color: #ffffff;

  img {
    width: 200px;
    height: 300px;
    object-fit: contain;
  }
  h2 {
    font-size: medium;
    margin: 0;
  }
  h3 {
    font-size: small;
    margin: 0;
    min-width: 200px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
    max-width: 80px;
    min-height: 200px;
    max-height: 200px;
    /* align-content: center; */
    h2 {
      font-size: 9px;
      margin: 0;
    }
    h3 {
      font-size: 7px;
      margin: 0;
      min-width: 80px;
    }
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

export const CigarCard = ({ cigars }) => {
  return (
    <>
      <Card>
        <img src={cigars.thumbnail} loading="lazy" />
        <h2>{cigars.name}</h2>
        <h3>
          Brand: {cigars.brand.name}
          <br />
          Country: {cigars.origin}
          <br />
          Strength: {cigars.strength}
          <br />
        </h3>
      </Card>
    </>
  );
};
