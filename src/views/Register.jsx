import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const history = useHistory();

  const [auth, setAuth] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = auth;

  function handleChange(e) {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  }

  async function handleAdminSubmit(e) {
    e.preventDefault();
    console.log(auth);

    let res = await axios.post(`/adminregister`, auth);
    let data = await res.data;
    console.log(data);
    if (data.success) {
      history.push("/login");
    } else {
      console.log("error", data.message);
    }
  }
  async function handleUserSubmit(e) {
    e.preventDefault();
    console.log(auth);

    let res = await axios.post(`/userregister`, auth);
    let data = await res.data;
    console.log(data);
    if (data.success) {
      history.push("/login");
    } else {
      console.log("error", data.message);
    }
  }
  return (
    <div className="login">
      <div className="loginLeft">
        <div className="loginLeftHeader">
          <h3>Log into Gratis</h3>Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
        </div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control form-control-light"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control form-control-light"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleUserSubmit}>
            Register as User
          </button>
          <button type="submit" onClick={handleAdminSubmit}>
            Register as Admin
          </button>
        </form>
      </div>
      <div className="loginRight"></div>
    </div>
  );
}
