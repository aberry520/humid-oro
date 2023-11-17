import { NavBar } from "../components/Nav/NavBar";
import styled from "styled-components";
const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 500px;
  }
`;
export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <Error>
        <img src="../../public/error.svg" />
        <form>
          <textarea
            name="error"
            placeholder="Report Issue Here"
            rows="10"
            cols="50"
            required
          />
          <br />
          <button type="button">Submit</button>
        </form>
      </Error>
    </>
  );
}
