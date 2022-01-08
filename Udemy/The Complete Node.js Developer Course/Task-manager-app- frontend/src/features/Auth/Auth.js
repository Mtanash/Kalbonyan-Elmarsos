import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { signInUser, signUpUser } from "./authSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const formDataInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(formDataInitialState);

  const switchSignMethod = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: sanitize data before submitting
    if (isSignUp) {
      dispatch(signUpUser(formData))
        .unwrap()
        .then(() => {
          navigate("/");
        });
    } else {
      dispatch(
        signInUser({
          email: formData.email,
          password: formData.password,
        })
      )
        .unwrap()
        .then(() => {
          navigate("/");
        });
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="auth">
      <div className="container">
        <div className="auth__content">
          <form className="auth__form" onSubmit={handleFormSubmit}>
            {isSignUp && (
              <>
                <TextField
                  type="text"
                  // placeholder="First name"
                  label="First name"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormDataChange}
                />
                <TextField
                  type="text"
                  // placeholder="Last name"
                  label="Last name"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormDataChange}
                />
              </>
            )}
            <TextField
              // placeholder="Email"
              type="email"
              required
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleFormDataChange}
            />
            <TextField
              // placeholder="Password"
              label="Password"
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleFormDataChange}
            />
            {isSignUp && (
              <TextField
                // placeholder="Confirm password"
                label="Confirm password"
                type="password"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleFormDataChange}
              />
            )}
            <Button variant="contained" type="submit">
              {isSignUp ? "Sign up" : "Sign in"}
            </Button>
            <p>
              {!isSignUp
                ? "Don't have an account?"
                : "Already have an account?"}
              &nbsp;
              <Button variant="text" onClick={switchSignMethod}>
                {isSignUp ? "Sign in" : "sign up"}
              </Button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Auth;
