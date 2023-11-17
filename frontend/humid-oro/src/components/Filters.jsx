import styled from "styled-components";

const Filter = styled.div`
  margin: 5px;
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
`;
const Categories = styled.div`
  h1 {
    margin: 1rem;
    text-align: center;
  }
  background-color: #d3bfa8;
  color: sienna;
  margin-left: 15px;
  max-height: 80vh;
`;
export const Filters = ({
  strengthChange,
  originChange,
  brandChange,
  cigarsHome,
  cigarsSearch,
}) => {
  const allOrigins = [];
  cigarsHome?.results.map((cigar) => {
    allOrigins.push(cigar.origin);
  });
  const uniqueOrigins = [...new Set(allOrigins)];

  const allBrands = [];
  cigarsHome?.results.map((cigar) => {
    allBrands.push(cigar.brand.name);
  });
  const uniqueBrands = [...new Set(allBrands)];

  return (
    <>
      <Categories>
        <h1>Filters</h1>
        <Filter>
          <h3>Country of Origin</h3>
          <select onChange={originChange}>
            <option value={"Origin"}>Country Of Origin</option>
            {uniqueOrigins?.map((origin) => {
              return (
                <option key={origin} value={origin}>
                  {origin}
                </option>
              );
            })}
          </select>
          <h3>Strength</h3>
          <select onChange={strengthChange}>
            <option value={"Strength"}>Strength</option>
            <option value={"Mild"}>Mild</option>
            <option value={"Mild-Medium"}>Mild-Medium</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Medium-Full"}>Medium-Full</option>
            <option value={"Full"}>Full</option>
          </select>
          <h3>Brand</h3>
          <select onChange={brandChange}>
            <option value={"Brand"}>Brand</option>
            {uniqueBrands?.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </Filter>
      </Categories>
    </>
  );
};
