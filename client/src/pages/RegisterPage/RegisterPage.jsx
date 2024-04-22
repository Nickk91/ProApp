import React, { useState, useEffect } from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loggedout");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/users/userexist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const checkData = await response.json();
        if (checkData.error) {
          console.log("Email already exists");
        } else {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          navigate("/signup");
        }
      } else {
        console.error("Email check failed");
      }
    } catch (error) {
      console.error("Error;", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="page">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <S.ReturnIcon src={ReturnIcon} onClick={handleClick} />
          <GenericForm
            title="Register"
            inputs={loginAndRegisterFormInputs}
            submitButtonText="NEXT"
            onSubmit={handleFormSubmit}
          />
        </>
      )}
      ;
    </section>
  );
};

export default RegisterPage;
