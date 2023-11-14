import styled from "styled-components";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cigar = styled.div`
  border: solid black;
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  min-width: fit-content;
  max-width: 50ch;
  margin: auto;
  button {
    width: 20%;
    background-color: #840a0a;
    border: medium black solid;
    margin: 10px;
  }
`;
export const UserReviewItem = ({ review }) => {
  const [display, setDisplay] = useState(true);
  const handleDelete = async (e) => {
    // e.preventDefault();
    const url = `http://127.0.0.1:8001/reviewsuserlist/${review.id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Cookies.get("Authorization")}`,
      },
    });
    setDisplay(false);
  };
  return (
    <>
      {display == true ? (
        <Cigar>
          <button type="submit" onClick={handleDelete}>
            Delete Review
          </button>
          <Link key={review.cigar.id} to={"/info/" + review.cigar.id}>
            <h2>{review.cigar.name}</h2>
            <h3>
              My Rating: {review.rating}
              <br />
              Brand: {review.cigar.brand.name}
              <br />
              Country: {review.cigar.origin}
              <br />
              Strength: {review.cigar.strength}
              <br />
              Length: {review.cigar.length}"
              <br />
              Ring Gauge: {review.cigar.gauge}
              <br />
              Smoke Time: {review.time} minutes
            </h3>
            <h3>Review:</h3>
            <p>{review.review}</p>
          </Link>
        </Cigar>
      ) : null}
    </>
  );
};
