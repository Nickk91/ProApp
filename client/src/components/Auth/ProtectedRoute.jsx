import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "../../pages/style/pagestyle.css";

const ProtectedRoute = ({ Page, typeOfUser }) => {
  const navigate = useNavigate();
  const [authLevel, setAuthLevel] = useState(null); // Null to represent loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getUserAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/users/current`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAuthLevel(response.data.userAuthLevel);
      } catch (error) {
        console.error("Error verifying token:", error);
        setAuthLevel(0); // Consider user unauthorized if error occurs
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
