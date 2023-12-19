import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ logo, title, usernameLabel, passwordLabel, signInLabel, onSubmit, initialUsername, initialPassword }) => {
  const [username, setUsername] = useState(initialUsername || '');
  const [password, setPassword] = useState(initialPassword || '');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: username, password: password });
  };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        {logo && <i className={logo}></i>}
        {title && <h1>{title}</h1>}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">{usernameLabel || 'Email'}</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">{passwordLabel || 'Password'}</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="sign-in-button">{signInLabel || 'Sign In'}</button>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
