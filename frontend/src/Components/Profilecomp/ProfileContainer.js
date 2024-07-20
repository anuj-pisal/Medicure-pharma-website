import React, { useState, useEffect } from 'react';
import './ProfileContainer.css';
import Profile from './Profile';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Container() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from backend upon component mount
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user/:id'); // Replace with appropriate endpoint to fetch user data
        const data = await response.json();
        if (response.ok) {
          setUserData(data);
        } else {
          console.error('Failed to fetch user data.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="containerProfile">
      <Navbar/>
      <h1>Account Details</h1>
      <Profile userData={userData} setUserData={setUserData} />
        <Footer/>
    </div>
  );
}

export default Container;
