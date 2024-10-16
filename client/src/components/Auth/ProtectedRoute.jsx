import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ProtectedRoute = ({ Page, typeOfUser }) => {
  const navigate = useNavigate();
  const [authLevel, setAuthLevel] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(`in the Priavte Routes compenent ${token}`);
    const getUserAuth = async () => {
      try {
        const level = await axios.get("http://localhost:3000/authGood");
        const userLevel = level.data.userLevel;
        if (userLevel !== 1 && userLevel !== 2) {
          setAuthLevel(0);
        } else {
          setAuthLevel(userLevel);
        }
      } catch (error) {
        setAuthLevel(0);
      } finally {
        setIsLoading(false);
      }
    };

    getUserAuth();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && authLevel === typeOfUser && <Page />}
      {!isLoading && authLevel !== typeOfUser && navigate("/login")}
    </>
  );
};

export default ProtectedRoute;
