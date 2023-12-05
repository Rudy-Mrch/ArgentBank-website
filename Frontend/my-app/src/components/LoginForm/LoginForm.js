import React from 'react';
import './LoginForm.css'

const LoginForm = ({ logo, title, usernameLabel, passwordLabel, rememberMeLabel, signInLabel, onSubmit }) => {
  return (
     <main className='main bg-dark'>
     <section className='sign-in-content'>
        {logo && <i className={logo}></i>}
        {title && <h1>{title}</h1>}
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">{usernameLabel || 'Username'}</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">{passwordLabel || 'Password'}</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">{rememberMeLabel || 'Remember me'}</label>
          </div>
          <button type="submit" className="sign-in-button">{signInLabel || 'Sign In'}</button>
        </form>
      </section>
      </main>
  );
};

export default LoginForm;
