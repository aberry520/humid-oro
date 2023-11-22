import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styled from "styled-components";
const Logout = styled.div`
  form {
    box-shadow: none;
  }
`;
export const LogOut = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://humid-oro.onrender.com/dj-rest-auth/logout/";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Cookies.get("Authorization")}`,
      },
    }).then((response) => response.json());
    Cookies.remove("Authorization");
    Cookies.remove("UserID");
    console.log(data);
    navigate("/login");
  };
  return (
    <>
      <Logout>
        <form onSubmit={handleSubmit}>
          <button type="submit">Log Out</button>
        </form>
      </Logout>
    </>
  );
};
