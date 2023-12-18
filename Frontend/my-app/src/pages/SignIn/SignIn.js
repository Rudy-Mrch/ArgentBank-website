import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import './SignIn.css'

const SignUp = () => {
  return (
    <>
      <Banner />
   
      <LoginForm
        logo="fa fa-user-circle sign-in-icon"
        title="Sign In"
        usernameLabel="Username"
        passwordLabel="Password"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      />
      <Footer />
    </>
  );
};

export default SignUp;
