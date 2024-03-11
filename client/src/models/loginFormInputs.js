const loginFormInputs = [
  {
    name: "email",
    type: "email",
    // label: "Username",
    placeHolder: "jane@example.com",
    attributes: { required: true, minLength: 4 },
  },
  {
    name: "password",
    type: "password",
    placeHolder: "password",

    // label: "Password",
    attributes: { required: true, minLength: 8 },
  },
];

export default loginFormInputs;
