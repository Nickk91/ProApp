import React from "react";

const ErrorMessageBox = () => {
  return (
    <div>
      {error.username && <p style={{ color: "red" }}>{error.username}</p>}
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
    </div>
  );
};

export default ErrorMessageBox;
