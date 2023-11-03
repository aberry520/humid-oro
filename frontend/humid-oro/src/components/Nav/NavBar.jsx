import { Link } from "react-router-dom"
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    gap: 10px;
    max-width: 1000px;
    justify-content: space-around;
    margin: auto;
`
const NavBorder = styled.div`
    border: black solid;
    margin: 0;
`

export const NavBar = () => {

    return (
        <>
        <NavBorder>
            <Nav>
                <Link to={'/'}><p>Home</p></Link>
                <input type="search" placeholder="Search"/>
                <Link to={'user/'}><p>Profile</p></Link>
            </Nav>
        </NavBorder>    
        </>
    )
}