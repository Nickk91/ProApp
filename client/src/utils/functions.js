export const countProjectByStatus = (projects, status) => {
  return projects.filter((project) => project.projectStatus === status).length;
};

export const countTasks = (projects) => {
  const counts = { todo: 0, done: 0, "in progress": 0 };

  projects.forEach((project) => {
    project.projectTasks.forEach((task) => {
      const status = task.status.toLowerCase();
      counts[status] = (counts[status] || 0) + 1;
    });
  });

  return [counts["todo"], counts["in progress"], counts["done"]];
};

export const sum = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

export const toPercentage = (decimalNumber) => {
  const percentage = decimalNumber * 100;
  return `${parseFloat(percentage.toFixed(1))}%`;
};

export const formatTaskCount = (count, totalCount, status) => {
  const percentage = toPercentage(count / totalCount);
  const taskLabel = count === 1 ? "task" : "tasks";
  return `Of these tasks: ${count} (${percentage}) ${taskLabel} ${
    count === 1 ? "is" : "are"
  } ${status}`;
};

export const formatProjectCount = (count, status) => {
  const projectLabel = count === 1 ? "project" : "projects";
  const verb = count === 1 ? "is" : "are";
  return `${count} ${projectLabel} ${verb} ${status}`;
};

export const checkIfUrl = (str) => {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(expression);

  return str.match(regex);
};

export const handleSortByUsername = (users) => {
  const sortedUsers = [...users].sort((a, b) => {
    const nameA = a.username;
    const nameB = b.username;

    // Regular expressions to test if the first character is a letter
    const isAlphaA = /^[a-zA-Z]/.test(nameA);
    const isAlphaB = /^[a-zA-Z]/.test(nameB);

    // If both are alphabetic or non-alphabetic, use localeCompare with numeric option
    if ((isAlphaA && isAlphaB) || (!isAlphaA && !isAlphaB)) {
      return nameA.localeCompare(nameB, undefined, { numeric: true });
    }

    // If only one is alphabetic, the alphabetic one should come first
    if (isAlphaA) return -1;
    if (isAlphaB) return 1;

    return 0; // This line will rarely be reached
  });

  return sortedUsers;
};

export const handleSortByProjectQuantity = (users) => {
  console.log("RUNNING handleSortByProjectQuantity");
  console.log(users[0].projects);
  const sortedUsers = [...users].sort(
    (a, b) => b.projects.length - a.projects.length
  );
  console.log(sortedUsers);
  return sortedUsers;
};
