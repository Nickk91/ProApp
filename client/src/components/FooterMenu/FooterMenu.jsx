import React from "react";
import { FiPlus } from "react-icons/fi";
import * as S from "./Styled.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice.js";

const FooterMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("TaskStatus");
    dispatch(logout());
    navigate("/loggedout");
  };

  const handleAddProject = () => {
    navigate("/addproject");
  };

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
          <S.userIcon onClick={() => navigate("/userpage")} />
        </S.li>
        <S.li>
          <S.logoutIcon onClick={handleLogout} />
        </S.li>
      </S.ul>
    </S.menu>
  );
};

export default FooterMenu;
