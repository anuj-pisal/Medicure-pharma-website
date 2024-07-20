import React, { useEffect, useState } from 'react';
import './Info.css';

export default function Orders({ user }) {
    const [order, setOrder] = useState([]);

    async function getOrder() {
        try {
            let response = await fetch(`http://localhost:5000/order/getorder/${user.email}`); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            setOrder(data);
            console.log('Fetched order data:', data);
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    }

    useEffect(() => {
        if (user && user.email) {
            getOrder();
        } else {
            console.error('User email is not available');
        }
    }, [user]);

    return (
        <div className="Info">
            {order ? (
                order.map((val,i)=>(
                 <div className='orders-hist'>
                      <p><b className='order-hist-title'>Name :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {order[i].name}</p>
                      <p><b className='order-hist-title'>Address :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order[i].address}, {order[i].city} - {order[i].zip}, {order[i].state}</p>
                      <p><b className='order-hist-title'>Card No :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order[i].cardNo}</p>
                      <p><b className='order-hist-title'>Items bought :</b>&nbsp;&nbsp;&nbsp; {order[i].items}</p>
                     <p><b className='order-hist-title'>Total cost :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. {order[i].price} /-</p>
                     <p><b className='order-hist-title'>Order Date :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {order[i].orderDate.split('T')[0]}</p>
                     <p><b className='order-hist-title'>Arrival Date :</b>&nbsp;&nbsp;&nbsp;&nbsp; {order[i].arrivalDate.split('T')[0]}</p>
                 </div>
                ))
            ) : (
                <p>Loading order data...</p>
            )}
        </div>
    );
}
