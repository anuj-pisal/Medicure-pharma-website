import React from 'react'
import '../Style/Home.css'
export default function () {
  return (
    <div>
    <div class="title">
        <h2>Why to Choose us ?</h2>
    </div>

    <div class="why-us">
        <div class="why-us-box">
            <img src="img/family.svg" alt="Loading"/>
            <div class="why-us-info">
            <h2>30 Million+</h2>
            <h4>Registered users as of Mar 31, 2022</h4>
            </div>
        </div>
        <div class="why-us-box">
            <img src="img/deliveryBoy.svg" alt="Loading"/>
            <div class="why-us-info">
            <h2>10 Million+</h2>
            <h4>Orders on Medicure + till date </h4>
            </div>
            
        </div>
        <div class="why-us-box">
            <img src="img/pincodeServed.svg" alt="Loading"/>
            <div class="why-us-info">
            <h2>12000+</h2>
            <h4>Unique items sold last 3 months</h4>
            </div>
            
        </div>
        <div class="why-us-box">
            <img src="img/locationMarker.svg" alt="Loading"/>
            <div class="why-us-info">
            <h2>7000+</h2>
            <h4>Pin codes serviced last 3 months</h4>
            </div>

        </div>
    </div>
    </div>
  )
}
