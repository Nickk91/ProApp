import React from "react";
import * as S from "../../pages/ProjectPage/StyledComponent/StyledComponents.js";
import trash from "../../assets/images/trash_icon.svg";
import arrowIcon from "../../assets/images/icon_chevron_up.svg";
import TaskStatusSelection from "../TaskStatusSelection/TaskStatusSelection.jsx";
import AnimatedCiEdit from "../AnimatedCiEdit/AnimatedCiEdit.jsx";
import "./style.css";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useSelector } from "react-redux";

const Task = ({
  task,
  i,
  taskStatuses,
  handleTaskStatus,
  openModal,
  handleEditTask,
  handleExtendTask,
  expanded,
}) => {
  const authLevel = useSelector((state) => state.auth.user?.authLevel);

  return (
    <div className={expanded ? "taskbox-expanded" : "taskbox"} key={i}>
      <S.statusWrapper>
        <TaskStatusSelection
          selectedValue={taskStatuses[i]}
          onChange={(newStatus) => handleTaskStatus(task._id, newStatus, i)}
          type="task"
          key={task._id}
          taskId={task.id}
          handleTaskStatus={handleTaskStatus}
        />
        {authLevel === userAuthLevels.admin && (
          <>
            {" "}
            <S.smallTrashIcon
              src={trash}
              onClick={() => openModal("task", task._id)}
            />
            <AnimatedCiEdit
              onClick={() =>
                handleEditTask(
                  task._id,
                  task.name,
                  task.description,
                  task.status
                )
              }
            />
          </>
        )}
      </S.statusWrapper>
      <div className={expanded ? "description-shown" : "description-hidden"}>
        {task.description}
      </div>
      <S.arrowIconUp onClick={() => handleExtendTask(i)} src={arrowIcon} />
    </div>
  );
};

export default Task;
