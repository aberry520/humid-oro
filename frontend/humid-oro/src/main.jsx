import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home from "./routes/home";
import SignUp from "./routes/signup";
import LogIn from "./routes/login";
import ErrorPage from "./routes/error-page";
import Search from "./routes/search";
import User, { loader as userLoader } from "./routes/user";
import CigarInfo from "./routes/cigar-info";
import UserAdd from "./routes/user-add.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
      {
        path: "login/",
        element: <LogIn />,
      },
      {
        path: "user/",
        element: <User />,
        loader: userLoader,
      },
      {
        path: "search/:search",
        element: <Search />,
      },
      {
        path: "info/:id",
        element: <CigarInfo />,
      },
      {
        path: "add/",
        element: <UserAdd />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
