import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth } from "@/layouts";
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/login';
import { RoutesModulo } from './enum/enum';
function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={ RoutesModulo.BASE } element={<Login/>} />
        </Route>
        <Route path="/dashboard/*" element={<> </>} />
        <Route path="/auth/*" element={<></>} />
        {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      </Routes>
    </>
  )
}

export default App
