import styled from "styled-components";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tippy from "@tippy.js/react";

const Cigar = styled.div`
  border: solid black;
  background-color: #fff8f0;
  width: 30ch;
  min-height: 40ch;
  margin: auto;
  padding: 20px;
  line-height: 1.2;

  button {
    max-width: 20%;
    min-width: fit-content;
    background-color: #840a0a;
    border: medium black solid;
    margin: 10px;
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    background-color: #ce2a2a;
    transform: scale(1.1);
  }
`;
const Check = styled.div`
  position: absolute;
  background-color: #fff8f0;
  max-width: 20ch;
  border: solid black;
  padding: 5px;
`;
const Tip = styled.div`
  background-color: #fff8f0;
  border: black solid;
  position: absolute;
  min-width: 25ch;
  padding-left: 10px;
  margin: 5px;
`;
export const UserReviewItem = ({ review }) => {
  const [display, setDisplay] = useState(true);
  const [deleteCheck, setDeleteCheck] = useState(false);
  const handleDeleteCheck = () => {
    setDeleteCheck(true);
  };
  const handleNo = () => {
    setDeleteCheck(false);
  };
  const handleYes = async (e) => {
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
        <Tippy
          content={
            <Tip>
              <p>
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
              </p>
            </Tip>
          }
        >
          <Cigar>
            <button type="submit" onClick={handleDeleteCheck}>
              X
            </button>
            {deleteCheck && (
              <Check>
                <p>Are you sure you want to deletes this</p>
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleNo}>No</button>
              </Check>
            )}

            <Link key={review.cigar.id} to={"/info/" + review.cigar.id}>
              <h2>{review.cigar.name}</h2>

              <h3>{review.rating}/10</h3>
              <h3>Review:</h3>
              <p>{review.review}</p>
            </Link>
          </Cigar>
        </Tippy>
      ) : null}
    </>
  );
};
