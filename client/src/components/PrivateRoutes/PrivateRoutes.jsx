import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";

const PrivateRoutes = ({ authLevel }) => {
  const dispatch = useDispatch();
  const userAuthLevel = useSelector((state) => state.auth.user?.authLevel);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      if (!token) {
        dispatch(logout());
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/users/current`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data && response.data.authLevel !== undefined) {
          console.log("User auth level from API:", response.data.authLevel);
        } else {
          throw new Error("Invalid user data");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error validating token:", error);
        dispatch(logout());
        setIsLoading(false);
      }
    };

    if (!isLoggedIn) {
      validateToken();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, isLoggedIn]);

  if (isLoading) {
    return (
      <section className="page">
        <Spinner />
      </section>
    );
  }

  return userAuthLevel >= authLevel ? <Outlet /> : <Navigate to="/loggedout" />;
};

export default PrivateRoutes;
