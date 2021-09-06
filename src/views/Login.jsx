import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="loginLeft">
        <div className="loginLeftHeader">
          <h3>Log into Gratis</h3>Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
        </div>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control form-control-light"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
              // value={password}
              // onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="auth-seperator">
          <span>OR</span>
        </div>
        <p className="registerRedirect">Don't have an account? Create One </p>
      </div>
      <div className="loginRight"></div>
    </div>
  );
}
