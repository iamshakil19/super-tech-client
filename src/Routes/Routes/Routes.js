import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginGroup/Login/Login";
import SignUp from "../../Pages/LoginGroup/SignUp/SignUp";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/account/login",
        element: <Login />,
      },
      {
        path: "/account/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
