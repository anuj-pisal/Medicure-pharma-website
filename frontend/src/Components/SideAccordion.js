import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import React from 'react'
import { Link } from 'react-router-dom';

const SideAccordion = () => {
  return (
    <>
  <div id='sidebar-accordion'>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Popular Pacakages</Accordion.Header>
        <Accordion.Body>
        <ButtonGroup vertical>  
          <Link to={`/labtest/${1}`}>
        <Button variant="outline-secondary">Comprehensive Gold Full Body Checkup with Smart Report.</Button>
        </Link>
        <Link to={`/labtest/${2}`}>
        <Button variant="outline-secondary"> Good Health Smart Package</Button>
        </Link>
        <Link to={`/labtest/${3}`}>
        <Button variant="outline-secondary">Good Health Silver Package with Smart Report</Button>
        </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Fever</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
            <Link to={`/labtest/${4}`}>
        <Button variant="outline-secondary">Fever Package Extensive</Button>
            </Link>
            <Link to={`/labtest/${5}`}>
        <Button variant="outline-secondary">Fever & Covid Package</Button>
            </Link>
            <Link to={`/labtest/${6}`}>
        <Button variant="outline-secondary">Fever Panel for Influenza</Button>
            </Link>
            <Link to={`/labtest/${7}`}>
        <Button variant="outline-secondary">Fever Advanced Panel</Button>
            </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Women Health</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
            <Link to={`/labtest/${8}`}>
        <Button variant="outline-secondary">Fitness Advanced Package</Button>
            </Link>
            <Link to={`/labtest/${9}`}>
        <Button variant="outline-secondary">PCOS Panel</Button>
            </Link>
            <Link to={`/labtest/${10}`}>
        <Button variant="outline-secondary">Women Health Checkup Advanced</Button>
            </Link>
            <Link to={`/labtest/${11}`}>
        <Button variant="outline-secondary">Women Health Checkup Basic</Button> 
            </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Diabetes</Accordion.Header>
        <Accordion.Body>
         <ButtonGroup vertical>
          <Link to={`/labtest/${12}`}>
        <Button variant="outline-secondary">Diabetes Care Package</Button>
          </Link>
          <Link to={`/labtest/${13}`}>
        <Button variant="outline-secondary">Diabets Care Package Advanced</Button>
          </Link>
          <Link to={`/labtest/${14}`}>
        <Button variant="outline-secondary">Diabetes Care Package Premium</Button>
          </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Fitness</Accordion.Header>
        <Accordion.Body>
         <ButtonGroup vertical>
          <Link to={`/labtest/${15}`}>
        <Button variant="outline-secondary">Fitness Advanced Package for Women</Button>
          </Link>
          <Link to={`/labtest/${16}`}> 
        <Button variant="outline-secondary"> Fitness Advanced Package for Men</Button>
          </Link>
          <Link to={`/labtest/${17}`}>
        <Button variant="outline-secondary">Fitness Package with Smart Report</Button>
          </Link>
          <Link to={`/labtest/${18}`}>
        <Button variant="outline-secondary">Fitness Basic Packag</Button>
          </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Covid-19</Accordion.Header>
        <Accordion.Body>
         <ButtonGroup vertical>
          {/* <Link to={`/labtest/${19}`}>
        <Button variant="outline-secondary">Fever & Covid Package</Button>
        </Link> */}
        <Link to={`/labtest/${20}`}>
        <Button variant="outline-secondary">Covid Home Care Extended Package</Button>
        </Link>
        {/* <Link to={`/labtest/${21}`}>
        <Button variant="outline-secondary">Fever Advanced Panel</Button>
        </Link> */}
        <Link to={`/labtest/${19}`}>
        <Button variant="outline-secondary">Post Covid Health Checkup</Button>
        </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Senior Citizen</Accordion.Header>
        <Accordion.Body>
         <ButtonGroup vertical>
           <Link to={`/labtest/${21}`}>
        <Button variant="outline-secondary">Senior Citizen Advanced Package with Smart Report</Button>
        </Link>
         <Link to={`/labtest/${22}`}>
        <Button variant="outline-secondary">Senior Citizen Basic Package with Smart Report</Button>
        </Link>
         <Link to={`/labtest/${23}`}>
        <Button variant="outline-secondary">Senior Citizen Comprehensive Package Female with Smart Report</Button>
        </Link>
         <Link to={`/labtest/${24}`}>
        <Button variant="outline-secondary">Senior Citizen Health Checkup Essential</Button>
        </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Lifestyle Habits</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
            <Link to={`/labtest/${25}`}>
          <Button variant="outline-secondary" >Nutritional Anemia Package</Button>
          </Link>
          <Link to={`/labtest/${26}`}>
        <Button variant="outline-secondary" >Hair Fall Screening Package</Button>
        </Link>
        <Link to={`/labtest/${27}`}>
        <Button variant="outline-secondary">Alcohol Impact Checkup</Button>
        </Link>
        <Link to={`/labtest/${28}`}>
        <Button variant="outline-secondary">Obesity Screening Package </Button>
        </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Full Body Check up</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical>
            <Link to={`/labtest/${29}`}>
        <Button variant="outline-secondary">Comprehensive Gold Full Body Checkup with Smart Report</Button>
        </Link>
        <Link to={`/labtest/${30}`}>
        <Button variant="outline-secondary">Good Health Silver Package with Smart Report</Button>
        </Link>
        <Link to={`/labtest/${31}`}>
        <Button variant="outline-secondary">Comprehensive Silver Full Body Checkup with Smart Report</Button>
        </Link>
        <Link to={`/labtest/${32}`}>
        <Button variant="outline-secondary">Comprehensive Platinum Full Body Checkup with Smart Report</Button>
        </Link>
        </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  </>
  )
}

export default SideAccordion