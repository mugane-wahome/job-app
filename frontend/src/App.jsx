import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import LoginForm, { loginAction } from "./components/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from "./components/signup";
import JobSearchForm from "./components/jobsearch";
import { AuthContextProvider } from "./context/contextAuth";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    index: true,
    element: <LoginForm />,
    action: loginAction,
  },
  {
    path: "/jobsearch",
    element: <JobSearchForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
