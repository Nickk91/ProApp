export default function Validation() {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    errors.username = "username is Required!";
  }
  if (values.email === "") {
    errors.email = "emails is Required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didn't match";
  }
  if (values.password === "") {
    errors.password = "Password Required";
  } else if (!password_pattern.test(values.password)) {
    errors.email = "Password didn't match";
  }

  return errors;
}
