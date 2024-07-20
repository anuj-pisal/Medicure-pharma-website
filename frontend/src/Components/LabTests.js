import React from 'react'
import '../Style/Home.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lab_tests() {

    const test_scroll = useRef(null);

    const scrollL = () => {
        if(test_scroll.current) {
            test_scroll.current.scrollLeft -= 295;
        }
    }

    const scrollR = () => {
        if(test_scroll.current) {
            test_scroll.current.scrollLeft += 295;
        }
    }

    const navigate = useNavigate();
    const nav = () => {
        navigate("/labtest");
    }
  

  return (
    <div>
  <div className="title">
    <h2 id="lab_title">Keep your health in check with Medicure+ : Lab tests just a click away</h2>
  </div>
  <div className="lab-tests">
    <div className="tests">
      <button className="lab-test-b" id="lab-b" onClick={scrollL}><i className="fa-solid fa-angles-left" /></button> 
      <div className="test-information" ref={test_scroll}>
        <div className="tests-c">
          <p className="tests-c-title">Good Health Smart Package</p>
          <p className="tests-c-stext">Include 3 tests</p>
          <p className="tests-c-para"> - TSH (Thyroid Stimulating Horm... <br /> - Cholesterol - Total <br /> - HbA1c (Hemoglobin A1c)</p>
          <p className="test-more"><b>+ More</b></p>
          <p className="tests-c-stext">Get report within <b>24 hours</b></p>
          <p className="tests-c-title">&nbsp;₹ 399&nbsp;&nbsp;&nbsp;<s className="tests-c-para">₹ 800</s></p>
          <p className="tests-c-off">50% Off</p>
          <button className="tests-c-btn" onClick={nav}>View Details</button>
        </div>
        <div className="tests-c">
          <p className="tests-c-title">Fitness Advanced Package</p>
          <p className="tests-c-stext">Include 78 tests</p>
          <p className="tests-c-para"> - TSH Serum Calcium <br /> - Vitamin B12 <br /> - Thyroid Profile Free (FT3, FT4)</p>
          <p className="test-more"><b>+ More</b></p>
          <p className="tests-c-stext">Get report within <b>24 hours</b></p>
          <p className="tests-c-title">&nbsp;₹ 3799&nbsp;&nbsp;&nbsp;<s className="tests-c-para">₹ 4049</s></p>
          <p className="tests-c-off">6% Off</p>
          <button className="tests-c-btn" onClick={nav}>View Details</button>
        </div>
        <div className="tests-c">
          <p className="tests-c-title">Diabetes Care Package</p>
          <p className="tests-c-stext">Include 56 tests</p>
          <p className="tests-c-para"> - HbA1c (Hemoglobin A12c)<br /> - CBC (Complete Blood Count) <br /> - Serum Ceratinine</p>
          <p className="test-more"><b>+ More</b></p>
          <p className="tests-c-stext">Get report within <b>24 hours</b></p>
          <p className="tests-c-title">&nbsp;₹ 699&nbsp;&nbsp;&nbsp;<s className="tests-c-para">₹ 870</s></p>
          <p className="tests-c-off">19% Off</p>
          <button className="tests-c-btn" onClick={nav}>View Details</button>
        </div>
        <div className="tests-c">
          <p className="tests-c-title">Nutritional Anemia Package</p>
          <p className="tests-c-stext">Include 28 tests</p>
          <p className="tests-c-para"> - Serum Iron Studies Basic(4) <br /> - Vitamin B12 <br /> - Serum Ferritin</p>
          <p className="test-more"><b>+ More</b></p>
          <p className="tests-c-stext">Get report within <b>24 hours</b></p>
          <p className="tests-c-title">&nbsp;₹ 1899&nbsp;&nbsp;&nbsp;<s className="tests-c-para">₹ 2089</s></p>
          <p className="tests-c-off">9% Off</p>
          <button className="tests-c-btn" onClick={nav}>View Details</button>
        </div>
        {/* <div class="tests-c">b</div>
          <div class="tests-c">c</div>
          <div class="tests-c">d</div> */}
      </div> 
      <button className="lab-test-n" id="lab-n" onClick={scrollR}><i className="fa-solid fa-angles-right" /></button>
    </div>
    <div className="intro">
      <h2 className="intro-h2">Lab Test From The Comfort Of Your Home</h2>
      <p className="intro-text">Trusted by 40 Lakhs+ satisfied customers | 1 Crore+ lab tests booked</p>
      <div className="test-i">
        <div className="lab-i" id="lab-i1"><img src="img/shield-png-1.png" alt="loading" /> <p>100% safe and hygenic</p></div>
        <div className="lab-i"><img src="img/lab2.png" alt="loading" /> <p>Home Sample Pick Up</p></div>
        <div className="lab-i"><img src="img/lab3.png" alt="loading" /> <p>View Reports Online</p></div>
        <div className="lab-i"><img src="img/lab4.png" alt="loading" /> <p>Free Doctor Consultation</p></div>
        <div className="lab-i"><img src="img/lab5.png" alt="loading" /> <p>Best Prices Guaranteed</p></div>
      </div>
      <button className="intro-btn" onClick={nav}>View All Packages</button>
      <p id="intro-title"><b>UNCOMPROMISED QUALITY. RELIABLE RESULTS. ALWAYS.</b></p>
      <p className="intro-text">Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Medicure + you can get your lab tests done from the comfort of your home. Our highly qualified phlebotomist will collect the samples at your preferred time. Watch this video to see steps taken by us to ensure quality and hygiene in sample collection. Book your next lab test with Medicure + at the lowest price guaranteed!</p>
    </div>
  </div>
</div>

  )
}
