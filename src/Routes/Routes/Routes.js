import { createBrowserRouter } from "react-router-dom";
import AdminDashboardLayout from "../../Layout/AdminDashboard/AdminDashboardLayout";
import MainLayout from "../../Layout/Main/MainLayout";
import ProductFilterLayout from "../../Layout/ProductFilter/ProductFilterLayout";
import UserDashboardLayout from "../../Layout/UserDashboard/UserDashboardLayout";
import AddProducts from "../../Pages/DashboardPages/AdminPage/AddProduct/AddProducts";
import Admin from "../../Pages/DashboardPages/AdminPage/Admin/Admin";
import Dashboard from "../../Pages/DashboardPages/AdminPage/Dashboard/Dashboard";
import ManageOrders from "../../Pages/DashboardPages/AdminPage/ManageOrders/ManageOrders";
import ManageProducts from "../../Pages/DashboardPages/AdminPage/ManageProducts/ManageProducts";
import Settings from "../../Pages/DashboardPages/AdminPage/Settings/Settings";
import Users from "../../Pages/DashboardPages/AdminPage/Users/Users";
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
        path: "/collections/home-furniture",
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
        path: "/collections/steel-furniture",
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
        path: "/collections/work-station",
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
      {
        path: "/collections/home-furniture/bed",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/dressing-table",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/cup-board",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/wardrobe",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/reading-table",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/tv-trolley",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/book-shelf",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/showcase-corner-shelf",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/dinner-wagon",
        element: <Product />,
      },
      {
        path: "/collections/home-furniture/dinning-table-chair",
        element: <Product />,
      },
      {
        path: "/collections/table/director-table",
        element: <Product />,
      },
      {
        path: "/collections/table/executive-table",
        element: <Product />,
      },
      {
        path: "/collections/table/manager-table",
        element: <Product />,
      },
      {
        path: "/collections/table/computer-table",
        element: <Product />,
      },
      {
        path: "/collections/storage/drawer",
        element: <Product />,
      },
      {
        path: "/collections/storage/side-cabinet",
        element: <Product />,
      },
      {
        path: "/collections/storage/file-cabinet",
        element: <Product />,
      },
      {
        path: "/collections/storage/multipurpose-shelf",
        element: <Product />,
      },
      {
        path: "/collections/storage/shoe-rack",
        element: <Product />,
      },
      {
        path: "/collections/steel-furniture/almirah",
        element: <Product />,
      },
      {
        path: "/collections/steel-furniture/four-drawer",
        element: <Product />,
      },
      {
        path: "/collections/steel-furniture/three-drawer",
        element: <Product />,
      },
      {
        path: "/collections/steel-furniture/drawer-cum-file-cabinet",
        element: <Product />,
      },
      {
        path: "/collections/steel-furniture/slotted-angle-rack",
        element: <Product />,
      },
      {
        path: "/collections/steel-furniture/heavy-duty-rack",
        element: <Product />,
      },
      {
        path: "/collections/chair/high-back",
        element: <Product />,
      },
      {
        path: "/collections/chair/medium-back",
        element: <Product />,
      },
      {
        path: "/collections/chair/low-back",
        element: <Product />,
      },
      {
        path: "/collections/chair/fixed-visitor",
        element: <Product />,
      },
      {
        path: "/collections/chair/tool",
        element: <Product />,
      },
      {
        path: "/collections/chair/auditorium-chair",
        element: <Product />,
      },
      {
        path: "/collections/chair/group-chair",
        element: <Product />,
      },
      {
        path: "/collections/sofa/sofa",
        element: <Product />,
      },
      {
        path: "/collections/sofa/center-table",
        element: <Product />,
      },
      {
        path: "/collections/sofa/divan",
        element: <Product />,
      },
      {
        path: "/collections/work-station/fabric",
        element: <Product />,
      },
      {
        path: "/collections/work-station/metal",
        element: <Product />,
      },
      {
        path: "/collections/work-station/others",
        element: <Product />,
      },
      {
        path: "/collections/garments/qc-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/center-cutting-packing-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/input-loading-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/tagging-poly-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/cut-part-inspection-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/fabric-relaxing-multi-level-rack",
        element: <Product />,
      },
      {
        path: "/collections/garments/inspection-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/measurement-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/iron-table",
        element: <Product />,
      },
      {
        path: "/collections/garments/worker-chair",
        element: <Product />,
      },
      {
        path: "/collections/interior/living",
        element: <Product />,
      },
      {
        path: "/collections/interior/kitchen",
        element: <Product />,
      },
      {
        path: "/collections/interior/office",
        element: <Product />,
      },
      {
        path: "/collections/interior/restaurant",
        element: <Product />,
      },
      {
        path: "/collections/interior/others",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
