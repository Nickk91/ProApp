import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ authLevel }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userAuthLevel = useSelector((state) => state.auth.user?.authLevel);

  console.log("IN PRIVATE ROUTES:");

  // Preventing multiple navigations or re-renders by adding necessary checks.
  if (!isLoggedIn) {
    return <Navigate to="/loggedout" replace />;
  }

  if (isLoggedIn && userAuthLevel < authLevel) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
