import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import AuthLayout from '../layouts/AuthLayout';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Register from '../pages/register/Register';
import { RoutesModulo } from '../enum/enum';

const Main: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ RoutesModulo.BASE } element={<Login />} />
        <Route path={ RoutesModulo.LOGIN} element={<Login />} />
        <Route path={ RoutesModulo.PASSWORD_RESET} element={<ForgotPassword />} />
        <Route path={ RoutesModulo.REGISTER} element={<Register />} />
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
