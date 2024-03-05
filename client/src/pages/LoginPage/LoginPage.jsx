import React from "react";
import "../style/pagestyle.css";

const LoginPage = () => {
  return (
    <section className="page">
      <h1>Register</h1>

      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>

      <div>
        <label for="pass">Password (8 characters minimum):</label>
        <input
          type="password"
          id="pass"
          name="password"
          minlength="8"
          required
        />
      </div>

      <input type="submit" value="Sign in" />
    </section>
  );
};

export default LoginPage;
