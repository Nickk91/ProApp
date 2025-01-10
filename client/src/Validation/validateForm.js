export default function validateForm(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-+=~`])[a-zA-Z\d!@#$%^&*_\-+=~`]{8,64}$/;

  // Validate email
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Validate password
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.email === values.password) {
    errors.password = "Email can't be the same as the password.";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Password must be 8-64 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*_-+=~`).";
  }

  return errors;
}
