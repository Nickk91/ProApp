const loginFormModel = [
  // { label: "Log In", type: "text", name: "Log In" },
  { label: "Email", type: "email", name: "email" },
  {
    label: "Password",
    type: "password",
    name: "password",
    minLength: "8",
    required: true,
    placeholder: "Type your password",
    className: "password",
  },
];

export default loginFormModel;

//.inputs-container
// #login-submit
// .line
