import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";
import AdminSection from "../sections/AdminSection";

const ProtectedRoute = () => {
  const { userType } = useContext(UserContext);

  return userType ? <AdminSection /> : <Navigate to="/" />;
};

export default ProtectedRoute;
