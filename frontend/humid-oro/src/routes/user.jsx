import { redirect, useLoaderData } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";
import { LogOut } from "../components/LogOut";
import styled from "styled-components";

const Profile = styled.div`
  border: black solid;
  background-color: #364f59;

  margin: auto;
  width: fit-content;
`;

export async function loader() {
  console.log(Cookies.get());
  try {
    const url = `http://127.0.0.1:8001/dj-rest-auth/user/`;
    const userdata = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization"),
      },
    }).then((response) => response.json());
    console.log(userdata);
    Cookies.set("UserID", `${userdata.id}`);
    if (!Cookies.get("Authorization")) {
      console.error("ERROR: ", error);
    }
    {
      User;
    }
    return userdata;
  } catch (error) {
    return redirect("/login");
  }
}
export default function User() {
  const user = useLoaderData();
  function displayName() {
    if (user.first_name) {
      return user.first_name;
    } else {
      return user.username;
    }
  }
  return (
    <>
      <Profile>
        <h1>My Profile</h1>
        <LogOut />
        <p>Welcome {displayName()}!</p>
        <img src={user.profile.avatar} />
      </Profile>
    </>
  );
}
