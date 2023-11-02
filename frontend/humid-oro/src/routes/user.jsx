import { redirect, useLoaderData } from "react-router-dom"
import Cookies from 'js-cookie'
import { useAuth } from "../AuthContext";

export async function loader() {
    // const {isAuth} = useAuth();
    // const token = localStorage.getItem("access_token");
    console.log(Cookies.get())
    try{
        const url = `http://127.0.0.1:8001/dj-rest-auth/user/`
        const userdata = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": Cookies.get('Authorization')
            },
        }).then((response) => response.json());
        console.log(userdata)
          if (!Cookies.get("Authorization")){
            console.error("ERROR: ", error);
          }
          {User}
        return userdata
    } catch (error) {
        return redirect('/login')
    }
}
export default function User (){
    const user = useLoaderData();
    function displayName(){
        if (user.first_name){
            return user.first_name
        }
        else {return user.username}
    };
    return (
        <>
            <h1>My Profile</h1>
            <p>Welcome {displayName()}!</p>
        </>
    )
}