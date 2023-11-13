import styled from "styled-components";

const Cigar = styled.div`
  border: solid black;
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  min-width: fit-content;
  max-width: 50ch;
  margin: auto;
`;
export const UserReviewItem = ({ review }) => {
  return (
    <>
      <Cigar>
        <h2>{review.cigar.name}</h2>
        <h3>
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
          Rating: {review.rating}
          <br />
          Smoke Time: {review.time} minutes
        </h3>
        <h3>Review:</h3>
        <p>{review.review}</p>
      </Cigar>
    </>
  );
};
