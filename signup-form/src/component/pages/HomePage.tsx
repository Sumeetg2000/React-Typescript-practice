import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LOGOUT } from "../../redux/slice/userSlice";
import { AppDispatch, RootState } from "../../redux/store";

import "../../styles/HomePage.scss";

export default function HomePage() {
  const userData = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(LOGOUT());
    navigate("/");
  };

  return (
    <div className="homePage">
      <div className="header">
        <button className="logOut btn" onClick={logOutHandler}>
          Logout
        </button>
        <span className="userName">{userData.userName}</span>
      </div>
      <div className="userData">
        <img
          className="userImage"
          src={userData.userImage as string}
          alt="userImage"
        />
        <p className="greeting">
          Hello <span className="details"> {userData.userName}</span>,<br />
          you are registered with the email id :-
          <span className="details">{userData.userEmail}</span>
          <br />
          and phone number :-
          <span className="details">{userData.userPhoneNo}</span>
        </p>
      </div>
    </div>
  );
}
