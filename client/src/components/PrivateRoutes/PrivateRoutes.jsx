import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const PrivateRoutes = ({ authLevel }) => {
  const { isLoggedIn, user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Spinner />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/loggedout" replace />;
  }

  if (user?.authLevel < authLevel) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
