import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";
import { useSelector } from "react-redux";
import { userAuthLevels } from "../../constants/userAuthLevels.js";
import { useParams } from "react-router-dom";

const Userpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  // app.use("/api/pro-app/users/current", currentUser);

  const { userId } = useParams();

  const authLevel = useSelector((state) => state.auth.user?.authLevel);
  const id = useSelector((state) => state.auth.user._id);
  useEffect(() => {
    if (authLevel === userAuthLevels.admin && userId !== id) {
      const fetchUserById = async () => {
        try {
          const token = localStorage.getItem("token");

          const response = await fetch(
            `${import.meta.env.VITE_BASEURL}/users/${userId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch different user");
          }
          const data = await response.json();
          setData(data);
          console.log("user data is:", data);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      };
      fetchUserById();
    } else {
      const fetchUser = async () => {
        try {
          const token = localStorage.getItem("token");

          const response = await fetch(
            `${import.meta.env.VITE_BASEURL}/users/current`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch current user");
          }
          const data = await response.json();
          setData(data);
          console.log("user data is:", data);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      };
      fetchUser();
    }
  }, [authLevel, userId, id]);

  return (
    <section className="page">
      <S.userTitle>User Details:</S.userTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          <li>User Id: {data._id}</li>
          <li>Username: {data.username}</li>
          <li>User Email: {data.email}</li>
        </ul>
      )}
      <FooterMenu />
    </section>
  );
};

export default Userpage;
