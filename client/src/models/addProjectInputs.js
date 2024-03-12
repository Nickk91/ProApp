const addProjectFormInputs = [
  {
    name: "Project name",
    type: "text",
    label: "Project name",
    placeHolder: "project name",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "Project description",
    type: "text",
    label: "project description",
    placeHolder: "project name",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "Project image URL",
    type: "text",
    label: "Project image URL",
    placeHolder: "Project image URL",
    attributes: { required: true, minLength: 1 },
  },
];

export default addProjectFormInputs;
