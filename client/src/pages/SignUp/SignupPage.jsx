import React, { useState } from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { RegisterFormInputsPartTwo } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "../style/pagestyle.css";

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    if (username.length > 15) {
      alert("Username must be 15 characters or fewer.");
      return;
    }

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, username }),
        }
      );

      if (response.ok) {
        const checkData = await response.json();
        if (checkData.error) {
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          navigate("/registerSuccess");
        }
      } else {
        console.error("Invalid username");
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
            inputs={RegisterFormInputsPartTwo}
            submitButtonText="SIGN UP"
            onSubmit={handleFormSubmit}
          />
          <S.p>
            By siging up, you agree to Photo's <u>Terms of Service</u> and{" "}
            <u>Privacy Policy.</u>
          </S.p>
        </>
      )}
    </section>
  );
};

export default SignupPage;
