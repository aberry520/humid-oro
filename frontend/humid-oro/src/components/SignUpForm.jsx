import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";
import { useState } from "react";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password1,
      password2,
    };
    console.log(JSON.stringify(user));
    console.log(Cookies.get("csrftoken"));
    const url = "http://127.0.0.1:8001/dj-rest-auth/registration/";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <br />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password1"
          value={password1}
          onChange={handleChangePassword1}
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password2"
          value={password2}
          onChange={handleChangePassword2}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
