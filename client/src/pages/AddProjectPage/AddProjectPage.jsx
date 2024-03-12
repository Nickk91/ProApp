import React from "react";

const AddProjectPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <>
      <SReturn />
      <GenericFormElad
        title="Add Project"
        inputs={registerFormInputs}
        submitButtonText="NEXT"
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default AddProjectPage;
