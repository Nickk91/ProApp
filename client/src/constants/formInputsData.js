const addProjectFormInputs = [
  {
    name: "projectName",
    type: "text",
    label: "Project name",
    placeholder: "Project name",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "projectDescription",
    type: "text",
    label: "Project description",
    placeholder: "Project description",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "projectImageURL",
    type: "text",
    label: "Project image URL",
    placeholder: "Project image URL",
    attributes: { required: true, minLength: 1 },
  },
];

const loginAndRegisterFormInputs = [
  {
    name: "email",
    type: "email",

    placeholder: "jane@example.com",
    attributes: {
      required: true,
      minLength: 4,
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
    attributes: { required: true, minLength: 8 },
  },
];

const RegisterFormInputsPartTwo = [
  {
    label: "username",
    type: "text",
    name: "username",
    placeholder: "the_jane",
    attributes: { required: true, minLength: 1, maxLength: 15 },
  },
];

const addTaskFormInputs = [
  {
    name: "taskName",
    type: "text",
    placeholder: "Task Name",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "taskDescription",
    type: "text",
    label: "Task description",
    placeholder: "Task description",
    attributes: { required: true, minLength: 1 },
  },
];

export {
  addProjectFormInputs,
  loginAndRegisterFormInputs,
  RegisterFormInputsPartTwo,
  addTaskFormInputs,
};
