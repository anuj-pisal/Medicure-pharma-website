import React,{useState}from 'react';
import './Navigation.css'



export default function Navigation({setActiveComponent}) {
    return (
      <>
      <div className="navigation">
        <ul>
          <li onClick={()=>setActiveComponent('General')} ><a href="#">General</a></li>
          <li onClick={()=>setActiveComponent('Info')}><a href="#">Info</a></li>
          <li onClick={()=>setActiveComponent('Orders')}><a href="#">Orders</a></li>
        </ul>
        
      </div>
          </>
    );
}
  
  
