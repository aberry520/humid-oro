import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";
export const LogOut = () => {
    const {setIsAuth} = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://127.0.0.1:8001/dj-rest-auth/logout/';
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `${Cookies.get('Authorization')}`
            },
        }).then((response) => response.json());
        setIsAuth(false);
        Cookies.remove("Authorization");
        console.log(data);
        navigate('/login');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">Log Out</button>
            </form>
        </>
    )
}