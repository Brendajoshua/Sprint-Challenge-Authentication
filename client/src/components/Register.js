import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = props => {
    const [user, setUser] = useState({ username: "", password: "" });
  
    const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      axios
        .post("http//localhost:3300/api/auth/register", user)
        .then(res => {
          props.history.push("/login");
        })
        .catch(err => console.log(err));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Submit</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    );
  };
  
  export default Register;