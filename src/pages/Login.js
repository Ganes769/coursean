/* eslint-disable react-hooks/rules-of-hooks */
// Login.js
import React, { useState } from "react";
import "../Login.css";
import { useDispatch } from "react-redux";
import { updateName, updatePassword } from "../reducers/accounslice";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase-config";
import { useSelector } from "react-redux";
const Login = () => {
  const userName = useSelector((state) => state.account.username);
  const [users, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [loginPassword, setLoginPassword] = useState("");
  const [loginemail, setLoginemail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (!loginemail) return alert("Username and password field are required");
    try {
      const user = signInWithEmailAndPassword(auth, loginemail, loginPassword);
      if (users.email !== loginemail) {
        alert("Please enter the correct data");
      }
      console.log(users);
      if (users.email === loginemail) {
        navigate("/");
      }
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h5>To, Get Started You must login or signup !</h5>

        {/* Login Form */}
        <form>
          <h2>Login</h2>
          <label htmlFor="signupUsername">Usename:</label>
          <input
            type="text"
            id="username"
            defaultValue={userName}
            disabled
            onChange={(e) => setLoginemail(e.target.value)}
          />

          <label htmlFor="signupUsername">Email:</label>
          <input
            type="email"
            id="signupUsername"
            value={loginemail}
            onChange={(e) => setLoginemail(e.target.value)}
          />

          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleLogin = () => {
//     if (!username && !password)
//       return alert("Username and password field are required");
// const handleSignup = () => {
//   try {
//     const user = createUserWithEmailAndPassword(
//       auth,
//       signupUsername,
//       signupPassword
//     );
//     console.log(user);
//   } catch (er) {
//     console.log(er);
//   }
//   setSignupUsername("");
//   setSignupPassword("");
// };
//     dispatch(updateName(username));
//     dispatch(updatePassword(password));
//     navigate("/");
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>

//         {/* <button type="button" onClick={handleSignUp}>
//           SignUp
//         </button> */}
//       </form>
//     </div>
//   );
// };

// export default Login;
