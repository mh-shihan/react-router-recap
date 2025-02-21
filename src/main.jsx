import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import SignUp from "./components/signup/SignUp";
import UpdateForm from "./components/update-form/UpdateForm";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "contact", element: <Contact></Contact> },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "userDetails/:id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "update-form",
        element: <UpdateForm></UpdateForm>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
