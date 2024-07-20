import React from 'react'
import Table from 'react-bootstrap/Table';

export default function LabTestDiv2() {
  return (
   <>
   
    <div className="all-cart">
   <div className="cart-card">
   <main>
        <h1>Your Cart</h1>
        <div class="cart-item">
            <img src="product-thumbnail.jpg" alt="Product Thumbnail" class="thumbnail"/>
            <div class="item-details">
                <h2>Product Name:</h2>
                <p>Test Type: </p>
                <div class="price-quantity">
                    <span class="price">Price:</span>
                    <input type="number" defaultValue={0} min={0} class="quantity"/>
                </div>
                <div class="actions">
                    <button class="remove">Remove</button>
                </div>
            </div>
        </div>
        </main>
   </div>
   {/* <div class="billing-section">
            <h2>Billing Details</h2>
            <form>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" required/>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" name="city" required/>
                </div>
                <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" required/>
                </div>
                <div class="form-group">
                    <label for="zip">ZIP Code</label>
                    <input type="text" id="zip" name="zip" required/>
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input type="text" id="country" name="country" required/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <h2>Payment Details</h2>
                <div class="form-group">
                    <label for="card-name">Name on Card</label>
                    <input type="text" id="card-name" name="card-name" required/>
                </div>
                <div class="form-group">
                    <label for="card-number">Card Number</label>
                    <input type="text" id="card-number" name="card-number" required/>
                </div>
                <div class="form-group">
                    <label for="exp-date">Expiration Date</label>
                    <input type="month" id="exp-date" name="exp-date" required/>
                </div>
                <div class="form-group">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" required/>
                </div>
                <button type="submit" class="checkout">Checkout</button>
            </form>
            <a href="#" class="continue-shopping">Continue Shopping</a>
        </div> */}
    </div>
   </>
  )
}
