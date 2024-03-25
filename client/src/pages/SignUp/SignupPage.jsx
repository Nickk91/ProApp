import React, { useState } from "react";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { RegisterFormInputsPartTwo } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";

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
          console.log("Invalid username");
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          navigate("/login");
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
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="page">
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
        </section>
      )}
    </>
  );
};

export default SignupPage;
