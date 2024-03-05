/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../Firebase-config";
import "../Signup.css"; // Import CSS file for styling
import { AuthContext } from "./Authcontext";

export default function Signup() {
  const navigate = useNavigate();
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const signupContext = useContext(AuthContext);

  const { signup, currentUser } = signupContext;
  async function handleclick(e) {
    e.preventDefault();

    try {
      await signup(email, password);
      if (currentUser) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }
  function gotologin() {
    navigate("/login");
  }
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => getEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => getPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button onClick={handleclick} type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
      <p className="already-have-account">
        Already have an account? <a onClick={gotologin}>Log in</a>
      </p>
    </div>
  );
}
