import React from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "../features/user";
function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "John", age: 20, email: "john@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout({ name: "John", age: 20, email: "john@gmail.com" }));
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
