import React from "react";
import UserCard from "../UserCard/UserCard.jsx";
const TestComponent = () => {
  const user = {
    _id: "660bf66a8fb0647e7ccb84e9",
    username: "nice_user",
    avatar: "avatar_url",
  };

  return (
    <div>
      <UserCard user={user} onClick={() => console.log("User clicked")} />
    </div>
  );
};

export default TestComponent;
