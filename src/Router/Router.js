import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Error from "../pages/ErrorPage/Error";

export default function Router() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    
  );
}
