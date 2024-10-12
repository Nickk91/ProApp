import React from "react";
import PropTypes from "prop-types";
import * as S from "./Styles"; // Ensure the correct path
import { toPercentage } from "../../utils/functions";
import { useState } from "react";

const UserCard = ({ user, projects, onClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const todoProjects = projects.filter(
    (project) => project.projectStatus === "todo"
  );
  const inProgressProjects = projects.filter(
    (project) => project.projectStatus === "in progress"
  );
  const doneProjects = projects.filter(
    (project) => project.projectStatus === "done"
  );

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <S.cardContainer onClick={onClick}>
      <S.topLine>
        <S.username>
          <strong>{user.username.toUpperCase()}</strong>
        </S.username>
      </S.topLine>
      <S.midLine>
        {!isImageLoaded && <S.ImagePlaceholder />}
        <S.userImg
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
        <S.list>
          <S.li>id: {user._id}</S.li>
          <S.li>username: {user.username}</S.li>
          <S.li>email: {user.email}</S.li>
        </S.list>
      </S.midLine>
      <S.bottomContainer>
        <S.list>
          <S.statusWrapper>
            <h4>
              Total projects: {projects.length}{" "}
              {projects.length > 0 ? "(100%)" : ""}
            </h4>
          </S.statusWrapper>
          <S.statusWrapper>
            <S.statusIconTodo />
            <h4>
              Todos: {todoProjects.length}{" "}
              {todoProjects.length > 0
                ? `(${toPercentage(todoProjects.length / projects.length)})`
                : ""}
            </h4>
          </S.statusWrapper>
          <S.statusWrapper>
            <S.statusIconInProg />
            <h4>
              In progress: {inProgressProjects.length}{" "}
              {inProgressProjects.length > 0
                ? `(${toPercentage(
                    inProgressProjects.length / projects.length
                  )})`
                : ""}
            </h4>
          </S.statusWrapper>
          <S.statusWrapper>
            <S.statusIconDone />
            <h4>
              Done: {doneProjects.length}{" "}
              {doneProjects.length > 0
                ? `(${toPercentage(doneProjects.length / projects.length)})`
                : ""}
            </h4>
          </S.statusWrapper>
        </S.list>
      </S.bottomContainer>
    </S.cardContainer>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      projectStatus: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func,
};

export default UserCard;
