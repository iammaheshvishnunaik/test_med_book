import React, { useState } from "react";
import "./Sign_Up.css";
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const SignUp = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON
        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };
  return (
    <div className="login-page">
        <div className="signup-container">
        <h2>Create Account</h2>

        <div className="existingMember">
            Already a member?{" "}
            <span>
            <a href="/login">Login</a>
            </span>
        </div>

        <form method="POST" onSubmit={register}>
            {/* Role */}
            <label htmlFor="role">Role</label>
            <select id="role" name="role" required>
            <option value="">Select Role</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            </select>

            {/* Name */}
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="form-control" 
            aria-describedby="helpId"
            />
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

            {/* Phone Number */}
            <label htmlFor="phone">Phone Number</label>
            <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            className="form-control" 
            aria-describedby="helpId"
            />
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

            {/* Email */}
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-control" 
            aria-describedby="helpId"
            />
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

            {/* Password */}
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-control" 
            aria-describedby="helpId"
            />
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

            {/* Buttons */}
            <button type="submit" className="btn-submit">
            Sign Up
            </button>
            <button type="reset" className="btn-reset">
            Reset
            </button>
        </form>
        </div>
    </div>
  );
}

export default SignUp;
