export default function validateTaskAdding(values) {
  const errors = {};

  // Validate Task Name
  if (!values.name) {
    errors.name = "Task name is required!";
  } else if (values.name.length < 1) {
    errors.name = "Task name should be at least 1 characters long.";
  } else if (values.name.length > 30) {
    errors.name = "Task name should not exceed 30 characters.";
  }

  // Validate Task Description
  if (!values.description) {
    errors.description = "Task description is required!";
  } else if (values.description.length < 1) {
    errors.description =
      "Task description should be at least 1 characters long.";
  } else if (values.description.length > 120) {
    errors.description = "Task description should not exceed 120 characters.";
  }

  return errors;
}
