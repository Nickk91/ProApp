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
