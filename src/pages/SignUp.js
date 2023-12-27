import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-config";
import "../Login.css";
import { updateName } from "../reducers/accounslice";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  function handleLogin() {
    navigate("/login");
  }
  const handleSignup = () => {
    try {
      if (!loginUsername) return alert("username cannont be empty");
      const user = createUserWithEmailAndPassword(
        auth,
        signupUsername,
        signupPassword
      );
      console.log(user);
      if (!signupUsername && !signupPassword)
        return alert("please enter your details");
      console.log(user);
    } catch (er) {
      console.log(er);
    }
    dispatch(updateName(loginUsername));

    setSignupUsername("");
    setSignupPassword("");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <h2>To Get Started Signup</h2>
          <label htmlFor="loginUsername">Username:</label>
          <input
            type="text"
            id="loginUsername"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <label htmlFor="signupUsernames">Email:</label>
          <input
            type="email"
            id="signupUsernames"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
          />

          <label htmlFor="signupPassword">Password:</label>
          <input
            type="password"
            id="signupPassword"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />

          <button type="button" onClick={handleSignup}>
            Signup
          </button>
          <h3>or</h3>
          <button type="button" onClick={handleLogin}>
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
