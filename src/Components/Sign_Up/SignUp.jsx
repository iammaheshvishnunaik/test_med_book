import React from "react";
import "./Sign_Up.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
