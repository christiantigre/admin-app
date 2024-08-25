import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import AuthLayout from '../layouts/AuthLayout';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Register from '../pages/register/Register';

const Main: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
// const mapStateToProps = state => ({
//   isAuthenticated: true,
// });
// export default connect(mapStateToProps)(App);
export default Main;
