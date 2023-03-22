import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useGetCurrentUserQuery } from "../../features/user/usersApi";
import useAuth from "../../hooks/useAuth";

export default function RequireAdmin({ children }) {
  const isLoggedIn = useAuth();
  const { data: user, isError, isLoading, error } = useGetCurrentUserQuery();
  const { role } = user?.data || {};
  const dispatch = useDispatch();
  if (isLoggedIn && role === "user") {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  }

  return isLoggedIn && role === "user" ? <Navigate to="/" /> : children;
}
