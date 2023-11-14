import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Review = styled.div`
  /* display: flex;
  flex-direction: column; */
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
            cols="50"
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
          <label htmlFor="Rating">
            Rating: 0
            <input
              type="decimal"
              name="rating"
              min={0}
              max={10}
              step={0.5}
              required
              onChange={handleChangeRating}
            />
            10
          </label>
          <button type="submit">Review</button>
        </form>
      </Review>
    </>
  );
};
