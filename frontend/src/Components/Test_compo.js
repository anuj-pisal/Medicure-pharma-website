import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Test_NewCards from './Test_NewCards';

const LabTest = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular Packages");
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/labtest');
            setPackages(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderPackages = () => {
    const filteredPackages = selectedCategory
      ? packages.filter(pkg => pkg.Package === selectedCategory)
      : packages;

    // Render up to 4 packages per category
    return filteredPackages.slice(0, 4).map((pkg) => (
      <Test_NewCards key={pkg._id} pkg={pkg} />
    ));
  };

  return (
    <div className="lab-test">
      <div className="lab-h">
        <h1>Our Available Packages</h1>
        <div className="test-type">
          <button className="Test-type-button" onClick={() => handleCategoryClick('Popular Packages')}>Popular Packages</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Fever')}>Fever</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Women Health')}>Women Health</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Diabetes')}>Diabetes</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Fitness')}>Fitness</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Covid 19')}>Covid 19</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Senior Citizen')}>Senior Citizen</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Lifestyle Habits')}>Lifestyle Habits</button>
          <button className="Test-type-button" onClick={() => handleCategoryClick('Full Body Check up')}>Full Body Check up</button>
        </div>
      </div>
      <div className="lab-test1">
        {renderPackages()}
      </div>
    </div>
  );
};

export default LabTest;
