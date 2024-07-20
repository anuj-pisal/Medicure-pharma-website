import React from 'react'
import '../Style/OrderOnline.css'

export default function Brands() {
  const getView = (e,val) => {

    e.preventDefault();
  
    var element = document.getElementById(val);
    if(element)
    {
      element.scrollIntoView({
        behavior:'smooth'
      })  
    }
  }
  return (
    <div>
  <div className="title">
    <h2>Featured Brands</h2>
  </div>
  <div className="shop-health">
    <div className="shop-health-brands">
      <img src="img/himalaya-logo.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Himalaya</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b2.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Eucerin</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b3.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Nivea</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b4.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Mustela</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b5.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Accu-Chek</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b6.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>PediaSure</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b7.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Cetaphil</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b8.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>GNC Live Well</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b9.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Sun Pharma</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b10.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Onetouch</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b11.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Sirona</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b12.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Protinex</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b13.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Chicco</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b14.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Ensure</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b15.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Hansaplast</h3>
    </div>
    <div className="shop-health-brands">
      <img src="img/b16.jpg" alt="Loading" onClick={(e)=>getView(e,"brand products")} />
      <h3>Gerber</h3>
    </div>
  </div>
</div>

  )
}
