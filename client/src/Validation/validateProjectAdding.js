export default function validateProjectAdding(values) {
  const errors = {};
  const urlRegex =
    /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:[0-9]+)?(\/[^\s]*)?$/;

  // Validate Project Image
  if (!values.projectImageURL || !urlRegex.test(values.projectImageURL)) {
    errors.projectImageURL = "Please enter a valid URL for your project image.";
  }

  // Validate Project Name
  if (!values.projectName) {
    errors.projectName = "Project name is required!";
  } else if (values.projectName.length < 1) {
    errors.projectName = "Project name should be at least 1 characters long.";
  } else if (values.projectName.length > 30) {
    errors.projectName = "Project name should not exceed 30 characters.";
  }

  // Validate Project Description
  if (!values.projectDescription) {
    errors.projectDescription = "Project description is required!";
  } else if (values.projectDescription.length < 1) {
    errors.projectDescription =
      "Project description should be at least 1 characters long.";
  } else if (values.projectDescription.length > 120) {
    errors.projectDescription =
      "Project description should not exceed 120 characters.";
  }

  return errors;
}
