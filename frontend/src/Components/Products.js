import React, { useState} from 'react'
import '../Style/OrderOnline.css'
import { useCart } from '../Logic/Context'

export default function Products() {

    const [data, setData] = useState("");
    const { cart, addToCart, removeFromCart } = useCart();

    
    async function getProduct(val) {
      var result = await fetch(`http://localhost:5000/getproduct/${val}`);
        result = await result.json();
        setData(result);
        // setValue(true);
        console.log(data);
        addToCart(result); 
      }

      const isInCart = (data) => {
        return cart.some((cartItem) => cartItem.Name === data.Name);
      };
  

  return (        
   <div>

  {/* Trending now */}
  <div className="title">
    <h2>Trending Now</h2>
  </div>
  <div className="trending-now">
    <button id="trending-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain">
      <div className="trend-box" id="sensora toothpaste">
        <img src="img/med1.jpg" alt="Loading" />
        <h3>SENSORA Herbal Sensi- tivity Relief Toothpaste</h3>
        <h5>Natural Peppermint</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(258 reviews)</p>
        </div>
        <p>2K+ bought in last month</p>
        <h2>₹ 483 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 644</s> </p>
          <b>(25% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e3")}>Add to cart</button>
      </div>
      <div className="trend-box" id="himalaya tulsi">
        <img src="img/med2.jpg" alt="Loading" />
        <h3>Himalaya Wellness Tulasi Respiratory Wellness..</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(2k reviews)</p>
        </div>
        <p>10K+ bought in last month</p>
        <h2>₹ 190 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e4")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vicks">
        <img src="img/med3.jpg" alt="Loading" />
        <h3>Vicks Vaporub 105/110ml, Relief From Cold, Cough..</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(5k reviews)</p>
        </div>
        <p>30K+ bought in last month</p>
        <h2>₹ 93 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 99</s> </p>
          <b>(6% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e5")}>Add to cart</button>
      </div>
      <div className="trend-box" id="moov">
        <img src="img/med4.jpg" alt="Loading" />
        <h3>Moov Fast Pain Relief Spray - 80g</h3>
        <h5>Spray</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(842 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 253 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 309</s> </p>
          <b>(18% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e6")}>Add to cart</button>
      </div>
      <div className="trend-box" id="johnson baby oil">
        <img src="img/med5.jpg" alt="Loading" />
        <h3>Johnson's Baby Lotion For New Born, 500ml</h3>
        <h5>Body Oil</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(900 reviews)</p>
        </div>
        <p>1.5K bought in last month</p>
        <h2>₹ 320 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 385</s> </p>
          <b>(17% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e7")}>Add to cart</button>
      </div>
      <div className="trend-box" id="omnigel">
        <img src="img/med6.jpg" alt="Loading" />
        <h3>Omnigel - Bottle of 75gm Spray</h3>
        <h5>Spray</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(432 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 210 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 248</s> </p>
          <b>(15% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e8")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cough syrup">
        <img src="img/med7.jpg" alt="Loading" />
        <h3>Forest Secrets Ayurtuss Cough Syrup </h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(903 reviews)</p>
        </div>
        <p>2k+ bought in last month</p>
        <h2>₹ 391 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 460</s> </p>
          <b>(15% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707e9")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ahaglow face wash">
        <img src="img/med8.jpg" alt="Loading" />
        <h3>Ahaglow Advanced Face Wash Gel</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(342 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 503 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 529</s> </p>
          <b>(5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707ea")}>Add to cart</button>
      </div>
      <div className="trend-box" id="mustela face cream">
        <img src="img/med13.jpg" alt="Loading" />
        <h3>Mustela HydraBebe Facial Cream Normal Skin..</h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(113 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 479 <mark>Buy 2 Get 1 free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 535</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707eb")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cerave moisturizer">
        <img src="img/med14.jpg" alt="Loading" />
        <h3>CeraVe Moisturizing Cream For Dry skin</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(743 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 350 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(12.5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707ec")}>Add to cart</button>
      </div>
      <div className="trend-box" id="volini">
        <img src="img/med15.jpg" alt="Loading" />
        <h3>Volini Spray Pain Relief Spray - 40 g</h3>
        <h5>Spray</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(3K reviews)</p>
        </div>
        <p>5K+ bought in last month</p>
        <h2>₹ 176 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 219</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707ed")}>Add to cart</button>
      </div>
      <div className="trend-box" id="protinex">
        <img src="img/med16.jpg" alt="Loading" />
        <h3>Protinex Health Suppl- ement And Nutritional..</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(142 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 594 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 675</s> </p>
          <b>(12% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707ee")}>Add to cart</button>
      </div>
      <div className="trend-box" id="plaster strips">
        <img src="img/med17.jpg" alt="Loading" />
        <h3>Hansaplast Washproof Antiseptic Plaster strips</h3>
        <h5>Plaster Strips</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(535 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 246 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 300</s> </p>
          <b>(18% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707ef")}>Add to cart</button>
      </div>
      <div className="trend-box" id="glucometer">
        <img src="img/med18.jpg" alt="Loading" />
        <h3>OneTouch Select Plus Simple glucometer mach..</h3>
        <h5>Glucometer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(53 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 875 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1147</s> </p>
          <b>(24% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f0")}>Add to cart</button>
      </div>
    </div>
    <button id="trending-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Deals of the day */}
  <div className="title">
    <h2>Deals of the day</h2>
  </div>
  <div className="trending-now">
    <button id="deals-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="deals-of-day">
      <div className="trend-box" id="medicine organizer">
        <img src="img/med19.jpg" alt="Loading" />
        <h3>COZY nose - Pill Medicine Organizer Storage Box</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(538 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 279 <mark>Buy 2 Get 1 free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 599</s> </p>
          <b>(53% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f1")}>Add to cart</button>
      </div>
      <div className="trend-box" id="nirzact">
        <img src="img/med20.jpg" alt="Loading" />
        <h3>Nirzact Tablet 60 Tab - Fast relief in gases</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(42 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 450 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f2")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ashwagandha">
        <img src="img/med21.jpg" alt="Loading" />
        <h3>Dabur Ashwagandha Tablets - 60 tabs</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(324 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 165</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 220</s> </p>
          <b>(25% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f3")}>Add to cart</button>
      </div>
      <div className="trend-box" id="himalaya pilex tablet">
        <img src="img/med22.jpg" alt="Loading" />
        <h3>Himalaya Wellness | Pilex Tablet </h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(324 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 150 <mark id="b3">Buy 3, Get ₹ 20 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 300</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f4")}>Add to cart</button>
      </div>
      <div className="trend-box" id="dabur gut juice">
        <img src="img/med23.jpg" alt="Loading" />
        <h3>Dabur Gut Health Juice - 1L | 100% Natural..</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(1435 reviews)</p>
        </div>
        <p>3.5K bought in last month</p>
        <h2>₹ 509</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 599</s> </p>
          <b>(15% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f5")}>Add to cart</button>
      </div>
      <div className="trend-box" id="avp">
        <img src="img/med24.jpg" alt="Loading" />
        <h3>AVP Haridrakhandam 150g | Allergy Rakshak</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(42 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 305</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 470</s> </p>
          <b>(35% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f6")}>Add to cart</button>
      </div>
      <div className="trend-box" id="curkey">
        <img src="img/med25.jpg" alt="Loading" />
        <h3>Curkey Pastilles for Quick Relief from Sore Throat</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(33 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 170 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 185</s> </p>
          <b>(8% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f7")}>Add to cart</button>
      </div>
      <div className="trend-box" id="gynoveda liver tablet">
        <img src="img/med26.jpg" alt="Loading" />
        <h3>Gynoveda Liver Detox Ayurvedic Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(342 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 770</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1099</s> </p>
          <b>(30% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f8")}>Add to cart</button>
      </div>
    </div>
    <button id="deals-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* combo */}
  <div className="title">
    <h2>Popular Combo Deals</h2>
  </div>
  <div className="trending-now">
    <button id="combo-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="combo">
      <div className="trend-box">
        <img src="img/med27.jpg" alt="Loading" />
        <h3>Volini Spray (100gm) &amp; Tata 1mg Knee Suppo..</h3>
        <h5>Combo pack of 2 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(58 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 488 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 673</s> </p>
          <b>(27% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707f9")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med28.jpg" alt="Loading" />
        <h3>Pilgo combo of tablets, powder &amp; syrup</h3>
        <h5>Combo pack of 3 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(32 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 500 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707fa")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med29.jpg" alt="Loading" />
        <h3>HOMOEOPATHY Gastro Aid Syrup and tablets</h3>
        <h5>Combo pack of 4 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(254 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 530</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 700</s> </p>
          <b>(24% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707fb")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med30.jpg" alt="Loading" />
        <h3>Anti Dandruff Shampoo and tablets</h3>
        <h5>Combo pack of 5 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(1K+ reviews)</p>
        </div>
        <p>2K+ bought in last month</p>
        <h2>₹ 1000 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1200</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707fc")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med31.jpg" alt="Loading" />
        <h3>Vitamins and Energy boosting tablets</h3>
        <h5>Combo pack of 4 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(143 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 409 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(18% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707fd")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med32.jpg" alt="Loading" />
        <h3>Pain relief tablets, syrup and lotion..</h3>
        <h5>Combo pack of 6 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(442 reviews)</p>
        </div>
        <p>550+ bought in last month</p>
        <h2>₹ 396</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 495</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707fe")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med33.jpg" alt="Loading" />
        <h3>HOMOEOPATHY pack for cuts and burns</h3>
        <h5>Combo pack of 5 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(233 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 268 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 335</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a707ff")}>Add to cart</button>
      </div>
      <div className="trend-box">
        <img src="img/med34.jpg" alt="Loading" />
        <h3>Sunny's ultimate pack for weight loss</h3>
        <h5>Combo pack of 2 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(342 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 770 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1099</s> </p>
          <b>(30% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70800")}>Add to cart</button>
      </div>
    </div>
    <button id="combo-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Summer Essential */}
  <div className="title">
    <h2>Summer Essential Products</h2>
  </div>
  <div className="trending-now">
    <button id="summer-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="summer">
      <div className="trend-box" id="glucond">
        <img src="img/med35.jpg" alt="Loading" />
        <h3>Glucon-D Tangy Orange Glucose Powder (1kg..</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(435 reviews)</p>
        </div>
        <p>5K+ bought in last month</p>
        <h2>₹ 200 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70801")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cetaphil face wash">
        <img src="img/med36.jpg" alt="Loading" />
        <h3>Cetaphil PRO Oil Control Foam Face Wash for Acne</h3>
        <h5>Foam</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(342 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 600<mark id="b3">Buy 3, Get ₹ 100 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1200</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70802")}>Add to cart</button>
      </div>
      <div className="trend-box" id="jamun vinegar">
        <img src="img/med37.jpg" alt="Loading" />
        <h3>Jamun Vinegar with Mother Organic 500 ml </h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(25 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 368</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 740</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70803")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ors">
        <img src="img/med38.jpg" alt="Loading" />
        <h3>FAST&amp;UP Reload O.R.S, Electrolyte Tablets</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(400 reviews)</p>
        </div>
        <p>530+ bought in last month</p>
        <h2>₹ 209 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 410</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70804")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cetaphil bar">
        <img src="img/med39.jpg" alt="Loading" />
        <h3>Cetaphil Cleansing Bar 100gm | PH 5.5</h3>
        <h5>Soap</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(435 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 120 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 240</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70805")}>Add to cart</button>
      </div>
      <div className="trend-box" id="navratna">
        <img src="img/med40.jpg" alt="Loading" />
        <h3>Navratna Gold Ayurvedic Oil | Non Sticky </h3>
        <h5>Hair Oil</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(1K+ reviews)</p>
        </div>
        <p>3K+ bought in last month</p>
        <h2>₹ 125</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70806")}>Add to cart</button>
      </div>
      <div className="trend-box" id="antifungal powder">
        <img src="img/med41.jpg" alt="Loading" />
        <h3>Cipla Clocip Antifungal Powder 100gm</h3>
        <h5>Unscented Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(523 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 235 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 470</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70807")}>Add to cart</button>
      </div>
      <div className="trend-box" id="neutrogena deep clean">
        <img src="img/med42.jpg" alt="Loading" />
        <h3>Neutrogena Deep Clean Gentle Facial Cleanser</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(142 reviews)</p>
        </div>
        <p>550+ bought in last month</p>
        <h2>₹ 170 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 340</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70808")}>Add to cart</button>
      </div>
    </div>
    <button id="summer-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Monsoon */}
  <div className="title">
    <h2>Monsoon Essential Products</h2>
  </div>
  <div className="trending-now">
    <button id="monsoon-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="monsoon">
      <div className="trend-box" id="himalaya koflet">
        <img src="img/med43.jpg" alt="Loading" />
        <h3>Himalaya Koflet Cough Syrup 100ml</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(2K+ reviews)</p>
        </div>
        <p>8K+ bought in last month</p>
        <h2>₹ 130 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(35% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70809")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cold balm">
        <img src="img/med44.jpg" alt="Loading" />
        <h3>Himalaya COLD BALM 45G (DISPLAY CARTON)</h3>
        <h5>Balm</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(2k+ reviews)</p>
        </div>
        <p>10K+ bought in last month</p>
        <h2>₹ 180 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 360</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7080a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="chyawanprash">
        <img src="img/med45.jpg" alt="Loading" />
        <h3>Dabur Chyawanprash - 950g | 3X Immunity Action</h3>
        <h5>Paste</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(4k+ reviews)</p>
        </div>
        <p>14K+ bought in last month</p>
        <h2>₹ 230 <mark id="b3">Buy 2 Get ₹ 50 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 260</s> </p>
          <b>(11% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7080b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="wild oat">
        <img src="img/med46.jpg" alt="Loading" />
        <h3>Horn-Beam 30ml - Bach Flower Remedies </h3>
        <h5>Liquid Drops</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(464 reviews)</p>
        </div>
        <p>700+ bought in last month</p>
        <h2>₹ 225 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7080c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="samir pannag rus">
        <img src="img/med47.jpg" alt="Loading" />
        <h3>Sadhana Ayurvedics Samir Pannag Ras - 5 Grams</h3>
        <h5>Granuals</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(45 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 120 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7080d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="azivista">
        <img src="img/med48.jpg" alt="Loading" />
        <h3>Azivista 500 mg - Strip of 3 Tablets</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(300+ reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 69</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 89</s> </p>
          <b>(21% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7080e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="disprin">
        <img src="img/med49.jpg" alt="Loading" />
        <h3>Disprin, No. 1 Headache Relief Specialist</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(7K+ reviews)</p>
        </div>
        <p>15K+ bought in last month</p>
        <h2>₹ 100 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 135</s> </p>
          <b>(24% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7080f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="combiflam">
        <img src="img/med50.jpg" alt="Loading" />
        <h3>Combiflam - Bottle of 60 ml Syrup</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(8K+ reviews)</p>
        </div>
        <p>18K+ bought in last month</p>
        <h2>₹ 38 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 45</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70810")}>Add to cart</button>
      </div>
    </div>
    <button id="monsoon-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Winter */}
  <div className="title">
    <h2>Winter Essential Products</h2>
  </div>
  <div className="trending-now">
    <button id="winter-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="winter">
      <div className="trend-box" id="holistic night cream">
        <img src="img/med51.jpg" alt="Loading" />
        <h3>The Skin Story Holistic Hemp Night Cream</h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(283 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 260 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 300</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70811")}>Add to cart</button>
      </div>
      <div className="trend-box" id="plum green tea moisturizer">
        <img src="img/med52.jpg" alt="Loading" />
        <h3>Plum Green Tea Mattifying Moisturizer For Face</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(54 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 80 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(60% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70812")}>Add to cart</button>
      </div>
      <div className="trend-box" id="foot bath powder">
        <img src="img/med53.jpg" alt="Loading" />
        <h3>R A Products Foot Bath Powder</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(435+ reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 530 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 550</s> </p>
          <b>(3.5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70813")}>Add to cart</button>
      </div>
      <div className="trend-box" id="o3+ face wash">
        <img src="img/med54.jpg" alt="Loading" />
        <h3>O3+ ALPHA MEN Acno DTAN | Face Wash</h3>
        <h5>Face Wash</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(114 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 80 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 100</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70814")}>Add to cart</button>
      </div>
      <div className="trend-box" id="heating pad">
        <img src="img/med55.jpg" alt="Loading" />
        <h3>Odessey Multipurpose Electric Heating Pads</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(15 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 1200 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1500</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70815")}>Add to cart</button>
      </div>
      <div className="trend-box" id="lacto calamine moisturizer">
        <img src="img/med56.jpg" alt="Loading" />
        <h3>Lacto Calamine Super Light Moisturizer for Face</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(352 reviews)</p>
        </div>
        <p>700+ bought in last month</p>
        <h2>₹ 200</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70816")}>Add to cart</button>
      </div>
      <div className="trend-box" id="koffeco moisturizer">
        <img src="img/med57.jpg" alt="Loading" />
        <h3>Koffeco Green Tea Chamomile Moisturizer</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(754 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 240<mark id="b3">Buy 3, Get ₹ 100 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(4% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70817")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vaporizer">
        <img src="img/med58.jpg" alt="Loading" />
        <h3>Vaporizer- Advanced 3 in 1 Steam Vaporizer</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(8K+ reviews)</p>
        </div>
        <p>18K+ bought in last month</p>
        <h2>₹ 538 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70818")}>Add to cart</button>
      </div>
    </div>
    <button id="winter-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Best Seller */}
  <div className="title">
    <h2>Our Best Seller</h2>
  </div>
  <div className="trending-now">
    <button id="best-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="best">
      <div className="trend-box" id="dolo">
        <img src="img/med49.jpg" alt="Loading" />
        <h3>Disprin, No. 1 Headache Relief Specialist</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(7K+ reviews)</p>
        </div>
        <p>15K+ bought in last month</p>
        <h2>₹ 100 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 135</s> </p>
          <b>(24% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70819")}>Add to cart</button>
      </div>
      <div className="trend-box" id="syrup">
        <img src="img/med50.jpg" alt="Loading" />
        <h3>Combiflam - Bottle of 60 ml Syrup</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(8K+ reviews)</p>
        </div>
        <p>18K+ bought in last month</p>
        <h2>₹ 38 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 45</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7081a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="paracetamol">
        <img src="img/med59.jpg" alt="Loading" />
        <h3>Paracip 500 - Strip of 10 Tablets</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(5K+ reviews)</p>
        </div>
        <p>20K+ bought in last month</p>
        <h2>₹ 9 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 11</s> </p>
          <b>(11% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7081b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="dabur">
        <img src="img/med45.jpg" alt="Loading" />
        <h3>Dabur Chyawanprash - 950g | 3X Immunity Action</h3>
        <h5>Paste</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(4k+ reviews)</p>
        </div>
        <p>14K+ bought in last month</p>
        <h2>₹ 230 <mark id="b3">Buy 2 Get ₹ 50 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 260</s> </p>
          <b>(11% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7081c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vics vaporub">
        <img src="img/med3.jpg" alt="Loading" />
        <h3>Vicks Vaporub 105/110ml, Relief From Cold, Cough..</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(5k reviews)</p>
        </div>
        <p>30K+ bought in last month</p>
        <h2>₹ 93 <mark id="mark">Limited time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 99</s> </p>
          <b>(6% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7081d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="odomos">
        <img src="img/med60.jpg" alt="Loading" />
        <h3>DABUR Odomos Mosqu- ito Repellent Cream</h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(2K+ reviews)</p>
        </div>
        <p>12K+ bought in last month</p>
        <h2>₹ 90</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 130</s> </p>
          <b>(31% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7081e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="good knight">
        <img src="img/med61.jpg" alt="Loading" />
        <h3>Good knight Power Activ+ Liquid Vapourizer</h3>
        <h5>Mosquito Repellent</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(754 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 72 <mark>Buy 2 Get 1 free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 99</s> </p>
          <b>(28% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7081f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="colin">
        <img src="img/med62.jpg" alt="Loading" />
        <h3>Colin - Glass and Surface Cleaner Liquid Spray</h3>
        <h5>Unscented</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(4K+ reviews)</p>
        </div>
        <p>20K+ bought in last month</p>
        <h2>₹ 69 <mark>Buy 2 Get 1 free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 99</s> </p>
          <b>(31% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70820")}>Add to cart</button>
      </div>
    </div>
    <button id="best-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Diabetes */}
  <div className="title" id="diabetes">
    <h2>Diabetes Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="diabetes-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="diabetes">
      <div className="trend-box" id="amruvira">
        <img src="img/med63.jpg" alt="Loading" />
        <h3>AMRUTVIRA Diabetes Care, 120Gm Powder </h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(643 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 220 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(12% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70821")}>Add to cart</button>
      </div>
      <div className="trend-box" id="krishna">
        <img src="img/med64.jpg" alt="Loading" />
        <h3>Krishna's Diabic Care Juice - 1000 ml </h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(542 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 280 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 300</s> </p>
          <b>(6.5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70822")}>Add to cart</button>
      </div>
      <div className="trend-box" id="protinex diabetes">
        <img src="img/med65.jpg" alt="Loading" />
        <h3>Protinex Diabetes Care Drink Mix For Adults</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(345+ reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 320 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70823")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ensure">
        <img src="img/med66.jpg" alt="Loading" />
        <h3>Ensure Diabetes Care- Nutrition</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(934 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 380 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70824")}>Add to cart</button>
      </div>
      <div className="trend-box" id="kapiva">
        <img src="img/med67.jpg" alt="Loading" />
        <h3>Kapiva Dia Free Juice | Diabetes Care</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(153 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 120 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70825")}>Add to cart</button>
      </div>
      <div className="trend-box" id="zeroharm">
        <img src="img/med68.jpg" alt="Loading" />
        <h3>ZEROHARM - Blood Sugar Control Tablets</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(52 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 500</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 550</s> </p>
          <b>(9% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70826")}>Add to cart</button>
      </div>
      <div className="trend-box" id="sugaheal">
        <img src="img/med69.jpg" alt="Loading" />
        <h3>SugaHeal (90 tablets) - Diabetes Care Tablets</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(554 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 210 <mark id="b3">Buy 2, Get ₹ 70 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70827")}>Add to cart</button>
      </div>
      <div className="trend-box" id="osoaa">
        <img src="img/med70.jpg" alt="Loading" />
        <h3>OSOAA Ayush Diabetos - 13 Ayurvedic Herbs </h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(425 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 538 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70828")}>Add to cart</button>
      </div>
    </div>
    <button id="diabetes-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>

  {/* Heart */}
  <div className="title" id="heart care products">
    <h2>Heart Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="heart-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="heart">
      <div className="trend-box" id="heart tablets">
        <img src="img/med71.jpg" alt="Loading" />
        <h3>ZEROHARM Holo Heart tablets | Plant-based</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(343 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 210 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70831")}>Add to cart</button>
      </div>
      <div className="trend-box" id="brain care">
        <img src="img/med72.jpg" alt="Loading" />
        <h3>Autoimmunity care Brain + Heart Care</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(42 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 220 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 300</s> </p>
          <b>(26% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70832")}>Add to cart</button>
      </div>
      <div className="trend-box" id="himalaya heart tablets">
        <img src="img/med73.jpg" alt="Loading" />
        <h3>Himalayan Organics Heart Care Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(31 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 200 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 220</s> </p>
          <b>(9% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70833")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ayukalash heart care">
        <img src="img/med74.jpg" alt="Loading" />
        <h3>AYUKALASH Heart Care Ayurvedic Syrup 675 ML</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(54 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 350 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(12.5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70834")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vitawin tablets">
        <img src="img/med75.jpg" alt="Loading" />
        <h3>Vitawin Sea Buckthorn For Healthy Heart</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(753 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 190 <mark id="b3">Buy 3, Get ₹ 80 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70835")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vitamin c">
        <img src="img/med76.jpg" alt="Loading" />
        <h3>Pure Nutrition Bio Coenzyme 125 Capsules</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(52 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 400</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 550</s> </p>
          <b>(27% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70836")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cureveda">
        <img src="img/med77.jpg" alt="Loading" />
        <h3>Cureveda Herbal Heart Hugs - For Healthy Heart</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(94 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 700 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1000</s> </p>
          <b>(30% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70837")}>Add to cart</button>
      </div>
      <div className="trend-box" id="welness mantra">
        <img src="img/med78.jpg" alt="Loading" />
        <h3>Wellness Mantra Ayurvedic Heart Care Capsules</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(125 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 585 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(3% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70838")}>Add to cart</button>
      </div>
    </div>
    <button id="heart-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Stomach */}
  <div className="title" id="stomach care products">
    <h2>Stomach Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="sto-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="sto">
      <div className="trend-box" id="namak zaitoon">
        <img src="img/med79.jpg" alt="Loading" />
        <h3>Hakim Suleman's Namak Zaitoon | stomach care</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(33 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 1200 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1300</s> </p>
          <b>(7.5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70829")}>Add to cart</button>
      </div>
      <div className="trend-box" id="dabur gut juice">
        <img src="img/med23.jpg" alt="Loading" />
        <h3>Dabur Gut Health Juice - 1L | 100% Natural..</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(1435 reviews)</p>
        </div>
        <p>3.5K bought in last month</p>
        <h2>₹ 509</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 599</s> </p>
          <b>(15% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7082a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="cholesterol">
        <img src="img/med81.jpg" alt="Loading" />
        <h3>Krishna's Cholesterol Care Juice - 500 ml</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(14 reviews)</p>
        </div>
        <p>150+ bought in last month</p>
        <h2>₹ 500 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7082b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="acidity">
        <img src="img/med82.jpg" alt="Loading" />
        <h3>Vedistry Dipya Acidity Relief Tablet</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(59 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 250 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(37% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7082c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="dhouti yog">
        <img src="img/med83.jpg" alt="Loading" />
        <h3>Dhouti-Yog Ayurvedic Tablets | Stomach care</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(895 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 120 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(40% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7082d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="herb tantra">
        <img src="img/med84.jpg" alt="Loading" />
        <h3>Herb Tantra - Tummy Kiss Roll-On (9 ml)</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(52 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 400</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 550</s> </p>
          <b>(27% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7082e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="exerciser">
        <img src="img/med85.jpg" alt="Loading" />
        <h3>Acupressure Health Care | Pocket Exerciser</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(434 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 200 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1000</s> </p>
          <b>(80% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7082f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="weight loss">
        <img src="img/med86.jpg" alt="Loading" />
        <h3>4-Wheel Abdominal Exerciser with Knee Mat</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(145 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 400 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70830")}>Add to cart</button>
      </div>
    </div>
    <button id="sto-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* Liver */}
  <div className="title" id='liver care products'>
    <h2>Liver Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="liver-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="liver">
      <div className="trend-box" id="ayurvedic liver medicine">
        <img src="img/med87.jpg" alt="Loading" />
        <h3>MPIL Livam DS Ayurvedic Liver Kit (150 Days)</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(33 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 4099 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 4800</s> </p>
          <b>(15% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70839")}>Add to cart</button>
      </div>
      <div className="trend-box" id="miduty">
        <img src="img/med88.jpg" alt="Loading" />
        <h3>Miduty Palak Notes Liver Detox Supplement</h3>
        <h5>Capsule</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(195 reviews)</p>
        </div>
        <p>3K bought in last month</p>
        <h2>₹ 159 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7083a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="kapiva">
        <img src="img/med89.jpg" alt="Loading" />
        <h3>Kapiva Liver Care Juice | Anti-oxidant Supplement</h3>
        <h5>Liquid</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(144 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 500 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 650</s> </p>
          <b>(30% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7083b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="organic india liver tablets">
        <img src="img/med90.jpg" alt="Loading" />
        <h3>Organic India Liver Kidney Care Pack of 180</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(596 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 250 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7083c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="thyroid">
        <img src="img/med91.jpg" alt="Loading" />
        <h3>ZEROHARM Narie Thyroid Care Tablets</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(5 reviews)</p>
        </div>
        <p>50+ bought in last month</p>
        <h2>₹ 1099</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1200</s> </p>
          <b>(8% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7083d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="carbamide forte">
        <img src="img/med92.jpg" alt="Loading" />
        <h3>Carbamide Forte Liver Support Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(524 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 300</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(25% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7083e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="sri sri liver tablets">
        <img src="img/med93.jpg" alt="Loading" />
        <h3>Sri Products Liv-On for All Liver Problems</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(43 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 250 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 260</s> </p>
          <b>(3% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7083f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="healthally">
        <img src="img/med94.jpg" alt="Loading" />
        <h3>Healthally Biolive Liver Care Capsule</h3>
        <h5>Capsules</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(14 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 200<mark id="b3">Buy 3, Get ₹ 120 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 220</s> </p>
          <b>(9% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70840")}>Add to cart</button>
      </div>
    </div>
    <button id="liver-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* bone */}
  <div className="title" id="bone care products">
    <h2 id="joint care products">Bone, Joint and Muscle Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="bone-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="bone">
      <div className="trend-box" id="joint oil">
        <img src="img/med95.jpg" alt="Loading" />
        <h3>JMD Medico Arthorex Joint Pain Reliever Oil</h3>
        <h5>Oil</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(334 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 499<mark id="b3">Buy 3, Get ₹ 200 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 599</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70841")}>Add to cart</button>
      </div>
      <div className="trend-box" id="joint tablets">
        <img src="img/med96.jpg" alt="Loading" />
        <h3>N Satvam. Joint Care- Dietary Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(15 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 129 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70842")}>Add to cart</button>
      </div>
      <div className="trend-box" id="fytika bone tablets">
        <img src="img/med97.jpg" alt="Loading" />
        <h3>FYTIKA HEALTHCARE PRODUCTS Strong Bones</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(114 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 540 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70843")}>Add to cart</button>
      </div>
      <div className="trend-box" id="team rx bone tablets">
        <img src="img/med98.jpg" alt="Loading" />
        <h3>Team Rx BONE AND JOINT CARE Tablet</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(24 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 200 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(60% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70844")}>Add to cart</button>
      </div>
      <div className="trend-box" id="hakeem suleman">
        <img src="img/med99.jpg" alt="Loading" />
        <h3>Hakeem Suleman Khan’s Royal Care</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(25 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 1299</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1399</s> </p>
          <b>(7% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70845")}>Add to cart</button>
      </div>
      <div className="trend-box" id="thuja occ">
        <img src="img/med100.jpg" alt="Loading" />
        <h3>Thuja Occ Dilution Bone, Joint and Muscle Care</h3>
        <h5>Liquid</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(334 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 200</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 230</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70846")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ortho rx">
        <img src="img/med101.jpg" alt="Loading" />
        <h3>Ortho-XR Pain Relief Gel Ointment 75gms </h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(35 reviews)</p>
        </div>
        <p>250+ bought in last month</p>
        <h2>₹ 150 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 260</s> </p>
          <b>(42% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70847")}>Add to cart</button>
      </div>
      <div className="trend-box" id="calcium">
        <img src="img/med102.jpg" alt="Loading" />
        <h3>Klr.Fit Calcium with Vitamin D3 Supplement</h3>
        <h5>Capsules</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(144 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 500 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 550</s> </p>
          <b>(9% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70848")}>Add to cart</button>
      </div>
    </div>
    <button id="bone-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* kidney */}
  <div className="title" id="kidney care products">
    <h2>Kidney Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="kidney-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="kidney">
      <div className="trend-box" id="bliss wellness kidney tablets">
        <img src="img/med103.jpg" alt="Loading" />
        <h3>Bliss Welness Kidney Detox | Punarnava Patharchatta</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(84 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 324 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 399</s> </p>
          <b>(19% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70849")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ubalance">
        <img src="img/med104.jpg" alt="Loading" />
        <h3>Ubalance Naturals Liver and Kidney Revitaliser</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(142 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 149 <mark id="b3">Buy 3, Get ₹ 60 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 160</s> </p>
          <b>(6% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7084a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="fytika healthcare">
        <img src="img/med105.jpg" alt="Loading" />
        <h3>FYTIKA HEALTHCARE PRODUCTS Strong Bones</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(114 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 540 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 600</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7084b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="liver care">
        <img src="img/med106.jpg" alt="Loading" />
        <h3>ORGANIC INDIA Liver Kidney Care Pack</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(244 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 230 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(8% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7084c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="punarnava capsules">
        <img src="img/med107.jpg" alt="Loading" />
        <h3>Ayurvedic Life Punarnava Capsules 350mg</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(125 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 499 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 799</s> </p>
          <b>(37% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7084d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="biolive">
        <img src="img/med108.jpg" alt="Loading" />
        <h3>Healthally Ayurvedic Uriactive Kidney Health</h3>
        <h5>Syrup</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(334 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 200</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 230</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7084e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="liver wash powder">
        <img src="img/med109.jpg" alt="Loading" />
        <h3>Liver Wash Powder for Fatty Liver - 150gm</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(62 reviews)</p>
        </div>
        <p>350+ bought in last month</p>
        <h2>₹ 350 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 360</s> </p>
          <b>(3% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7084f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="neodocs">
        <img src="img/med110.jpg" alt="Loading" />
        <h3>Neodocs Kidney Care Urine Test Kit</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(24 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 900 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1000</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70850")}>Add to cart</button>
      </div>
    </div>
    <button id="kidney-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* derma */}
  <div className="title" id="skin care products">
    <h2>Derma Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="derma-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="derma">
      <div className="trend-box" id="glenmark episoft moisturizer">
        <img src="img/med111.jpg" alt="Loading" />
        <h3>Glenmark Episoft AC Moisturizer with Sunscreen</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(14 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 310 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 399</s> </p>
          <b>(22% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70851")}>Add to cart</button>
      </div>
      <div className="trend-box" id="plum green tea face mask">
        <img src="img/med112.jpg" alt="Loading" />
        <h3>Plum Green Tea Clear Face Exfoliating Clay Mask</h3>
        <h5>Face Mask</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(188 reviews)</p>
        </div>
        <p>700+ bought in last month</p>
        <h2>₹ 299 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 350</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70852")}>Add to cart</button>
      </div>
      <div className="trend-box" id="face serum">
        <img src="img/med113.jpg" alt="Loading" />
        <h3>Plum 15% Vitamin C Face Serum For Glowing Skin</h3>
        <h5>Serum</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(614 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 180 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70853")}>Add to cart</button>
      </div>
      <div className="trend-box" id="lip mask">
        <img src="img/med114.jpg" alt="Loading" />
        <h3>TAGE 20 Pcs Hydrating Lip Mask,Lip Sleep Mask</h3>
        <h5>Lip Mask</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(2K+ reviews)</p>
        </div>
        <p>10K+ bought in last month</p>
        <h2>₹ 40 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 79</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70854")}>Add to cart</button>
      </div>
      <div className="trend-box" id="simple face wash">
        <img src="img/med115.jpg" alt="Loading" />
        <h3>Simple Kind To Skin Refreshing Facial Wash</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(12 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 399<mark id="b3">Buy 3, Get ₹ 150 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 499</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70855")}>Add to cart</button>
      </div>
      <div className="trend-box" id="urbangabru face mask">
        <img src="img/med116.jpg" alt="Loading" />
        <h3>UrbanGabru Charcoal Peel Off Mask</h3>
        <h5>Face Mask</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(338 reviews)</p>
        </div>
        <p>900+ bought in last month</p>
        <h2>₹ 120 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70856")}>Add to cart</button>
      </div>
      <div className="trend-box" id="plum green tea gel">
        <img src="img/med117.jpg" alt="Loading" />
        <h3>Plum Green Tea Renewed Clarity Night Gel Mini</h3>
        <h5>Lotion</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(92 reviews)</p>
        </div>
        <p>550+ bought in last month</p>
        <h2>₹ 150 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1800</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70857")}>Add to cart</button>
      </div>
      <div className="trend-box" id="rice moisturizer">
        <img src="img/med118.jpg" alt="Loading" />
        <h3>The Face Shop Rice &amp; Ceramide Moisturizer</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(246 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 1000 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1200</s> </p>
          <b>(16% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70858")}>Add to cart</button>
      </div>
    </div>
    <button id="derma-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* eye */}
  <div className="title" id="eye care products">
    <h2>Eye Care Products</h2>
  </div>
  <div className="trending-now">
    <button id="eye-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="eye">
      <div className="trend-box" itemID="l'oreal paris">
        <img src="img/med119.jpg" alt="Loading" />
        <h3>L'Oreal Paris Hyaluronic Acid Eye Serum</h3>
        <h5>Liquid</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(184 reviews)</p>
        </div>
        <p>350+ bought in last month</p>
        <h2>₹ 300 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 400</s> </p>
          <b>(25% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70859")}>Add to cart</button>
      </div>
      <div className="trend-box" id="eye mask">
        <img src="img/med120.jpg" alt="Loading" />
        <h3>BoldHealth Eye Mask With Cooling Gel</h3>
        <h5>Eye Mask</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(48 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 100 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 350</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a705a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="anti wrinkle cream">
        <img src="img/med121.jpg" alt="Loading" />
        <h3>Swiss Beauty Hydra Anti Wrinkle Eye Serum Patch</h3>
        <h5>Serum Patch</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(444 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 220 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(12% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7085b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="eye care">
        <img src="img/med122.jpg" alt="Loading" />
        <h3>Himalayan Plant Based Eye Care Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(230 reviews)</p>
        </div>
        <p>800+ bought in last month</p>
        <h2>₹ 220 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 230</s> </p>
          <b>(4% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7085c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="inralimot pinhole glasses">
        <img src="img/med123.jpg" alt="Loading" />
        <h3>Inralimot Pinhole Glasses Uniisex Vision Care</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(128 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 599 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 699</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7085d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="eye cream">
        <img src="img/med124.jpg" alt="Loading" />
        <h3>The Moms Natural Vita Rich Eye Cream</h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(53 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 150 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 190</s> </p>
          <b>(21% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7085e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="pure netraa">
        <img src="img/med125.jpg" alt="Loading" />
        <h3>Nat Habit Pure Netraa Under Eye Serum</h3>
        <h5>Eye Serum</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(952 reviews)</p>
        </div>
        <p>2K+ bought in last month</p>
        <h2>₹ 250 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7085f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="retinol eye cream">
        <img src="img/med126.jpg" alt="Loading" />
        <h3>Retinol Under Eye Cream for dark circles</h3>
        <h5>Eye Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(246 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 1000</h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1500</s> </p>
          <b>(33% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70860")}>Add to cart</button>
      </div>
    </div>
    <button id="eye-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* brand */}
  <div className="title" id='brand products'>
    <h2>Featured Brand Products</h2>
  </div>
  <div className="trending-now">
    <button id="brand-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="brand">
      <div className="trend-box" id="pilex tablets">
        <img src="img/med22.jpg" alt="Loading" />
        <h3>Himalaya Wellness | Pilex Tablet </h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(324 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 150 <mark id="b3">Buy 3, Get ₹ 20 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 300</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70861")}>Add to cart</button>
      </div>
      <div className="trend-box" id="eucerin">
        <img src="img/med128.jpg" alt="Loading" />
        <h3>Eucerin Advanced Repair Cream 16 Ounce</h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(228 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 140 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(6.5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70862")}>Add to cart</button>
      </div>
      <div className="trend-box" id="nivea">
        <img src="img/med129.jpg" alt="Loading" />
        <h3>NIVEA SUN Protect and Moisture 75ml</h3>
        <h5>Moisturizer</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(94 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 228 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 250</s> </p>
          <b>(8% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70863")}>Add to cart</button>
      </div>
      <div className="trend-box" id="facial cream">
        <img src="img/med13.jpg" alt="Loading" />
        <h3>Mustela HydraBebe Facial Cream Normal Skin..</h3>
        <h5>Cream</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(113 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 479 <mark>Buy 2 Get 1 free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 535</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70864")}>Add to cart</button>
      </div>
      <div className="trend-box" id="accu chek">
        <img src="img/med131.jpg" alt="Loading" />
        <h3>Accu-Chek Active Strips, Pack of 50 (Multicolor)</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(688 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 1099 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1199</s> </p>
          <b>(8% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70865")}>Add to cart</button>
      </div>
      <div className="trend-box" id="pediasure">
        <img src="img/med132.jpg" alt="Loading" />
        <h3>Pediasure Nutritional Drink Powder 1kg</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(155 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 1200 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1400</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70866")}>Add to cart</button>
      </div>
      <div className="trend-box" id="bar">
        <img src="img/med39.jpg" alt="Loading" />
        <h3>Cetaphil Cleansing Bar 100gm | PH 5.5</h3>
        <h5>Soap</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(435 reviews)</p>
        </div>
        <p>600+ bought in last month</p>
        <h2>₹ 120 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 240</s> </p>
          <b>(50% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70867")}>Add to cart</button>
      </div>
      <div className="trend-box" id="gnc">
        <img src="img/med134.jpg" alt="Loading" />
        <h3>GNC Pro Performance Creatine Monohydrate</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(546 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 1500 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 1600</s> </p>
          <b>(6% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70868")}>Add to cart</button>
      </div>
      <div className="trend-box" id="shampoo">
        <img src="img/med135.jpg" alt="Loading" />
        <h3>Sun Pharma Anaboom Anti Hair Fall Shampoo</h3>
        <h5>Shampoo</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(4 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 300<mark id="b3">Buy 3, Get ₹ 150 off</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 310</s> </p>
          <b>(3% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70869")}>Add to cart</button>
      </div>
      <div className="trend-box" id="test strips">
        <img src="img/med136.jpg" alt="Loading" />
        <h3>OneTouch Ultra Test Strips | Pack of 50 Strips</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(448 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 140 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(30% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7086a")}>Add to cart</button>
      </div>
      <div className="trend-box" id="hair removal razor">
        <img src="img/med137.jpg" alt="Loading" />
        <h3 id="sirona">Sirona Hair Removal Razor for Women</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(144 reviews)</p>
        </div>
        <p>450+ bought in last month</p>
        <h2>₹ 120 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(20% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7086b")}>Add to cart</button>
      </div>
      <div className="trend-box" id="powder">
        <img src="img/med138.jpg" alt="Loading" />
        <h3>Protinex Diabetes Care Drink Mix For Adults</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(930 reviews)</p>
        </div>
        <p>2K+ bought in last month</p>
        <h2>₹ 430 <mark>Buy 2 Get 1 Free</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7086c")}>Add to cart</button>
      </div>
      <div className="trend-box" id="chicco">
        <img src="img/med139.jpg" alt="Loading" />
        <h3>Chicco Brush And Comb- Light Blue, 2 Piece</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(728 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 200 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 299</s> </p>
          <b>(33% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7086d")}>Add to cart</button>
      </div>
      <div className="trend-box" id="ensure diabetes powder">
        <img src="img/med140.jpg" alt="Loading" />
        <h3>Ensure Diabetes Care- Nutrition</h3>
        <h5>Powder</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(43 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 450 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7086e")}>Add to cart</button>
      </div>
      <div className="trend-box" id="hansaplast">
        <img src="img/med141.jpg" alt="Loading" />
        <h3>Hansaplast Active Knee Support</h3>
        <h5>Utility</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(652 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 110 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(26% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a7086f")}>Add to cart</button>
      </div>
      <div className="trend-box" id="gerber">
        <img src="img/med142.jpg" alt="Loading" />
        <h3>GERBER Snacks - Strawberry Puffs for Kids</h3>
        <h5>Edible</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(311 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 899 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 950</s> </p>
          <b>(5% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70870")}>Add to cart</button>
      </div>
    </div>
    <button id="brand-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
  {/* vitamins  */}
  <div className="title" id="vitamins">
    <h2 id="supplements">Vitamins And Supplements</h2>
  </div>
  <div className="trending-now">
    <button id="vita-back" className="trend-btn"><i className="fa-solid fa-angles-left" /></button>
    <div className="trend-contain" id="vita">
      <div className="trend-box" id="energy boosting tablets">
        <img src="img/med31.jpg" alt="Loading" />
        <h3>Vitamins and Energy boosting tablets</h3>
        <h5>Combo pack of 4 packs</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(143 reviews)</p>
        </div>
        <p>500+ bought in last month</p>
        <h2>₹ 409 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(18% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70871")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vitamin d">
        <img src="img/med102.jpg" alt="Loading" />
        <h3>Klr.Fit Calcium with Vitamin D3 Supplement</h3>
        <h5>Capsules</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(144 reviews)</p>
        </div>
        <p>400+ bought in last month</p>
        <h2>₹ 500 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 550</s> </p>
          <b>(9% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70872")}>Add to cart</button>
      </div>
      <div className="trend-box" id="dietary supplement">
        <img src="img/med96.jpg" alt="Loading" />
        <h3>N Satvam. Joint Care- Dietary Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(15 reviews)</p>
        </div>
        <p>300+ bought in last month</p>
        <h2>₹ 129 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 150</s> </p>
          <b>(13% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70873")}>Add to cart</button>
      </div>
      <div className="trend-box" id="multivitamin">
        <img src="img/med146.jpg" alt="Loading" />
        <h3>Centrum Men Tablet, World's No.1 Multivitamin</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(173 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 450 <mark id="cash">Cashback</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(10% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70874")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vitamin a">
        <img src="img/med147.jpg" alt="Loading" />
        <h3>Himalayan Plant-Based Vitamin A Supplement</h3>
        <h5>Tablets</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(227 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 299 </h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 350</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70875")}>Add to cart</button>
      </div>
      <div className="trend-box" id="multivitamin gummies">
        <img src="img/med148.jpg" alt="Loading" />
        <h3>Be Bodywise Multivitamin Gummies | 60 Day Pack</h3>
        <h5>Gummy</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-regular fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(543 reviews)</p>
        </div>
        <p>100+ bought in last month</p>
        <h2>₹ 499 <mark id="free-shiping">Free Delivery</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 510</s> </p>
          <b>(2% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70876")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vitamin e">
        <img src="img/med149.jpg" alt="Loading" />
        <h3>Genone E-Gen 400 Vitamin E Capsule (30)</h3>
        <h5>Capsules</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star-half-stroke" style={{color: '#FFD43B'}} />
          <p id="reviews">(92 reviews)</p>
        </div>
        <p>200+ bought in last month</p>
        <h2>₹ 150 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 200</s> </p>
          <b>(25% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70877")}>Add to cart</button>
      </div>
      <div className="trend-box" id="vitamin b">
        <img src="img/med150.jpg" alt="Loading" />
        <h3>Carbamide Forte Chewable Vitamin B 2000</h3>
        <h5>Chewable</h5>
        <div className="trend-box-rate">
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <i className="fa-solid fa-star" style={{color: '#FFD43B'}} />
          <p id="reviews">(686 reviews)</p>
        </div>
        <p>1K+ bought in last month</p>
        <h2>₹ 430 <mark id="mark">Limited Time Deal</mark></h2>
        <div className="mrp-class">
          <p id="mrp">MRP : <s>₹ 500</s> </p>
          <b>(14% off)</b>
        </div>
        <button onClick={() => getProduct("667c079fae0be8e2e4a70878")}>Add to cart</button>
      </div>
    </div>
    <button id="vita-next" className="trend-btn"><i className="fa-solid fa-angles-right" /></button>
  </div>
</div>
  )
}
