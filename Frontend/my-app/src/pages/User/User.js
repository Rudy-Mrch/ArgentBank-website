import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Welcome from "../../components/Welcome/Welcome";
import Account from "../../components/Account/Account";
import "./User.css";

const User = () => {
  return (
    <>
      <Banner />
     <main className="main bg-dark">
        <Welcome />
        <Account />
        <Account />
        <Account />
        </main>
      <Footer />
    </>
  );
};

export default User;
