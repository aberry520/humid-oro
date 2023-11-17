import { SignUpForm } from "../components/SignUpForm";
import styled from "styled-components";

const LogInDiv = styled.div`
  margin: 19vh auto;
  width: fit-content;
`;

export default function SignUp() {
  return (
    <>
      <LogInDiv>
        <SignUpForm />
      </LogInDiv>
    </>
  );
}
