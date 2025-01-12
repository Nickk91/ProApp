import React from "react";
import { FiPlus } from "react-icons/fi";
import * as S from "./Styled.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice.js";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { handleLogout } from "../../utils/functions.js";

const FooterMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const authLevel = user?.authLevel;
  const handleLogout = () => {
    handleLogout(navigate, dispatch);
  };

  const handleAddProject = () => {
    navigate("/addproject");
  };

  if (!user) {
    return null;
  }

  return (
    <S.menu>
      <S.ul>
        <S.li>
          <S.homeIcon onClick={() => navigate("/")} />
        </S.li>
        <S.li>
          <S.SearchIcon onClick={() => navigate("/projects/search")} />
        </S.li>
        <S.li onClick={handleAddProject}>
          <S.plus>
            <FiPlus />
          </S.plus>
        </S.li>
        <S.li>
          <S.userIcon onClick={() => navigate(`/userpage/${user._id}`)} />
        </S.li>
        {authLevel === userAuthLevels.admin && (
          <S.li>
            <S.usersIcon onClick={() => navigate("/users")} />
          </S.li>
        )}
        <S.li>
          <S.logoutIcon onClick={handleLogout} />
        </S.li>
      </S.ul>
    </S.menu>
  );
};

export default FooterMenu;
