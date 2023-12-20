
import React from "react";
import { useDispatch } from 'react-redux';
import LoginForm from "../../components/LoginForm/LoginForm";
import { loginUserAsync } from "../../Redux/slice";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleLogin = (loginData) => {
    dispatch(loginUserAsync(loginData))
      .then(() => {
        window.location.replace('/user');
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

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
        onSubmit={handleLogin}
      />
    </>
  );
};

export default SignIn;
