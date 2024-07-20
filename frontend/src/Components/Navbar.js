import React from 'react'
import '../Style/Home.css'
import { Link } from 'react-router-dom'
import { useCart } from "../Logic/Context";

export default function ()
{
  const { cart } = useCart();

  const getcolor = (val) => {
    let element = document.getElementById(val);
    element.style.color = "rgb(123, 255, 112)"
  }

  return (
    <nav>
        <div className="navdiv">
            <div className="logo"><a href="http://localhost:3000/">Medicure +</a></div>
            <ul>
                <Link to="/" id='home'><li><a href="#"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</a></li></Link>
                <Link to="/medicines"><li><a href="#" ><i id="medicines" onClick={()=>getcolor("medicines")} className="fa-solid fa-capsules"></i>&nbsp;&nbsp;Medicines</a></li></Link>
                <Link to="/labtest"><li><a href="#"><i className="fa-solid fa-vial-virus"></i>&nbsp;&nbsp;Lab Tests</a></li></Link>            
                <Link to="/doctors"><li><a href="#"><i className="fa-solid fa-stethoscope"></i>&nbsp;&nbsp;Doctors </a></li></Link>
                <Link to="/cart"><li><a href="#"><i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;:&nbsp;&nbsp;{cart.length}</a></li></Link>
                <Link to="/profile"><li><a href="#"><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Profile</a></li></Link>
                <Link to="/signup"><button href="#">Sign up</button></Link>
                <Link to="/login"><button href="#">Log in</button></Link>
            </ul>
        </div>
    </nav>
  )
}
