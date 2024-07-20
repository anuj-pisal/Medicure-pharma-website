import React from 'react'
import '../Style/OrderOnline.css'

export default function Logos() {
  return (
    <div>
  <hr className="hori-line" />
  <div className="title-center">
    <h2>Why should you buy Medicines from Medicure + ?</h2>
  </div>
  <div className="logo-info">
    <div className="logo-content">
      <img src="img/med10.svg" alt="Loading" />
      <h4>Genuine Meds</h4>
      <p>Be assured that you will always receive genuine brands and medicines from authorized distribution
        partners.</p>
    </div>
    <div className="logo-content">
      <img src="img/med11.svg" alt="Loading" />
      <h4>Door Delivery</h4>
      <p>Get your prescription medicines conveniently delivered right at your doorstep.</p>
    </div>
    <div className="logo-content">
      <img src="img/med12.svg" alt="Loading" />
      <h4>Cashless</h4>
      <p>All medicine orders can be made cashless based on your domiciliary cover and as per the terms and
        conditions set out in your policy.</p>
    </div>
  </div>
</div>

  )
}
