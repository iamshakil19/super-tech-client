import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function NotForAdmin({ children }) {
  const isLoggedIn = useAuth();
  const { user } = useSelector((state) => state.auth) || {};

  return isLoggedIn &&
    (user?.role === "admin" || user?.role === "moderator") ? (
        <Navigate to="/" />
  ) : (
    children
  );
}
