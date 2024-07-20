import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { loginSuccess } from '../../features/user/userSlice'; // Adjust the import path
import './Loginform.css';
import ProfileContainer from '../Profilecomp/ProfileContainer'

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validateForm = () => {
        let valid = true;

        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailErr(true);
            valid = false;
        } else {
            setEmailErr(false);
        }

        if (password.length < 7) {
            setPasswordErr(true);
            valid = false;
        } else {
            setPasswordErr(false);
        }

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:5000/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                if (response.ok) {
                    alert("Login successful!");
                    dispatch(loginSuccess(data));
                    localStorage.setItem("token", data.token);
                    navigate('/');
                } else {
                    alert("Invalid Credentials");
                }
            } catch (error) {
                alert("An error occurred. Please try again.");
                console.error(error);
            }
        } else {
            alert("Please fill in all fields correctly.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-wrapper">
                    <div className="head-text">
                        <h1>Login</h1>
                        <p>Welcome back!</p>
                    </div>
                    <div className="login-body">
                        <div className="input-box">
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email" 
                            />
                            {emailErr && <span className="alert">Invalid email address</span>}
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Password" 
                            />
                            {passwordErr && <span className="alert">Password must be at least 7 characters</span>}
                        </div>
                    </div>
                    <div className="login-foot">
                        <button type="submit">Login</button>
                        <p>Forgot Password? <Link to="/forgot">Click here</Link></p>
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
}
