import React from 'react';
import Doctorlist from './Doctorlist';
import Advertisement from './Advertisement';


export default function Main({ selectedCategory, doctors }) {
  return (
    <div className="main-item">
      <Doctorlist category={selectedCategory} doctors={doctors} />
      <Advertisement />
    </div>
  );
}
