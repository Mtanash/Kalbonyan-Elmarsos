import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser, selectAuthData } from "../../features/Auth/authSlice";
import ProfileAvatar from "../profileAvatar/ProfileAvatar";
import { Button, Avatar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector(selectAuthData);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [authData]);

  const onLoginClick = () => {
    navigate("/auth");
  };

  const onLogoutClick = () => {
    dispatch(logOutUser());
    navigate("/auth");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__content">
          <Typography className="navbar__title" variant="h5">
            Task Manager
          </Typography>
          <div className="navbar__userInfo">
            <Avatar
              sx={{ bgcolor: deepPurple[500] }}
              alt={
                user ? `${user?.firstName} ${user?.lastName}` : "user avatar"
              }
            >
              {user &&
                `${user.firstName[0].toUpperCase()} ${user.lastName[0].toLowerCase()}`}
            </Avatar>
            <span>
              {user?.firstName} {user?.lastName}
            </span>
            {user ? (
              <Button
                className=" userButton"
                variant="contained"
                color="primary"
                onClick={onLogoutClick}
              >
                Logout
              </Button>
            ) : (
              <Button
                className=" primary"
                variant="contained"
                color="primary"
                onClick={onLoginClick}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
