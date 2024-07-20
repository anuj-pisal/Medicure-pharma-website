import React from "react";
import Doctor_card from "../Components/Doctor_card";
import Test_Compo from "../Components/Test_compo";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function NewMain() {
  return (
    <>
      <Navbar/>
      <Doctor_card />
      <Test_Compo />
      <section className="section__container">
        <h1>Our Happy Customers</h1>
        <div className="section__grid">
          <div className="section__card">
            <span>
              <i className="ri-double-quotes-l" />
            </span>
            <h4>Love the simplicity</h4>
            <p>
              I had booked lab tests for my dad as prescribed by the doctor. We
              wanted early slots, and PharmEasy seemed like the best choice. The
              technician arrived on time, collected the sample, and the reports
              were sent to us quickly before the doctor appointment. Very happy!
            </p>
            <img src="model.png" alt="user" />
            <h5>Rohit Garg</h5>
            <h6>Delhi</h6>
          </div>
          <div className="section__card">
            <span>
              <i className="ri-double-quotes-l" />
            </span>
            <h4>Excellent Service</h4>
            <p>
              For a busy professional like me, there is nothing more valuable
              than time. And thus, I am highly impressed by the services
              provided by PharmEasy labs. The technician came right on time and
              knew his job really well. 5 stars from my side.
            </p>
            <img src="woman.png" alt="user" />
            <h5>Shruti Kumar</h5>
            <h6>Mumbai</h6>
          </div>
          <div className="section__card">
            <span>
              <i className="ri-double-quotes-l" />
            </span>
            <h4>Efficient and Reliable</h4>
            <p>
              Booked a full body health checkup for my Mom. The guy who came to
              collect the blood sample was well-trained. The sample collection
              was done in only 2-3 minutes. And I got the reports quickly.
              Amazing service overall.
            </p>
            <img src="man.png" alt="user" />
            <h5>Sanjay Bhatt</h5>
            <h6>Indore</h6>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
