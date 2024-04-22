import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";
import "../style/pagestyle.css";

const Userpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  // app.use("/api/pro-app/users/current", currentUser);
  useEffect(() => {
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
        const userData = await response.json();
        setData(userData);
        console.log("user data is:", data);
      } catch (error) {}
      setIsLoading(false);
    };
    fetchUser();
  }, []);

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
