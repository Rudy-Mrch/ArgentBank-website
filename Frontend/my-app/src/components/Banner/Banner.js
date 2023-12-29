import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import "./Banner.css";

const Banner = () => {
  const isSignoutPage = window.location.pathname === '/user';


  const userName = useSelector((state) => state.user.userName);

  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/signIn";
  };

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
        <>
        <div className="containerLink">  
        <div className="userInfo">
        <i className="fa fa-user-circle"></i>
          {userName} 
          </div>
        <div className="main-nav-item" onClick={handleSignOut}>
      
          <i className="fa fa-sign-out"></i>
          Sign Out
        </div>
        </div>
        </>
      )}
    </nav>
  );
};

export default Banner;
