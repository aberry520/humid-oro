import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useEffect, useState } from "react";

const AddForm = styled.div`
  margin: auto;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: fit-content;
    align-items: center;
    input,
    select {
      border-radius: 5px;
    }
    select {
      max-width: fit-content;
    }
  }
`;

export default function UserAdd() {
  const [brandSearch, setBrandSearch] = useState();
  const [brandSearchResults, setBrandSearchResults] = useState([]);
  const [post, setPost] = useState("addcigar");
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();
  const [wrapper, setWrapper] = useState();
  const [filler, setFiller] = useState();
  const [strength, setStrength] = useState();
  const [length, setLength] = useState();
  const [gauge, setGauge] = useState();
  const [color, setColor] = useState();
  const [brandName, setBrandName] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  function nameChange(e) {
    setName(e.target.value);
  }
  function originChange(e) {
    setOrigin(e.target.value);
  }
  function wrapperChange(e) {
    setWrapper(e.target.value);
  }
  function fillerChange(e) {
    setFiller(e.target.value);
  }
  function strengthChange(e) {
    setStrength(e.target.value);
  }
  function lengthChange(e) {
    setLength(e.target.value);
  }
  function gaugeChange(e) {
    setGauge(e.target.value);
  }
  function colorChange(e) {
    setColor(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post == "addcigar") {
      const user = {
        brand,
        name,
        origin,
        wrapper,
        filler,
        strength,
        length,
        gauge,
        color,
      };
      console.log(JSON.stringify(user));
      const url = "https://humid-oro.onrender.com/addcigar/";
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => response.json());
      console.log(data);
      if (data.id) {
        navigate(`/info/${data.id}`);
      } else {
        setError(
          "There was an issue adding your cigar! Please check your entry and try again."
        );
      }
    }
    if (post == "cigar&brand") {
      const user = {
        brand: { name: brandName },
        name,
        origin,
        wrapper,
        filler,
        strength,
        length,
        gauge,
        color,
      };
      console.log(JSON.stringify(user));
      const url = "https://humid-oro.onrender.com/cigar/";
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => response.json());
      console.log(data);
      if (data.id) {
        navigate(`/info/${data.id}`);
      } else {
        setError("There was an issue adding cigar, please try again");
      }
    }
  };
  async function getBrand() {
    const url = `https://humid-oro.onrender.com/brand/`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setBrandSearchResults(result);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(brandSearch);
    getBrand();
  }, []);

  function addBrand(e) {
    if (e.target.value === "Other") {
      setPost("cigar&brand");
    } else {
      setPost("addcigar");
      setBrand(e.target.value);
    }
  }
  function addBrandChange(e) {
    setBrandName(e.target.value);
  }

  return (
    <>
      <AddForm>
        <h4>
          Don't have what
          <br />
          you're looking for?
          <br />
          Add your own cigar to review!
        </h4>
        <form>
          <select onChange={addBrand}>
            <option>Brand</option>
            <option value={"Other"}>Add Brand</option>
            {brandSearchResults.results?.map((brand) => {
              return (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              );
            })}
          </select>
          {post == "cigar&brand" ? (
            <input
              placeholder="Enter New Brand"
              onChange={addBrandChange}
              required
            />
          ) : null}

          <input placeholder="Cigar Name" onChange={nameChange} required />
          <input
            placeholder="Country of Origin"
            onChange={originChange}
            required
          />
          <input placeholder="Wrapper" onChange={wrapperChange} required />
          <input placeholder="Filler" onChange={fillerChange} required />

          <select value={strength} onChange={strengthChange} required>
            <option>Strength</option>
            <option value={"Mild"}>Mild</option>
            <option value={"Mild-Medium"}>Mild-Medium</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Medium-Full"}>Medium-Full</option>
            <option value={"Full"}>Full</option>
          </select>
          <input placeholder="Length" onChange={lengthChange} required />
          <input placeholder="Gauge" onChange={gaugeChange} required />
          <input placeholder="Wrapper Color" onChange={colorChange} required />

          <button type="button" onClick={handleSubmit}>
            Add Cigar
          </button>
        </form>
        {error && <h3>{error}</h3>}
      </AddForm>
    </>
  );
}
