import { createBrowserRouter } from "react-router-dom";
// import Layout from "./layout";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SigIn";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
