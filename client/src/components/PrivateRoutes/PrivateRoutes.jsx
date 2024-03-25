import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoutes = ({ authLevel }) => {
  const [userAuthLevel, setUserAuthLevel] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUserAuthLevel(0);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        console.log(token);
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/users/current`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUserAuthLevel(response.data.userAuthLevel);
        setIsLoading(false);
      } catch (error) {
        setUserAuthLevel(0);
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  // const token = localStorage.getItem("token");
  // console.log(`in the PrivateRoutes component ${token}`);

  return (
    <>
      {isLoading ? (
        <h1>Loading..</h1>
      ) : userAuthLevel >= authLevel ? (
        <Outlet />
      ) : (
        <Navigate to="/loggedout" />
      )}
    </>
  );
};

export default PrivateRoutes;
