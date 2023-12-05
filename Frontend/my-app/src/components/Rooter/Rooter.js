import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import User from '../../pages/User/User'


const Rooter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default Rooter;

