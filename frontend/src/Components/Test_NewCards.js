import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Logic/Context';

const Test_NewCards = ({ pkg }) => {

    const tests = [pkg.Test1, pkg.Test2, pkg.Test3, pkg.Test4].filter(test => test);
    const { cart, addToCart, removeFromCart } = useCart();

    const isInCart = (test) => {
      return cart.some((cartItem) => cartItem.Name === test.Name);
    };
  return (
    <>
         {tests.map((test, index) => (
         <div className="packages" key={index}> 
              <div className="pack-info1">
      { console.log('srno from URL:', test.srno)}
        <p id="pinfo"><b>{test.Name}</b></p>
        {test.NoOfTests}<br />
        {test.SampleTest1} <br />   
        {test.SampleTest2}<br />
        {test.SampleTest3}<br />
        <b>+More</b> <br />
        <br />
        Get Report within 24 hours <br />
        <h3 id="pinfo">Rs.{test.Price}</h3>
        {isInCart(test) ? 
        (<button className="ad-cart" onClick={() => removeFromCart(test)}>Remove from Cart</button>) : 
        (<button className="ad-cart" onClick={() => addToCart(test)}>Add to Cart</button>)}
        <Link to={`/labtest/${test.srno}`}>
       <button className="view-details">View Details</button>
       </Link>
      </div>
    </div>
        ))}
      </>
    
  );
};

export default Test_NewCards;


