// import React, { useEffect } from "react";
// import CardCompo from "./CardCompo";

// import axios from "axios";
// import { useState } from "react";
// import { Outlet, useParams } from "react-router-dom";
// import {Card, Button, Accordion, Figure} from 'react-bootstrap';

// const Labinfo = (testData) => {
 
//   return (
//     <>
// <Card className='card-main' style={{ width: '50rem',height: 'auto'}}>
//       <Card.Body className='card-body'>
        
//         <div className="head-button">
//         <Card.Title className='card-title'>{Name}</Card.Title>
//         <Button id='New'>Add to cart</Button>
//         </div>
//         <Card.Subtitle className="mb-2 text-muted">{Subtitle}</Card.Subtitle>
//         <div className="test-info">
//             <div className="item1">You need to provide <br />Blood</div>
//             <div className="item2">This test is for <br />Male,Female</div>
//         </div>
//         <Card.Text className='card-box'>
//           <div className="card-box-item">
//           <span id='title'>test Preparation:</span>
//             <ol className='prepareList'> 
//               <li>{TestPreparation1}</li>
//               <li>{TestPreparation2}</li>
//               <li>{TestPreparation3}</li>
//               <li>{TestPreparation4}</li>
//             </ol>
//           </div>
//         </Card.Text>
//         <Card.Text className='card-test-info'>
//           <div className="card-test-title">
//           {UnderStandHeader}<hr/>
//           </div>
//           <Card.Subtitle className="mb-2 text-muted">{Question1}</Card.Subtitle>
//           <div className="card-test-para">
//             <p id='test-info'>
//            {Answer1}
//             </p>
//           </div>
//         </Card.Text>
//         <Card.Text className='card-test-info'>  
//           {/* <div className="card-test-title">
//           Understanding Good Health Smart Package <hr/>
//           </div> */}
//           <Card.Subtitle className="mb-2 text-muted">{Question2}</Card.Subtitle>
//         </Card.Text>
//         <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>
//           {AccordionHeader1}
//         </Accordion.Header>
//         <Accordion.Body>
//           {Accordion1Answer}
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>{AccordionHeader2}</Accordion.Header>
//         <Accordion.Body>
//        {Accordion2Answer}
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="2">
//         <Accordion.Header>{AccordionHeader3}</Accordion.Header>
//         <Accordion.Body>
//          {Accordion3Answer}
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//         {/* <AccordionA items={test}/> */}
//         {/* <HomeCollection title2={test}  /> */}
//         <div className="home-container">
//         <div className="home-container-title">
//         {Title2}<br />
//           <hr />
//         </div>
//         <div className="home-container-info">
//           <Figure>
//             <Figure.Image
//               width={110}
//               height={95}
//               alt="171x180"
//               src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
//             />
//             <Figure.Caption>
//             <h5>Easy online booking</h5>
//               <p>Search for tests and packages, book a time and select address for seamless at-home lab tests.</p>
//             </Figure.Caption>
//           </Figure>
//           <Figure>
//             <Figure.Image
//               width={110}
//               height={95}
//               alt="171x180"
//               src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
//             />
//             <Figure.Caption>
//             <h5>Live tracking of phlebotomist</h5>
//               <p>Stay informed with live tracking of our phlebotomist's location for seamless sample collection.</p>
//             </Figure.Caption>
//           </Figure>
//           <Figure>
//             <Figure.Image
//               width={110}
//               height={95}
//               alt="171x180"
//               src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
//             />
//             <Figure.Caption>
//             <h5>Safe collection</h5>
//               <p>Our phlebotomists follow strict safety protocols to collect samples at home on time.</p>
//             </Figure.Caption>
//           </Figure>
//           <Figure>
//             <Figure.Image
//               width={110}
//               height={95}
//               alt="171x180"
//               src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
//             />
//             <Figure.Caption>
//             <h5>Sample received at lab</h5>
//               <p>Your sample is bought to our laboratory for testing by our qualified experts.</p>
//             </Figure.Caption>
//           </Figure>
//           <Figure>
//             <Figure.Image
//               width={110}
//               height={95}
//               alt="171x180"
//               src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
//             />
//             <Figure.Caption>
//             <h5>Quick reports, free follow up</h5>
//               <p>Reports are sent to your email. A free doctor follow up is provided to understand the report better.</p>
//             </Figure.Caption>
//           </Figure>
//         </div>
//       </div>
//       </Card.Body>
//     </Card>

//       {/* <CardCompo/> */}
//       <AddInfo />
//     </>
//   );
// };

// export default Labinfo;
