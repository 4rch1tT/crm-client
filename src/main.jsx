import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Customers from "./components/Customers";
import CustomerList from "./pages/CustomerList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "home",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "customer",
    element: (
      <>
        <Header />
        <CustomerList/>
      </>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
