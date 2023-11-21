import { redirect, useLoaderData, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { LogOut } from "../components/LogOut";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { UserReviewItem } from "../components/UserReviewItem";

const UserPage = styled.div`
  margin: 25px 0px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;
const Profile = styled.div`
  min-height: 80vh;
  background-color: #d3bfa8;
  color: sienna;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: fit-content;

  padding: 15px;
  img {
    height: auto;
    width: 10rem;
  }
`;
const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto 10px;
  min-width: fit-content;
  max-width: 50ch;
  gap: 15px;
  grid-area: 1 / 2 / 2 / 4;
`;
const Loading = styled.div`
  position: absolute;
  text-align: center;

  top: 20;
  height: 50vh;
  width: 100vw;
  cursor: wait;
  .gif {
    max-width: 300px;
  }
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
    console.error("ERROR: ", error);
    return redirect("/login");
  }
}
export default function User() {
  const user = useLoaderData();
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
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
      <UserPage>
        <Profile>
          <h1>My Profile</h1>
          <LogOut />
          <h4>Welcome {displayName()}!</h4>
          <p>You have reviewed a total of {userList?.count} cigars</p>
        </Profile>
        {loading ? (
          <Loading>
            <img src="/ezgif.com-crop.gif" className="gif" />
            <h3>Loading Your Reviews...</h3>
          </Loading>
        ) : (
          <>
            <UserList>
              {userList?.results.map((review) => {
                return <UserReviewItem key={review.cigar.id} review={review} />;
              })}
            </UserList>
          </>
        )}
      </UserPage>
    </>
  );
}
