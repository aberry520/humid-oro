import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const url = "http://127.0.0.1:8001/dj-rest-auth/login/";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
    console.log(data);
    if (data?.key) {
      Cookies.set("Authorization", `Token ${data?.key}`);
      navigate("/user");
    }
    if (data?.password) {
      setErrorMessage(data?.password[0]);
      setError(true);
    }
    if (data?.non_field_errors) {
      setErrorMessage(data?.non_field_errors[0]);
      setError(true);
    }
  };
  const handleClick = (e) => {
    navigate("/signup");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Log In Here</h2>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <br />
        <button type="submit">LogIn</button>
      </form>
      <button type="button" onClick={handleClick}>
        Create Account
      </button>
      {error && <p>{errorMessage}</p>}
    </>
  );
};
