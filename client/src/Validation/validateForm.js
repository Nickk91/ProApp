export default function validateForm(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,64}$/;

  if ("username" in values) {
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length > 15) {
      errors.username = "Username must be 15 characters or fewer.";
    }
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      " Password must be 8-64 characters, with at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).";
  }

  return errors;
}
