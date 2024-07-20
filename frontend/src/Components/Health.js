import React from 'react'
import '../Style/OrderOnline.css'


export default function Health() {
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
    <h2>Shop by health concerns</h2>
  </div>
  <div className="shop-health">
    <div className="shop-health-med">
      <img src="img/sh1.jpg" alt="Loading" onClick={(e)=>getView(e,"diabetes")}/>
      <h3>Diabetes</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh2.jpg" alt="Loading" onClick={(e)=>getView(e,"heart care products")}/>
      <h3>Heart Care</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh3.jpg" alt="Loading" onClick={(e)=>getView(e,"stomach care products")}/>
      <h3>Stomach Care</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh4.jpg" alt="Loading" onClick={(e)=>getView(e,"liver care products")}/>
      <h3>Liver Care</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh5.jpg" alt="Loading" onClick={(e)=>getView(e,"bone care products")}/>
      <h3>Bone, Joint and <br />Muscle Care</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh6.jpg" alt="Loading" onClick={(e)=>getView(e,"kidney care products")}/>
      <h3>Kidney Care</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh7.jpg" alt="Loading" onClick={(e)=>getView(e,"skin care products")}/>
      <h3>Derma Care</h3>
    </div>
    <div className="shop-health-med">
      <img src="img/sh8.jpg" alt="Loading" onClick={(e)=>getView(e,"eye care products")}/>
      <h3>Eye Care</h3>
    </div>
  </div>
</div>

  )
}
