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

const AddProjectPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [isAddingProjectToAnotherUser, setIsAddingProjectToAnotherUser] =
    useState(false);
  //ADD BACKEND VALIDATIONS
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

    const projectName = formData.get("Project name");
    const projectDescription = formData.get("Project description");
    const projectImage = formData.get("Project image URL");

    //     router.post("/addproject", validateToken, addProject);
    // router.post("/addingproject", validateToken, addProject);

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (isAddingProjectToAnotherUser) {
        console.log("trying to add project to user by admin");
        const response = await fetch(
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
        const response = await fetch(
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

      // projectName: req.body.projectName,
      // projectDescription: req.body.projectDescription,
      // projectImage: req.body.projectImage,
      // user: req.user._id,

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
          />
        </>
      )}

      <FooterMenu />
    </section>
  );
};

export default AddProjectPage;
