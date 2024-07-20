import React from 'react';
import './Doctorlist.css';

const featuresData = [
  {
    imgSrc: "img/confidential.avif",
    title: "100% Confidential",
    description: "All advice & consultations are completely confidential. You can also delete chats whenever you want."
  },
  {
    imgSrc: "img/medal.png",
    title: "Certified Doctors",
    description: "We offer quality healthcare through our network of certified and experienced doctors."
  },
  {
    imgSrc: "img/convenience.png",
    title: "Convenience",
    description: "Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere."
  },
  {
    imgSrc: "img/Cost-effective.png",
    title: "Cost Effective",
    description: "We provide medical assistance on non urgent queries for free. Fee starting at ₹50 for faster response to queries."
  }
];

const Features = () => (
  <div className="features">
    {featuresData.map((feature, index) => (
      <div className="feat" key={index}>
        <img src={feature.imgSrc} alt="" />
        <div className="feat-text">
          <h1>{feature.title}</h1>
          <p>{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Features;
