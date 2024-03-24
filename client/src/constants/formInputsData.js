const addProjectFormInputs = [
  {
    name: "Project name",
    type: "text",
    label: "Project name",
    placeholder: "project name",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "project description",
    type: "text",
    label: "Project description",
    placeholder: "project description",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "Project image URL",
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
    // label: "Username",

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
    // label: "Password",
    attributes: { required: true, minLength: 8 },
  },
];

const RegisterFormInputsPartTwo = [
  {
    label: "username",
    type: "text",
    name: "username",
    placeholder: "the_jane",
  },
];

const addTaskFormInputs = [
  {
    name: "task name",
    type: "text",
    placeholder: "Task Name",
    attributes: { required: true, minLength: 1 },
  },
  {
    name: "task description",
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
