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
    placeholder: "project name",
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

export {
  addProjectFormInputs,
  loginAndRegisterFormInputs,
  RegisterFormInputsPartTwo,
};
