import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';      
import { hover } from '@testing-library/user-event/dist/hover';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar-main">
    <ListGroup>
      <ListGroup.Item >Popular Pacakages</ListGroup.Item>
      <ListGroup.Item>Fever</ListGroup.Item>
      <ListGroup.Item>Women Health</ListGroup.Item>
      <ListGroup.Item>Diabetes</ListGroup.Item>
      <ListGroup.Item>Fitness</ListGroup.Item>
      <ListGroup.Item>Covid-19</ListGroup.Item>
      <ListGroup.Item>Senior Citizen</ListGroup.Item>
      <ListGroup.Item>Lifestyle Habits</ListGroup.Item>
      <ListGroup.Item>Full Body Check up</ListGroup.Item>
    </ListGroup>
    </div>
    </>
  )
}

export default Sidebar;