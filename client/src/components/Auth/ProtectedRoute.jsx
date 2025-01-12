import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "../../pages/style/pagestyle.css";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { handleLogout } from "../../utils/functions";

const ProtectedRoute = ({ Page, typeOfUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authLevel, setAuthLevel] = useState(null); // Null to represent loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

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

    const getUserAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/users/current`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAuthLevel(response.data.userAuthLevel);
      } catch (error) {
        console.error("Error verifying token:", error);
        setAuthLevel(0);
      } finally {
        setIsLoading(false);
      }
    };

    getUserAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (authLevel === 0) {
        navigate("/login");
      } else if (authLevel < typeOfUser) {
        navigate("/unauthorized");
      }
    }
  }, [isLoading, authLevel, navigate, typeOfUser]);

  if (isLoading) {
    return (
      <section className="page">
        <Spinner />
      </section>
    );
  }

  return authLevel >= typeOfUser ? <Page /> : null;
};

export default ProtectedRoute;
