import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
// import SignUp from "../routes/signup";
import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";

export const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setIsAuth} = useAuth();
    const navigate = useNavigate();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        console.log(JSON.stringify(user))
        console.log(Cookies.get('csrftoken'))
        const url = 'http://127.0.0.1:8001/dj-rest-auth/login/';
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(user)
        }).then((response) => response.json());
        console.log(data);
        Cookies.set('Authorization', `Token ${data.key}`);
        setIsAuth(true);
        navigate('/user');
    }
    const handleClick = (e) => {
        navigate('/signup')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Log In Here</h2>
                <input type="text" placeholder="enter username" name="username" value={username} onChange={handleChangeUsername} />
                <br />
                <input type="password" placeholder="enter password" name="password" value={password} onChange={handleChangePassword} />
                <br/>
                <button type="submit">LogIn</button>
            </form>
            <button type="button" onClick={handleClick}>Create Account</button>
        </>
    )
}