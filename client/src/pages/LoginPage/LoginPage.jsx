import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    setIsLoading(false);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);

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

        localStorage.setItem("token", token);
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
        <h1>Loading...</h1>
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
