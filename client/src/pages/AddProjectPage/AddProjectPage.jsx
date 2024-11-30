import React, { useEffect, useState } from "react";
import { addProjectFormInputs } from "../../constants/formInputsData.js";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";
import "../style/pagestyle.css";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useSelector } from "react-redux";
import validateProjectAdding from "../../Validation/validateProjectAdding.js";

const AddProjectPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingProjectToAnotherUser, setIsAddingProjectToAnotherUser] =
    useState(false);
  const [displayFormError, setDisplayFormError] = useState(false);
  const [formErrors, setFormErrors] = useState(undefined);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const authLevel = useSelector((state) => state.auth.user?.authLevel);
  const userId = useSelector((state) => state.userId.value);

  useEffect(() => {
    if (userId && authLevel === userAuthLevels.admin) {
      setIsAddingProjectToAnotherUser(true);
    }
  }, [userId, authLevel]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const projectName = formData.get("projectName").trim();
    const projectDescription = formData.get("projectDescription").trim();
    const projectImageURL = formData.get("projectImageURL").trim();

    const errors = validateProjectAdding({
      projectName,
      projectDescription,
      projectImageURL,
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setDisplayFormError(true);
      return;
    }

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      let response;

      if (isAddingProjectToAnotherUser) {
        response = await fetch(
          `${import.meta.env.VITE_BASEURL}/projects/addprojectbyadmin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              projectName,
              projectDescription,
              projectImage,
              userId,
            }),
          }
        );
      } else {
        response = await fetch(
          `${import.meta.env.VITE_BASEURL}/projects/addproject`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              projectName,
              projectDescription,
              projectImage,
            }),
          }
        );
      }

      if (response.ok) {
        const data = await response.json();
        navigate(`/projects/${data._id}`);
      } else {
        console.error("Adding project failed:", await response.json());
      }
    } catch (error) {
      console.error("Error;", error);

      setServerError(
        `${error.message}. Please try again.` || "An unexpected error occurred."
      );
    }
    setIsLoading(false);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="page">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <S.ReturnIcon onClick={handleBack} src={ReturnIcon} />
          <GenericForm
            title="Add Project"
            inputs={addProjectFormInputs}
            submitButtonText="ADD"
            onSubmit={handleFormSubmit}
            formErrors={formErrors}
            displayFormError={displayFormError}
            serverError={serverError}
          />
        </>
      )}

      <FooterMenu />
    </section>
  );
};

export default AddProjectPage;
