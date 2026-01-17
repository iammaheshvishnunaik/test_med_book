import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
        <div className="login-container">
        <h2>Login</h2>

        <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your registered email" />
           
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" />

            <div class="forgot-password">
                <a href="#">Forgot password?</a>
            </div>
            
            <button className="btn-login" type="submit">Login</button>
        </form>
        </div>
    </div>
  );
};

export default Login;
