import React, { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Spinner from "../Spinner/Spinner";
import { handleLogout } from "../../utils/functions";

const PrivateRoutes = ({ authLevel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user, loading } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          handleLogout(navigate, dispatch);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        handleLogout(navigate, dispatch);
      }
    }
  }, [dispatch, navigate, token]);

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
