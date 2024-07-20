import React from 'react'
import '../Style/Home.css'
import { useNavigate } from 'react-router-dom';

export default function Offers() {
  const navigate = useNavigate();
  const nav = () => {
      navigate("/medicines");
  }

  return (
    <div>
  <div className="title">
    <h2>Offers</h2>
  </div>
  <div className="offer">
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o1.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Buy 2 get 1 offer on any Mustela Product</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>N24S45AP</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o2.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>8% discount on All Medicines</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>ML90SD1L</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o3.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Flat 30% off on any Eucerin Product</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>L90SET28</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o4.jpg" alt="Loading" /></div>
      <div className="info">
        <h4>Crazy 50% off on Summer Essential Products</h4>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>IY20PS1P</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o5.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Flat 15% discount on Sun Pharma Products</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>PO9923KL</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o6.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Unbelievable 15% off on Diabetes Products</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>QP12XPLA</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o7.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Offers on Vitamins and Supplements</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>AB25WE55</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o8.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Exciting 58% off on Hansaplast Products</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>IYLK67MN</b></p>
      </div>
    </div>
    <div className="ofe-img">
      <div className="o1"><img className="o1-img" src="/img/o9.jpg" alt="Loading" /></div>
      <div className="info">
        <h3>Exclusive 25% off on your First Order</h3>
        <button className="offer-btn" onClick = {nav}>Order Now</button>
        <p>Code : <b>RE98S4V9</b></p>
      </div>
    </div>
  </div>
</div>

  )
}
