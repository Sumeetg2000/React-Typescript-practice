import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { validationSchema } from "../validation";
import girlImage from "../image/girl.png";
import { AppDispatch } from "../../redux/store";
import { LOGIN, userState } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router";

import "../../styles/SignUpPage.scss";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  
  const initialState = {
    userName: "",
    userEmail: "",
    userPhoneNo: "",
    userPassword: "",
    confirmPassword: "",
    userImage: "",
    isLoggedIn: false,
  };
  const handleSubmit = (values: userState) => {
    const imgBlob = URL.createObjectURL(values.userImage as Blob);
    const userInfo = {
      userImage: imgBlob,
      userName: values.userName,
      userEmail: values.userEmail,
      userPhoneNo: values.userPhoneNo,
      userPassword: values.userPassword,
      isLoggedIn: true,
    };
    localStorage.setItem("name", userInfo.userName);
    localStorage.setItem("email", userInfo.userEmail);
    localStorage.setItem("phoneNo", userInfo.userPhoneNo);
    localStorage.setItem("image", userInfo.userImage);
    localStorage.setItem("password", userInfo.userPassword);
    localStorage.setItem("loggedIn", "true");

    dispatch(LOGIN(userInfo));
     navigate("/Home", { replace: true });
  };
  return (
    <div className="container">
      <div className="formDiv">
        <span className="formHeading">SignUp</span>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ setFieldValue }) => (
            <Form>
              <center>
                <label>
                  Photo +
                  <input
                    name="userImage"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("userImage", event.target.files[0]);
                    }}
                  />
                </label>
                <ErrorMessage
                  component="p"
                  className="errorMessage image"
                  name="userImage"
                />
              </center>
              <label>Name</label>
              <Field type="text" name="userName" className="userFields" />
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="userName"
              />
              <label>Email</label>
              <Field type="email" name="userEmail" className="userFields" />
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="userEmail"
              />
              <label>PhoneNo</label>
              <Field type="text" name="userPhoneNo" className="userFields" />
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="userPhoneNo"
              />
              <label>Password</label>
              <Field
                type="password"
                name="userPassword"
                className="userFields"
                autoComplete="on"
              />
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="userPassword"
              />
              <label>Confirm&nbsp;Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="userFields"
                autoComplete="on"
              />
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="confirmPassword"
              />
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
              <button type="reset" className="btn btn-reset">
                Reset
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="imgDiv">
        <img src={girlImage} alt="girl" />
      </div>
    </div>
  );
}
