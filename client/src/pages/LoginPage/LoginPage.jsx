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

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    setIsLoading(false);
  }, [dispatch, navigate]);

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
        console.log(data);
        const token = data.accessToken;
        console.log(data);
        const user = data.user;
        console.log(user);

        localStorage.setItem("token", token);
        dispatch(login(user));
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error;", error);
      setDisplayError(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <section className="page">
          <Spinner />
        </section>
      ) : (
        <section className="page">
          <S.ReturnIcon src={ReturnIcon} />
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
