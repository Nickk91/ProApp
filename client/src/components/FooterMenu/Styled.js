import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";

export const menu = styled.div`
  position: fixed;
  bottom: 0;
  height: 100px;
  border-top: 1px solid black;
  z-index: 999;
  display: flex;
  width: 100%;
  background-color: rgb(240, 240, 240);
  min-width: 300px;
  justify-content: center;
  align-items: center;
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  max-width: 400px;
`;
export const li = styled.ul`
  align-self: center;
  text-align: center;
  margin-top: 3px;
  cursor: pointer;
`;

export const plus = styled.div`
  height: 30px;
  width: 50px;
  background-image: linear-gradient(to bottom left, #ff00d6, #ff4d00);
  color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const SearchIcon = styled(CiSearch)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const homeIcon = styled(HiOutlineHome)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const logoutIcon = styled(IoIosLogOut)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const userIcon = styled(IoPersonOutline)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const usersIcon = styled(PiUsersLight)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;
