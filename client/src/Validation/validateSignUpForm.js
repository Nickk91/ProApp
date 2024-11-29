export default function validateSignUpForm(values) {
  const errors = {};
  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  if (!values.username || values.username.trim().length === 0) {
    errors.username = "Username is required!";
  } else if (values.username.length > 15) {
    errors.username = "Username must be 15 characters or fewer.";
  } else if (!usernameRegex.test(values.username)) {
    errors.username =
      "Username can only contain English letters, numbers, and underscores.";
  } else if (values.username === values.password) {
    errors.username = "Username can't be the same as the password.";
  }

  return errors;
}
