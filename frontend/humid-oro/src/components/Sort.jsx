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
export const Sort = ({ ascendingOrigin, descendingOrigin }) => {
  return (
    <>
      <Filter>
        <h1>Sort By</h1>
        <h3>Country of Origin</h3>
        <button onClick={ascendingOrigin} value={"origin"}>
          Ascending
        </button>
        <button onClick={descendingOrigin} value={"-origin"}>
          Descending
        </button>
        {/* <select onChange={originChange}>
          <option value={"Origin"}>Country Of Origin</option>
          <option value={"Origin"}>Country Of Origin</option>
        </select> */}
        <h3>Strength</h3>
        <button>Ascending</button>
        <button>Descending</button>
        {/* <select onChange={strengthChange}>
          <option value={"Strength"}>Strength</option>
          <option value={"Mild"}>Mild</option>
          <option value={"Mild-Medium"}>Mild-Medium</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Medium-Full"}>Medium-Full</option>
          <option value={"Full"}>Full</option>
        </select> */}
        <h3>Brand</h3>
        <button>Ascending</button>
        <button>Descending</button>
        {/* <select onChange={brandChange}>
          <option value={"Brand"}>Brand</option>
        </select> */}
      </Filter>
    </>
  );
};
