import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <LoginForm
        logo="fa fa-user-circle sign-in-icon"
        title="Sign In"
        usernameLabel="Email"
        passwordLabel="Password"
        signInLabel="Sign In"
        initialUsername="tony@stark.com"
        initialPassword="password123"
      />
    </>
  );
};

export default SignIn;
