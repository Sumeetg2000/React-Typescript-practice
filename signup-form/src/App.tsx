import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./component/Auth";
import HomePage from "./component/pages/HomePage";
import SignUpPage from "./component/pages/SignUpPage";

export default function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate replace={true} to="/SignUpPage" />} />
            <Route path="/SignUpPage" element={
              <Auth component={"/Home"}>
                <SignUpPage />
              </Auth>
            }/>
            <Route path="/Home" element={
              <Auth component={"/SignUpPage"}>
                <HomePage />
              </Auth>
            }/>
        </Routes>
    </BrowserRouter>
  );
}
