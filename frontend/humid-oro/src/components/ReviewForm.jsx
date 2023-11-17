import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Review = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    input {
      max-width: fit-content;
      background-color: antiquewhite;
    }
    textarea {
      background-color: antiquewhite;
      color: black;
    }
  }
`;

export const ReviewForm = ({ cigarInfo }) => {
  const [review, setReview] = useState();
  const [rating, setRating] = useState();
  const [time, setTime] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChangeReview = (e) => {
    setReview(e.target.value);
  };
  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const userID = Cookies.get("UserID");
  const reviewInput = {
    rating,
    review,
    time,
    cigar: cigarInfo.id,
    user: userID,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8001/reviewsadd/";
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${Cookies.get("Authorization")}`,
        },
        body: JSON.stringify(reviewInput),
      }).then((response) => response.json());
      console.log(data);
      if (data.id) {
        navigate(`/user/`);
      }
    } catch (err) {
      setError(
        "There was an issue adding this review. Please check your entry and try again."
      );
    }
  };
  return (
    <>
      <Review>
        {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit}>
          <textarea
            name="review"
            placeholder="Description"
            rows="10"
            cols="40"
            required
            onChange={handleChangeReview}
          />
          <input
            name="time"
            placeholder="Minutes Smoked"
            type="number"
            required
            onChange={handleChangeTime}
          />

          <input
            type="decimal"
            name="rating"
            placeholder="Rating out of 10"
            min={0}
            max={10}
            required
            onChange={handleChangeRating}
          />
          <button type="submit">Review</button>
        </form>
      </Review>
    </>
  );
};
