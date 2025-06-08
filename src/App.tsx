import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth } from "@/layouts";


function App() {

  return (
    <>
       <Routes>
      <Route path="/dashboard/*" element={<> </>} />
      <Route path="/auth/*" element={<></>} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
    </>
  )
}

export default App
