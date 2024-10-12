import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";
import Spinner from "../../components/Spinner/Spinner.jsx";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice.js";
import "../style/pagestyle.css";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          setIsLoading(false);
        } else {
          navigate("/");
        }
      }
      setIsLoading(false);
    };

    checkToken();
  }, [navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;
        const user = data.user;

        localStorage.setItem("token", token);
        dispatch(login(user));
        navigate("/");
      } else {
        console.error("Login failed");
        setDisplayError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setDisplayError(true);
    }
  };

  const fetchProtectedData = async () => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token); // Log the token retrieved from localStorage

    if (!token) {
      console.error("Token not found");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/protected-route`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("Failed to fetch protected data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Only call fetchProtectedData if necessary
    const token = localStorage.getItem("token");
    if (token) {
      fetchProtectedData();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <section className="page">
          <Spinner />
        </section>
      ) : (
        <section className="page">
          <S.ReturnIcon
            src={ReturnIcon}
            onClick={() => navigate("/loggedout")}
          />
          <GenericForm
            title="Log in"
            inputs={loginAndRegisterFormInputs}
            submitButtonText="LOG IN"
            onSubmit={handleFormSubmit}
            displayError={displayError}
          />
        </section>
      )}
    </>
  );
};

export default LoginPage;
