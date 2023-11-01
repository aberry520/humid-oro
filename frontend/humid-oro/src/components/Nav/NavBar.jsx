import { Link } from "react-router-dom"
import styled from "styled-components";
import { LogOut } from "../LogOut";

const Nav = styled.div`
    display: flex;
    gap: 10px;
`

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Link to={'/'}><p>Home</p></Link>
                <Link to={'user/'}><p>Profile</p></Link>
                <LogOut/>
                
            </Nav>
        </>
    )
}