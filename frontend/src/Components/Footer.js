import React from 'react'
import '../Style/Home.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

     <footer className="footer">
  <div className="container-foot">
    <div className="row-foot">
      <div className="footer-col">
        <h4><i className="ri-capsule-fill" />MediCure<sup>+</sup></h4>
        <ul className="ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/labtest">Labtests</Link></li>
          <li><Link to="/cart">Your Cart</Link></li>
          <li><Link to="/medicines">Medicines</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Need help</h4>
        <ul className="ul">
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/">Shipping and Return Policy</Link></li>
          <li><Link to="/cart">Payment Partners</Link></li>
          <div className="foot-img-div">
            <li><img id="foot-img" src="img/gpay.png" alt /></li>
            <li><img id="foot-img" src="img/visa.png" alt /></li>
            <li><img id="foot-img" src="img/paytm.png" alt /></li>
            <li><img id="foot-img" src="img/amazon.png" alt /></li>
          </div>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Our Services</h4>
        <ul className="ul">
          <li><Link to="/doctors">Our Doctors</Link></li>
          <li><Link to="/doctors">Schedule an Appointment</Link></li>
          <li><Link to="/"> Contact Us :+91 2349872349</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Follow us on</h4>
        <ul className="ul">
          <div className="foot-img-div">
            <li><a href="https://www.instagram.com/medicureplus001"><img src="img/insta.png" id="foot-img" alt="instagram" /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100076226617669"><img src="img/facebook.png" id="foot-img" alt="facebook" /></a></li>
            <li><a href="https://x.com/Medicare__Plus"><img src="img/x.png" id="foot-img" alt /></a></li>
          </div>  
        </ul>
        <div className="foot-limited">
        </div>
      </div>
    </div>
  </div>
  <p id='lastLine'>© 2024 Medicure+. All Rights Reserved</p>
  &nbsp;</footer>


  )
}
