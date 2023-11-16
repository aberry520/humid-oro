import { Footer } from "../components/Footer";
import { NavBar } from "../components/Nav/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
export default function Root() {
  return (
    <>
      <RootDiv>
        <NavBar />
        <Outlet />
        <Footer />
      </RootDiv>
    </>
  );
}
