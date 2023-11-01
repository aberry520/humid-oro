import { useNavigate } from "react-router-dom";

export const LogOut = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = {
            refresh_token: localStorage.getItem('refresh_token')
        }
        console.log(token);
        console.log(localStorage.getItem('access_token'));
        const Url = 'http://localhost:8000/logout/';
        const data = await fetch(Url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token),
        })
        console.log(data);
        localStorage.clear();
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