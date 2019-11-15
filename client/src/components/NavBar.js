import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink to="/register">
        <button>Register</button>
      </NavLink>
      <NavLink to="/login">
        <button
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          Logout
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;