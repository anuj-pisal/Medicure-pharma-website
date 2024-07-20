import React from 'react'
import '../Style/Home.css'
import { useRef } from 'react';

export default function Cust() {
    const cust_scroll = useRef(null);

    const scrollL = () => {
        if(cust_scroll.current)
            cust_scroll.current.scrollLeft -= 398
    }

    const scrollR = () => {
        if(cust_scroll.current)
            cust_scroll.current.scrollLeft += 398
    }

  return (
    <div>
        <div className = "title">
        <h2>What our Customers say about us</h2>
    </div>

    <div className="customers">
       <button id="cust-back" className="cust-btn" onClick={scrollL}><i  className="fa-solid fa-angles-left"></i></button>
        <div className="people" ref={cust_scroll}>
            <div className="cust"> 
                <p><b>Pankaj Tripathi</b></p>
                <p className="cust-opi">29 May, 2023</p>
                <br/>
                <p className="cust-opi"><q>Medicure+ exceeded my expectations with outstanding service and high-quality products. The user-friendly website made ordering easy, and my well-packaged order arrived quickly. I highly recommend Medicure+ for reliable pharmaceutical products and will definitely be a returning customer!</q></p>
            </div>
            <div className="cust">
                <p><b>Neha Sharma</b></p>
                <p className="cust-opi">23 July, 2023</p>
                <br/>
                <p className="cust-opi"><q>Medicure+ provided an outstanding experience. The medications were of excellent quality, and the customer service was exceptional—quick, helpful responses to my inquiries. I am very satisfied and will definitely continue using Medicure+ for my pharmaceutical needs. Highly recommend!</q></p>
            </div>
            <div className="cust">
                <p><b>Suresh Patil</b></p>
                <p className="cust-opi">2 September, 2023</p>
                <br/>
                <p className="cust-opi"><q>I had a fantastic experience with Medicure+. The website is easy to navigate, and ordering was a breeze. My medications arrived quickly and in perfect condition. I highly recommend Medicure+ for its top-notch service and quality products. I'll definitely shop here again!</q></p>
            </div>
            <div className="cust">
                <p><b>Shreyas Iyer</b></p>
                <p className="cust-opi">12 December, 2023</p>
                <br/>
                <p className="cust-opi"><q>As a long-time user of the Medicure+ app, I can say that I am very happy with their services overall. The ease of ordering and the availability of medicines has made me a repeat customer. And as a Plus member, I get extra discounts on my orders, as well as free delivery. Thanks Medicure+.</q></p>
            </div>
            <div className="cust">
                <p><b>Sharad Tyagi</b></p>
                <p className="cust-opi">4 February, 2024</p>
                <br/>
                <p className="cust-opi"><q>I recently started ordering medicines from Medicure+, and I am extremely happy with their service. The fact that you can order via WhatsApp or call is so easy - all I had to do was share my order details and their team took care of everything else. It was so easy. Great job, Medicure+ !</q></p>
            </div>
            <div className="cust">
                <p><b>Samay Raina</b></p>
                <p className="cust-opi">21 March, 2024</p>
                <br/>
                <p className="cust-opi"><q>Medicure+ is fantastic! The website is easy to use, and my order was handled quickly. The medications arrived on time and in perfect condition. Customer service was responsive and very helpful. I highly recommend Medicure+ for their reliable service and quality products. I'll definitely order again!</q></p>
            </div>
        </div>
        <button id="cust-next" className="cust-btn" onClick={scrollR}><i className="fa-solid fa-angles-right"></i></button>
    </div>
    </div>
  )
}
