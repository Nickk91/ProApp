export const countProjectByStatus = (projects, status) => {
  return projects.filter((project) => project.projectStatus === status).length;
};
