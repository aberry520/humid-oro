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
  text-align: center;
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
  @media screen and (max-width: 1000px) {
    min-height: fit-content;
    display: flex;
    flex: 0 1 auto;
    gap: 10px;
    margin: auto;
    h1,
    h3 {
      font-size: 0.8em;
      text-align: center;
    }
    button {
      font-size: 0.5em;
    }
  }
`;
const Categories = styled.div`
  /* display: flex; */
  text-align: center;
  .sort {
    font-size: 1.25em;
  }
`;
const Category = styled.div`
  /* display: flex; */
`;
const Buttons = styled.div`
  /* display: flex; */
`;
export const Sort = ({
  ascendingOrigin,
  descendingOrigin,
  ascendingStrength,
  descendingStrength,
  ascendingBrand,
  descendingBrand,
}) => {
  return (
    <>
      <Categories>
        <h1 className="sort">Sort By</h1>
        <Filter>
          <Category>
            <h3>Country of Origin</h3>
            <Buttons>
              <button onClick={ascendingOrigin} value={"origin"}>
                Ascending
              </button>
              <button onClick={descendingOrigin} value={"-origin"}>
                Descending
              </button>
            </Buttons>
          </Category>
          {/* <select onChange={originChange}>
          <option value={"Origin"}>Country Of Origin</option>
          <option value={"Origin"}>Country Of Origin</option>
        </select> */}
          <Category>
            <h3>Strength</h3>
            <Buttons>
              <button onClick={ascendingStrength} value={"strength"}>
                Ascending
              </button>
              <button onClick={descendingStrength} value={"-strength"}>
                Descending
              </button>
            </Buttons>
            {/* <select onChange={strengthChange}>
          <option value={"Strength"}>Strength</option>
          <option value={"Mild"}>Mild</option>
          <option value={"Mild-Medium"}>Mild-Medium</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Medium-Full"}>Medium-Full</option>
          <option value={"Full"}>Full</option>
        </select> */}
          </Category>
          <Category>
            <h3>Brand</h3>
            <Buttons>
              <button onClick={ascendingBrand} value={"brand"}>
                Ascending
              </button>
              <button onClick={descendingBrand} value={"-brand"}>
                Descending
              </button>
            </Buttons>
            {/* <select onChange={brandChange}>
          <option value={"Brand"}>Brand</option>
        </select> */}
          </Category>
        </Filter>
      </Categories>
    </>
  );
};
