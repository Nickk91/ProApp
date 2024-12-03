import * as S from "../StyledComponents/styles.jsx";
import todo from "../../assets/images/status_todo.svg";
import inProgress from "../../assets/images/status_inprogress.svg";
import done from "../../assets/images/status_done.svg";
import { useState } from "react";

const StatusesContainer = ({ selectedStatus, setSelectedStatus }) => {
  console.log("selectedStatus:", selectedStatus);

  const statuses = [
    { key: "todo", src: todo, alt: "status todo button" },
    { key: "in progress", src: inProgress, alt: "status in progress button" },
    { key: "done", src: done, alt: "status done button" },
  ];

  return (
    <S.statusesContainer>
      {statuses.map((status) =>
        selectedStatus === status.key ? (
          <S.selectedStatusButtonCasule key={status.key}>
            <S.statusButton src={status.src} alt={status.alt} />
          </S.selectedStatusButtonCasule>
        ) : (
          <S.statusButtonCasule
            key={status.key}
            onClick={() => setSelectedStatus(status.key)}
          >
            <S.statusButton src={status.src} alt={status.alt} />
          </S.statusButtonCasule>
        )
      )}
    </S.statusesContainer>
  );
};

export default StatusesContainer;
