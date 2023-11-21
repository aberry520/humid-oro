import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search } from "./Search";

const Nav = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1000px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;
const Features = styled.div`
  .add {
    max-height: 60px;
    transition: all 0.2s ease-in-out;
  }
  .add:hover {
    transform: scale(1.1);
  }
  display: flex;
  align-items: center;
  width: -webkit-fill-available;
  justify-content: space-evenly;
`;
const NavBorder = styled.div`
  margin: 0;
`;

export const NavBar = () => {
  return (
    <>
      <NavBorder>
        <Nav>
          <Link to={"/"}>
            <img src="/humidoro.svg" title="Home" />
          </Link>
          <Features>
            <Link to={"/"}>
              <img className="add" src="/home.svg" title="Home" />
            </Link>
            <Search />
            <Link to={"user/"}>
              <img className="add" src="/user.svg" title="User Profile" />
            </Link>
            <Link to={"add/"}>
              <img className="add" src="/add.svg" title="Add New Cigar" />
            </Link>
          </Features>
        </Nav>
      </NavBorder>
    </>
  );
};
