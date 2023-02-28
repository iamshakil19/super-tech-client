
import { createBrowserRouter } from "react-router-dom";
import AdminDashboardLayout from "../../Layout/AdminDashboard/AdminDashboardLayout";
import MainLayout from "../../Layout/Main/MainLayout";
import ProductFilterLayout from "../../Layout/ProductFilter/ProductFilterLayout";
import UserDashboardLayout from "../../Layout/UserDashboard/UserDashboardLayout";
import AddProducts from "../../Pages/DashboardPages/AdminPage/AddProducts";
import Admin from "../../Pages/DashboardPages/AdminPage/Admin";
import Dashboard from "../../Pages/DashboardPages/AdminPage/Dashboard";
import ManageOrders from "../../Pages/DashboardPages/AdminPage/ManageOrders";
import ManageProducts from "../../Pages/DashboardPages/AdminPage/ManageProducts";
import Settings from "../../Pages/DashboardPages/AdminPage/Settings";
import Users from "../../Pages/DashboardPages/AdminPage/Users";
import MyOrders from "../../Pages/DashboardPages/UserPage/Orders/MyOrders";
import Profile from "../../Pages/DashboardPages/UserPage/Profile/Profile";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginGroup/Login/Login";
import SignUp from "../../Pages/LoginGroup/SignUp/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";
import Product from "../../Pages/Product/Product";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/account",
    element: <UserDashboardLayout />,
    children: [
      {
        path: "/account",
        element: <Profile />,
      },
      {
        path: "orders",
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/collections",
    element: <ProductFilterLayout />,
    children: [
      {
        path: "/collections",
        element: <Product />,
      },
      {
        path: "/collections/homeFurniture",
        element: <Product />,
      },
      {
        path: "/collections/table",
        element: <Product />,
      },
      {
        path: "/collections/storage",
        element: <Product />,
      },
      {
        path: "/collections/steelFurniture",
        element: <Product />,
      },
      {
        path: "/collections/chair",
        element: <Product />,
      },
      {
        path: "/collections/sofa",
        element: <Product />,
      },
      {
        path: "/collections/workStation",
        element: <Product />,
      },
      {
        path: "/collections/garments",
        element: <Product />,
      },
      {
        path: "/collections/interior",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);

export default routes;
