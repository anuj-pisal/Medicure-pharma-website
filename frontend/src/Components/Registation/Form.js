import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const [contact, setContact] = useState("");
  const [contactErr, setContactErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const validateForm = () => {
    let valid = true;
    if (name.length < 5) {
      setNameErr(true);
      valid = false;
    } else {
      setNameErr(false);
    }

    if (!/^\d{10}$/.test(contact)) {
      setContactErr(true);
      valid = false;
    } else {
      setContactErr(false);
    }

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
    let data = { name, contact, email, password, country, bio, birthdate };
    console.log(data);
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");

      let result = fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      localStorage.setItem("userlogin", JSON.stringify(data));
      // result = await result.json()
      navigate('/login');
    }
    
   
  }
    return (
      <>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="register-wrapper">
              <div className="head-text">
                <h1>Register</h1>
                <p>It just takes a few seconds</p>
              </div>
              <div className="register-body">
                <div className="input-box">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    name="Name"
                  />
                  {nameErr && (
                    <span className="alert">
                      Username must be at least 5 characters
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {emailErr && (
                    <span className="alert">Invalid email address</span>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact"
                  />
                  {contactErr && (
                    <span className="alert">
                      Contact number must be 10 digits
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {passwordErr && (
                    <span className="alert">
                      Password must be at least 7 characters
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country (Optional)"
                  />
                </div>
                <div className="input-box">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio (Optional)"
                    rows="3"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="date" id="dateLabel" >Birthdate (Optional)</label>
                  <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    id="date"
                  />
                </div>
              </div>
              <div className="register-foot">
                <button type="submit">Sign Up</button>
                <p>
                  Already have an Account? <Link to="/login">Log in</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };

