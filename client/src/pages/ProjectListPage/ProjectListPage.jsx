import React from "react";
import {
  useGetProjectsQuery,
  useAddProject,
  useUpdateProject,
  useDeleteProject,
} from "../../api/apiSlice.js";

const ProjectListPage = () => {
  const {
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectsQuery();

  const [addProject] = useAddProjectMutation();
  const [updateProject] = useUpadteMutation();
  const [deleteProject] = useDeleteMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // username, projectName, projectDescription, projectImage,   isCompleted
    addProject({
      userId: 1,
      projectName: "newProject",
      projectDescription: "Descriptive text",
      projectImage: "URL",
      isCompleted: false,
    });
    setNewProject("");
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = JSON.stringify(projects);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section className="page">
      <div className="project">
        <input
          type="checkbox"
          checked={project.isCompleted}
          id={project.id}
          onChange={() =>
            updateProject({ ...project, isCompleted: !isCompleted })
          }
        />
        <label htmlFor={project.id}>{project.projectName}</label>
      </div>
      <button
        className="trash"
        onClick={() => deleteProject({ id: project.id })}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </section>
  );
};

export default ProjectListPage;
