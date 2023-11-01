import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import SignUp from "../routes/signup";
export const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
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
        
        const url = 'http://localhost:8001/token/';
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then((response) => response.json());
        console.log(data);
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('name', data.name)
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