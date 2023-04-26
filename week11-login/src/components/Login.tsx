import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {User} from '../types'

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserContext);
  const { state } = useContext(UserContext);


  const handleLogin = () => {
    //  login function that returns a user object with roles
    const user: User = { username, password, roles: ["admin"] }; 
    dispatch({ type: "login", payload: user });
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      {state.user ? (
        <div>
          <p>Logged in as {state.user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;