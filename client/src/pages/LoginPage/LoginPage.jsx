import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData.js";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Use navigate instead of history.push
    }
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
      //to : add logic to receive the token from the backend

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;
        console.log("RECEVIED TOKEN:", token);

        localStorage.setItem("token", token);
        navigate("/");
      } else {
        console.error("Login failed");
        //Handle failed login (e.g. display error message to user)
      }
    } catch (error) {
      console.error("Error;", error);
      //Handle error (e.g display error mew)
    }
  };

  return (
    <section className="page">
      <S.ReturnIcon src={ReturnIcon} />

      <GenericForm
        title="Log in"
        inputs={loginAndRegisterFormInputs}
        submitButtonText="LOG IN"
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default LoginPage;
