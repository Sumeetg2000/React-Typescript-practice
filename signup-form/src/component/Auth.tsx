import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
const Auth = ({
  children,
  component,
}: {
  children: JSX.Element;
  component: string;
}) => {
  const loggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  if (!loggedIn) {
    if (component === "/SignUpPage") {
      return <Navigate replace={true} to={component} />;
    } else {
      return children;
    }
  } else {
    if (component === "/Home") {
      return <Navigate replace={true} to={component} />;
    } else {
      return children;
    }
  }
};
export default Auth;
