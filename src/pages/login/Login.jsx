import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">fchatSocial</h3>
          <div className="loginLeftDesc">
            Connect with friends and the world <br /> around you on Fchatsocial.
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form action="#" className="loginForm">
              <div class="loginUsername">
                <input
                  className="loginInput"
                  placeholder="Email or Phone number"
                  type="text"
                  id="username-l"
                />
              </div>
              <div class="loginPassword">
                <input
                  className="loginInput"
                  placeholder="Password"
                  type="password"
                  id="password-l"
                />
              </div>
              <div class="loginSubmit">
                <Link to="/">
                  <input id="loginBtn" type="submit" value="Log In" />
                </Link>
              </div>
              <span>
                <a className="forgetPwd" href="#email?">
                  Forgot your password?
                </a>
              </span>
              <hr className="loginHr" />
              <div class="loginCreateAc">
                <Link to="/register">
                  <input
                    className="loginCreateBtn"
                    type="submit"
                    value="Create new account"
                  />
                </Link>
              </div>
            </form>
          </div>
          <div className="loginRightDesc">
            <b>Create a Page </b> for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );
}
