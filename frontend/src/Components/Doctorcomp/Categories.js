import React, { useState } from 'react';
import './Doctorlist.css';

const categories = ["Cardiologist", "Dentist", "Dermatologist", "Neurologist", "Pediatrician", "Psychiatrist", "Surgeon", "Orthopedist"];

const Categories = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
    const response = await fetch(`http://localhost:5000/getdoctor/${category}`);
    const doctors = await response.json();
    onCategorySelect(category, doctors);  // Pass the doctors data to the parent component
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategorySelect(category)}
          className={selectedCategory === category ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
