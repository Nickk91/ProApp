import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ authLevel }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userAuthLevel = useSelector((state) => state.auth.user?.authLevel);

  if (!isLoggedIn) {
    return <Navigate to="/loggedout" replace />;
  }

  if (isLoggedIn && userAuthLevel < authLevel) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
