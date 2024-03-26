export default function validateForm(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}
