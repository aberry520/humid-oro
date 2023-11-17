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
  background-color: #d3bfa8;
  margin-left: 15px;
  max-height: 80vh;
`;
const Category = styled.div`
  /* display: flex; */
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
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
                <img src="../public/ascend.svg" />
              </button>
              <button onClick={descendingOrigin} value={"-origin"}>
                <img src="../public/descend.svg" />
              </button>
            </Buttons>
          </Category>

          <Category>
            <h3>Strength</h3>
            <Buttons>
              <button onClick={ascendingStrength} value={"strength"}>
                <img src="../public/ascend.svg" />
              </button>
              <button onClick={descendingStrength} value={"-strength"}>
                <img src="../public/descend.svg" />
              </button>
            </Buttons>
          </Category>

          <Category>
            <h3>Brand</h3>
            <Buttons>
              <button onClick={ascendingBrand} value={"brand"}>
                <img src="../public/ascend.svg" />
              </button>
              <button onClick={descendingBrand} value={"-brand"}>
                <img src="../public/descend.svg" />
              </button>
            </Buttons>
          </Category>
        </Filter>
      </Categories>
    </>
  );
};
