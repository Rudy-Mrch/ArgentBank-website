import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const isSignoutPage = window.location.pathname === '/user';
  const itemRemove = sessionStorage.removeItem("token")

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {!isSignoutPage ? (
        <Link to="/signIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      ) : (
        <Link to="/" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {/* {user} */}
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      )}
    </nav>
  );
};

export default Banner;
