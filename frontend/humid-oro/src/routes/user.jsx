import { redirect, useLoaderData, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";
import { LogOut } from "../components/LogOut";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { UserReviewItem } from "../components/UserReviewItem";

const Profile = styled.div`
  /* border: black solid; */
  /* background-color: #364f59; */
  /* display: flex; */
  margin: auto;
  width: fit-content;
  img {
    height: auto;
    width: 10rem;
  }
`;
const UserList = styled.div`
  /* border: black solid; */
  /* background-color: #364f59; */

  margin: auto;
  min-width: fit-content;
  max-width: 50ch;
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
  const [userList, setUserList] = useState();
  useEffect(() => {
    getList();
  }, []);
  async function getList() {
    const urlList = `http://127.0.0.1:8001/reviewsuserlist/?ordering=-rating`;
    const userList = await fetch(urlList, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization"),
      },
    }).then((response) => response.json());
    console.log(userList);
    setUserList(userList);
  }

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
        {/* <img src={user.profile.avatar} /> */}
      </Profile>
      <UserList>
        {userList?.results.map((review) => {
          return (
            // <Link key={review.cigar.id} to={"/info/" + review.cigar.id}>
            <UserReviewItem key={review.cigar.id} review={review} />
            // </Link>
          );
        })}
      </UserList>
    </>
  );
}
