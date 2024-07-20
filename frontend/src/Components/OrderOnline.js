import React from 'react'
import '../Style/OrderOnline.css'
import { useNavigate } from 'react-router-dom';

export default function OrderOnline() {
    function getdata(e) {
        e.preventDefault();
        var input = document.getElementById("myInput");

        var inputVal = "";
        inputVal = input.value;
        inputVal = inputVal.toLowerCase();

        var msg = document.getElementById("notfound");
        var element = document.getElementById(inputVal);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
            msg.style.display = "none";

            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "#d4f4ed";
            });

            element.addEventListener("mouseout", () => {
                element.style.backgroundColor = "";
            });

        } else {
            msg.style.display = "block";
        }
      }

      const navigate = useNavigate();
      const nav = () => {
          navigate("/doctors");
      }
  return (
    <div>
  <div className="title">
    <h1 id="med-orders-h1">Order Medicines Online</h1>
  </div>
  <div className="med-orders">
    <div className="order-online">
      <div className="med-start">
        <img src="img/valuePropDisc.svg" alt="loading" />
        <p>Flat 20% off</p>
        <img src="img/valuePropProd.svg" alt="loading" />
        <p>1 Lakh+ Products</p>
        <img src="img/valuePropReturn.svg" alt="loading" />
        <p>Easy Returns</p>
      </div>
      <h2>Search for Medicines/Healthcare products</h2>
      <div className="order-online-search">
        <form action="" onSubmit={getdata}>
        <button type='submit'><i className="fa-solid fa-magnifying-glass" /></button>
        <input type="search" placeholder="search medicines/healthcare products" id="myInput" />
        </form>
        <div>
          <h3 id="notfound">Currently Not Available !</h3>
        </div>
      </div>
    </div>
    <div className="prescription">
      <h2>Don't Have a Prescription ?</h2>
      <ul>
        <li>Take Consultation from our Doctors.</li>
        <li>Add medicines to your cart.</li>
      </ul>
      <button onClick={nav}>Consult Now</button>
    </div>
  </div>
</div>

  )
    }
