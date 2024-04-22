import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

import { IoIosLogOut } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import * as S from "./Styled.js";
import { useNavigate } from "react-router-dom";

const FooterMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/loggedout");
  };

  const handleAddProject = () => {
    navigate("/addproject");
  };

  return (
    <S.menu>
      <S.ul>
        <S.li>
          <HiOutlineHome />
        </S.li>
        <S.li>
          <CiSearch />
        </S.li>
        <S.plus>
          <S.li>
            <FiPlus onClick={handleAddProject} />
          </S.li>
        </S.plus>

        <S.li>
          <IoPersonOutline onClick={() => navigate("/userpage")} />
        </S.li>
        <S.li>
          <IoIosLogOut onClick={handleLogout} />
        </S.li>
      </S.ul>
    </S.menu>
  );
};

export default FooterMenu;
