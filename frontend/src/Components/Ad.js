import React from 'react'
import '../Style/Home.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function () {
  const adScrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (adScrollRef.current) {
      adScrollRef.current.scrollLeft -= 1510;
    }
  };

  const scrollRight = () => {
    if (adScrollRef.current) {
      adScrollRef.current.scrollLeft += 1510;
    }
  };

  const nav = () => {
    navigate('/medicines');
  }
  return (
    <div>
    <div className = "adv-btn">
        <button id="adv-b" onClick={scrollLeft}><img src="/img/back.png" alt="Loading" /></button>
        <button id="adv-n" onClick={scrollRight}><img src="/img/next.png" alt="loading"/></button>
    </div>
    <div className="advertise" ref={adScrollRef}>
        <div id="adver1" onClick={nav}>
           <span><img src="img/ad1.jpg" alt="Loading" /></span>
        </div>
        <div id="adver2" onClick={nav}>
            <span><img src="img/ad2.jpg" alt="Loading" /></span>
        </div>
        <div id="adver3" onClick={nav}>
            <span><img src="img/ad3.jpg" alt="Loading" /></span>
        </div>
    </div> 
    </div>
  )
}
