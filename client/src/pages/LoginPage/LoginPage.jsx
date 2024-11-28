import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Correct import for jwtDecode
import { login } from "../../slices/authSlice";
import GenericForm from "../../components/GenericForm/GenericForm";
import Spinner from "../../components/Spinner/Spinner";
import * as S from "../../components/StyledComponents/styles";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { loginAndRegisterFormInputs } from "../../constants/formInputsData";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check token on component load
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            // Token expired, remove it
            localStorage.removeItem("token");
            setIsLoading(false);
          } else {
            // Token is valid, fetch user data
            const response = await axios.get(
              `${import.meta.env.VITE_BASEURL}/users/current`,
              { headers: { Authorization: `Bearer ${token}` } }
            );

            // Dispatch login action with user data (including authLevel)
            dispatch(login(response.data));
            navigate("/"); // Redirect to home
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [dispatch, navigate]);

  // Handle login form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/users/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const { accessToken, user } = response.data;

        // Store token and dispatch login action
        localStorage.setItem("token", accessToken);

        dispatch(
          login({
            _id: user._id,
            authLevel: user.authLevel,
            email: user.email,
            username: user.username,
            isLoggedIn: true,
          })
        );

        navigate("/");
      } else {
        console.error("Login failed");
        setDisplayError(true);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      console.error("Login error console log:", errorMessage);
      setServerError(errorMessage); // Save the error for other use cases
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
            serverError={serverError}
          />
        </section>
      )}
    </>
  );
};

export default LoginPage;
