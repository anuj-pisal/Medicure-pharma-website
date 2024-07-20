import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Features from './Features.js';
import Main from './Main.js';
import Navbar from '../Navbar.js';
import Categories from './Categories.js';
import Footer from '../Footer.js';

export default function Doccontainer() {
  const [selectedCategory, setSelectedCategory] = useState('Cardiologist');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors for the default category
    const fetchDoctors = async () => {
      const response = await fetch(`http://localhost:5000/getdoctor/${selectedCategory}`);
      const data = await response.json();
      setDoctors(data);
    };

    fetchDoctors();
  }, [selectedCategory]);

  const handleCategorySelect = (category, doctors) => {
    setSelectedCategory(category);
    setDoctors(doctors); // Set the doctors state when category is selected
  };

  return (
    <>
      <div className="doc-container">
        <Navbar/>
        <Header />
        <Features />
        <Categories onCategorySelect={handleCategorySelect} />
        <Main selectedCategory={selectedCategory} doctors={doctors} />
        { <Footer /> }
      </div>
    </>
  );
}
