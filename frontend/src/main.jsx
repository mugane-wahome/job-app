import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/homepage";
import "./index.css";
import LoginForm, { loginAction } from "./components/login";

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import SignUpForm from "./components/signup";
import JobSearchForm from "./components/jobsearch";
import Jobpostingform from "./components/jobpostingform";
import JobDetails from "./components/jobdetails";
import AppliedJobs from "./components/appliedjobs";
import { AuthContextProvider } from "./context/contextAuth";
import Companies from "./components/companies";

// import jobpostingform from "./fron/components/recruitee/jobpostingform";
const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return redirect("/homepage");
    },
  },
  {
    path: "/homepage",
    index: true,
    element: <Homepage />,
  },

  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    // index: true,
    element: <LoginForm />,
    action: loginAction,
  },
  {
    path: "/jobsearch",
    element: <JobSearchForm />,
  },
  {
    path: "/jobpostingform",
    element: <Jobpostingform />,
  },
  {
    path: "/jobdetails/:jobId",
    element: <JobDetails />,
  },

  {
    path: "/AppliedJobs",
    element: <AppliedJobs />,
  },

  {
    path: "/companies",
    element: <Companies />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
