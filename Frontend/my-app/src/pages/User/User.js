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

        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
};

export default User;
