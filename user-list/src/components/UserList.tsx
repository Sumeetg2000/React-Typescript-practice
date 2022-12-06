import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import axios from "axios";
import Header from "./Header";
import {
  FETCHING_USER_FAILURE,
  FETCHING_USER_SUCCESS,
} from "../redux/reducers/userSlice";
import { SHOW_CARD, HIDE_CARD } from "../redux/reducers/cardSlice";
import { Lock, Trash2 } from "react-feather";

import "../styles/UserList.scss";

export default function UserList() {
  const apiPath = useSelector((state: RootState) => state.api.API_PATH);
  const allUsersData = useSelector((state: RootState) => state.user.user);
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(apiPath)
        .then((res) => dispatch(FETCHING_USER_SUCCESS(res.data.data)))
        .catch((err) => dispatch(FETCHING_USER_FAILURE(err.name)));
    };
    fetchUser();
  }, [apiPath,  dispatch]);

  return (
    <div className="userList">
      <Header />
      {allUsersData.map((userData) => (
        <div key={userData.id} className="userData">
          <div
            className="user"
            onMouseEnter={() => dispatch(SHOW_CARD(userData))}
            onMouseLeave={() => dispatch(HIDE_CARD())}
          >
            <img src={userData.avatar} alt="avatar" className="avatar" />
            <div className="userNameAndEmail">
              <p className="userName">
                {userData.first_name} {userData.last_name}
              </p>
              <p className="userEmail">{userData.email}</p>
            </div>
          </div>
          <div className="userStatus">
            {userData.id === 1 ? (
              <span className="active">Active</span>
            ) : (
              <select className="status">
                <option value="inactive">Inactive</option>
                <option value="active">Active</option>
              </select>
            )}
          </div>
          <div className="userAccess">
            {userData.id === 1 ? (
              <span className="">Owner</span>
            ) : (
              <select className="access">
                <option value="read">Read</option>
                <option value="manager">Manager</option>
              </select>
            )}
          </div>
          <div className="userIcon">
            {userData.id === 1 ? <Lock /> : <Trash2 />}
          </div>
        </div>
      ))}
    </div>
  );
}
