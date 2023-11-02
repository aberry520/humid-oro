import { AuthProvider } from "../AuthContext";
import { NavBar } from "../components/Nav/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {

    return(
        <>
        <AuthProvider>
        <NavBar/>
            <Outlet/>
        </AuthProvider>
        </>
    )
}