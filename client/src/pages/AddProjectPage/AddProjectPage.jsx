import React, { useState } from "react";
import { addProjectFormInputs } from "../../constants/formInputsData.js";
import GenericForm from "../../components/GenericForm/GenericForm.jsx";
import * as S from "../../components/StyledComponents/styles.jsx";
import ReturnIcon from "../../assets/images/back_icon.svg";
import { useNavigate } from "react-router-dom";

const AddProjectPage = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  //ADD BACKEND VALIDATIONS
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const projectName = formData.get("Project name");
    const projectDescription = formData.get("Project description");
    const projectImage = formData.get("Project image URL");

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_BASEURL}/projects`, {
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
      });

      if (response.ok) {
        const data = await response.json();

        navigate("/");
      } else {
        console.error("Adding project failed:", await response.json());
      }
    } catch (error) {
      console.error("Error;", error);
      setDisplayError(true);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="page">
      <S.ReturnIcon onClick={handleBack} src={ReturnIcon} />
      <GenericForm
        title="Add Project"
        inputs={addProjectFormInputs}
        submitButtonText="ADD"
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default AddProjectPage;
