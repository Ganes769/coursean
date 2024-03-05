/* eslint-disable react-hooks/rules-of-hooks */
// Login.js
import React, { useContext, useState } from "react";

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
import { AuthContext } from "./Authcontext";
const Login = () => {
  const navigate = useNavigate();
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const signupContext = useContext(AuthContext);

  const { login, currentUser } = signupContext;
  function handleLogin(e) {
    e.preventDefault();
    try {
      login(email, password);
    } catch (e) {
      console.log(e);
    }
    if (currentUser.email === email) {
      navigate("/");
    } else {
      alert("Please enter  valid email and password");
    }
  }
  return (
    <div className="signup-container">
      <h2>Log In</h2>
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
        <button onClick={handleLogin} type="submit" className="signup-btn">
          Log In
        </button>
      </form>
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
