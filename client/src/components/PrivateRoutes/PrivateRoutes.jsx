import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ authLevel }) => {
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let userAuthLevel = useSelector((state) => state.auth.user?.authLevel);

  if (!isLoggedIn) {
    return <Navigate to="/loggedout" />;
  }

  if (isLoggedIn && userAuthLevel < authLevel) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
