import styled from "styled-components";

const Filter = styled.div`
  /* border: black solid; */
  /* background-color: #151414; */

  /* margin-left: 20px; */
  margin: 5px;
  /* display: flex; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  max-width: 20vw;
  min-width: fit-content;
  min-height: 80vh;
  max-height: 85vh;
  h3 {
    margin-left: 20px;
  }
  select {
    margin-left: 20px;
  }
  h1 {
    margin: 1rem;
    text-align: center;
  }
`;
export const Filters = () => {
  return (
    <>
      <Filter>
        <h1>Filters</h1>
        <h3>Country of Orgin</h3>
        <select>
          <option>Country Of Orgin</option>
        </select>
        <h3>Strength</h3>
        <select>
          <option>Strength</option>
        </select>
        <h3>Brand</h3>
        <select>
          <option>Brand</option>
        </select>
      </Filter>
    </>
  );
};
