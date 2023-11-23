import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: auto;
  min-height: 15vh;
  .footer {
    opacity: 40%;
    position: absolute;
    z-index: -1;
    /* width: 200px;
    height: 300px; */
    /* object-fit: contain;
    overflow-x: hidden; */
  }
  .logo {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    .logo {
      max-width: 100vw;
    }
  }
`;
const NavBorder = styled.div`
  margin: 0;
  display: flex;
`;

export const Footer = () => {
  return (
    <>
      <NavBorder>
        <Nav>
          <img className="logo" src="/humidoro.svg" />
          <img className="footer" src="/footer.svg" />
        </Nav>
      </NavBorder>
    </>
  );
};
