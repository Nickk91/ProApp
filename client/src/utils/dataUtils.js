// src/utils/dataUtils.js

import {
  countProjectByStatus,
  countTasks,
  sum,
  toPercentage,
} from "./functions.js";

export const getProjectCounts = (projects) => {
  const todoProjectCount = countProjectByStatus(projects, "todo");
  const inProgressProjectCount = countProjectByStatus(projects, "in progress");
  const doneProjectCount = countProjectByStatus(projects, "done");
  const totalProjectCount =
    doneProjectCount + inProgressProjectCount + todoProjectCount;

  const projectsCounts = [
    {
      name: "Todo projects",
      label: `Todo ${toPercentage(todoProjectCount / totalProjectCount)} `,
      value: todoProjectCount,
    },
    {
      name: "In progress projects",
      label: `Inprog ${toPercentage(
        inProgressProjectCount / totalProjectCount
      )} `,
      value: inProgressProjectCount,
    },
    {
      name: "Done projects",
      label: `Done ${toPercentage(doneProjectCount / totalProjectCount)} `,
      value: doneProjectCount,
    },
  ];

  return projectsCounts;
};

export const getTaskCounts = (projects) => {
  const totalTaskCount = sum(countTasks(projects));
  const todoTaskCount = countTasks(projects)[0];
  const inprogressTaskCount = countTasks(projects)[1];
  const doneTaskCount = countTasks(projects)[2];

  const taskCounts = [
    {
      name: "Todo tasks",
      label: `Todo ${toPercentage(todoTaskCount / totalTaskCount)} `,
      value: todoTaskCount,
    },
    {
      name: "In progress tasks",
      label: `Inprog ${toPercentage(inprogressTaskCount / totalTaskCount)} `,
      value: inprogressTaskCount,
    },
    {
      name: "Done tasks",
      label: `Done ${toPercentage(doneTaskCount / totalTaskCount)} `,
      value: doneTaskCount,
    },
  ];

  return taskCounts;
};
