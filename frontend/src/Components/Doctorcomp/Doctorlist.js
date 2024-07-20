import React, { useEffect, useState } from 'react';
import './Doctorlist.css';
// import ProfilePar from '../Docprofile-comp/ProfilePar'
import { doctorsData } from './doctorData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const Doctorlist = ({ category }) => {
  const [data, setData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  async function getdata() {
    try {
      let result = await fetch("http://localhost:5000/getdoctor");
      result = await result.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch doctors data:", error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    setFilteredDoctors(data.filter(doctor => doctor.speciality === category));
  }, [data, category]);

  return (
    <div className="Ditem1">
      <div className="arrow-text">
        <i className="fa-solid fa-arrow-right"></i>
        <h2>Showing Your Doctors</h2>
      </div>
      {filteredDoctors.map((i) => (
        <div key={i._id} className="doctor">
          <div className="doc-info">
            <img src={`http://localhost:5000/uploads/${i.photo}`} alt="doctor" />
            <div className="doc-name">
              <h2>{i.docName}</h2>
              <p>{i.post}</p>
            </div>
            <div className="Rating">
              <p>Specialty: {i.speciality}</p>
              <p>Experience: {i.experience}</p>
              <p>Location: {i.location}</p>
              <p>
              Rating: {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    icon={index < i.rating ? faSolidStar : faRegularStar}
                    key={index}
                  />
                ))}
              </p>
            </div>
          </div>
          <div className="doc-foot">
          <Link to="/consult">
            <button>
             <a href="#">Consult Now</a>
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctorlist;