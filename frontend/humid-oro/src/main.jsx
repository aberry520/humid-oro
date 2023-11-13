import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home, { loader as homeLoader, loader } from "./routes/home";
import SignUp from "./routes/signup";
import LogIn from "./routes/login";
import ErrorPage from "./routes/error-page";
// import { loader } from './routes/home'
import Search from "./routes/search";
import User, { loader as userLoader } from "./routes/user";
import CigarInfo from "./routes/cigar-info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
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
        // loader: searchLoader,
      },
      {
        path: "info/:id",
        element: <CigarInfo />,
        // loader: searchLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
