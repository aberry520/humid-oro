import { LogInForm } from "../components/LogInForm";
import styled from "styled-components";

const LogInDiv = styled.div`
  margin: 19vh auto;
  width: fit-content;
`;

export default function LogIn() {
  return (
    <>
      <LogInDiv>
        <LogInForm />
      </LogInDiv>
    </>
  );
}
