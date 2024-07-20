import React from 'react'
import {Card, Button, Accordion, Figure} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CardCompo = ({ details }) => {

  const tests = [details.Test1, details.Test2, details.Test3].filter(testDetails => testDetails);
  const { testName } = useParams();

    // Find the testDetails details based on testName
    const testDetails = details.find(testDetails => testDetails.Name === testName);
  
  return (
    <>
    <Card className='card-main' style={{ width: '50rem',height: 'auto'}}>
      <Card.Body className='card-body'>
        
        <div className="head-button">
        <Card.Title className='card-title'>{testDetails.Name}</Card.Title>
        <Button id='New'>Add to cart</Button>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{testDetails.Subtitle}</Card.Subtitle>
        <div className="testDetails-info">
            <div className="item1">You need to provide <br />Blood</div>
            <div className="item2">This testDetails is for <br />Male,Female</div>
        </div>
        <Card.Text className='card-box'>
          <div className="card-box-item">
          <span id='title'>testDetails Preparation:</span>
            <ol className='prepareList'> 
              <li>{testDetails.TestPreparation1}</li>
              <li>{testDetails.TestPreparation2}</li>
              <li>{testDetails.TestPreparation3}</li>
              <li>{testDetails.TestPreparation4}</li>
            </ol>
          </div>
        </Card.Text>
        <Card.Text className='card-testDetails-info'>
          <div className="card-testDetails-title">
          {testDetails.UnderStandHeader}<hr/>
          </div>
          <Card.Subtitle className="mb-2 text-muted">{testDetails.Question1}</Card.Subtitle>
          <div className="card-testDetails-para">
            <p id='testDetails-info'>
           {testDetails.Answer1}
            </p>
          </div>
        </Card.Text>
        <Card.Text className='card-testDetails-info'>  
          {/* <div className="card-testDetails-title">
          Understanding Good Health Smart Package <hr/>
          </div> */}
          <Card.Subtitle className="mb-2 text-muted">{testDetails.Question2}</Card.Subtitle>
        </Card.Text>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {testDetails.AccordionHeader1}
        </Accordion.Header>
        <Accordion.Body>
          {testDetails.Accordion1Answer}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{testDetails.AccordionHeader2}</Accordion.Header>
        <Accordion.Body>
       {testDetails.Accordion2Answer}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{testDetails.AccordionHeader3}</Accordion.Header>
        <Accordion.Body>
         {testDetails.Accordion3Answer}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        {/* <AccordionA items={testDetails}/> */}
        {/* <HomeCollection title2={testDetails}  /> */}
        <div className="home-container">
        <div className="home-container-title">
        {testDetails.Title2}<br />
          <hr />
        </div>
        <div className="home-container-info">
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h5>Easy online booking</h5>
              <p>Search for tests and packages, book a time and select address for seamless at-home lab tests.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h5>Live tracking of phlebotomist</h5>
              <p>Stay informed with live tracking of our phlebotomist's location for seamless sample collection.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h5>Safe collection</h5>
              <p>Our phlebotomists follow strict safety protocols to collect samples at home on time.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h5>Sample received at lab</h5>
              <p>Your sample is bought to our laboratory for testing by our qualified experts.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h5>Quick reports, free follow up</h5>
              <p>Reports are sent to your email. A free doctor follow up is provided to understand the report better.</p>
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      </Card.Body>
    </Card>
    </>
  )
}



export default CardCompo;