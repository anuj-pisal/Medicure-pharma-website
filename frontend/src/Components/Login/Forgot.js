import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
 // Adjust the import path
import './Loginform.css';

export default function Forgot() {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [submitting, setSubmitting] = useState(false); // State to manage submitting state

    const validateForm = () => {
        let valid = true;
        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailErr(true);
            valid = false;
        } else {
            setEmailErr(false);
        }
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setSubmitting(true); // Set submitting state to true
                const response = await fetch('http://localhost:5000/forgot-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ email })
                });
                const data = await response.json();
                if (response.ok) {
                    console.log(data);
                    alert(data.status); // Show success message
                } else {
                    alert(data.error); // Show error message
                }
            } catch (error) {
                console.error("Error occurred:", error);
                alert("Error occurred"); // Generic error message
            } finally {
                setSubmitting(false); // Reset submitting state
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-wrapper">
                    <div className="head-text">
                        <h1>Forgot Password</h1>
                        <p>Enter Email address</p>
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
                    </div>
                    <div className="login-foot">
                        <button type="submit" disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}