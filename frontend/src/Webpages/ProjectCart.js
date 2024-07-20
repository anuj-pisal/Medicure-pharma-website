import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useCart } from "../Logic/Context";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function ProjectCart() {
  const [total, setTotal] = useState(0);
  const { cart, removeFromCart, removeAll} = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [expM, setExpM] = useState("");
  const [expY, setExpY] = useState("");
  const [cvv, setCVV] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cart items:", cart);
    setTotal(cart.reduce((acc, curr) => acc + curr.Price, 0));
  }, [cart]);

  const showAlert = async (event) => {
    event.preventDefault();
    if (name && email && address && city && state && zip && nameCard && cardNo && expM && expY && cvv) {
      const today = new Date();
      const sevenDaysLater = new Date(today);
      sevenDaysLater.setDate(today.getDate() + 7);
      let orderDate = today;
      let arrivalDate = sevenDaysLater;
      let items = cart.length;
      let price = total;
      let data = {name,email,address,city,state,zip,nameCard,cardNo,expM,expY,cvv,items,price,orderDate,arrivalDate};

      try {
        let result = await fetch("http://localhost:5000/order/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (result.ok) {
          localStorage.setItem("userorder", JSON.stringify(data));
          alert("Your order has been placed. It will arrive on " + sevenDaysLater.toDateString() + "\nIt will be cash on delivery.");
          console.log(data);
          removeAll();
          navigate('/');
        } else {
          alert("Failed to place order. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to place order. Please try again.");
      }
    } else {
      alert("Fill the required Information in payment form");
    }
  };

  return (
    <>
      <Navbar />
      <Row>
        <div className="all-cart">
          <div className="cart-part">
            {cart.map((test, index) => (
              <div className="cart-card" key={index}>
                <main>
                  <div className="cart-item">
                    <img
                      src="https://onemg.gumlet.io/assets/b1f5350e-2172-11ee-80ce-02d449b1bc26.png?format=auto"
                      alt="Product Thumbnail"
                      className="thumbnail"
                    />
                    <div className="item-details">
                      <h2>Product Name: {test.Name}</h2>
                      <p>
                        <b>Type:</b> {test.Title2}
                      </p>
                      <div className="price-quantity">
                        <span className="price">Price: Rs.{test.Price}</span>
                      </div>
                      <button className="offer-btn" onClick={() => removeFromCart(test)}> Remove</button>
                    </div>
                  </div>
                </main>
              </div>
            ))}
          </div>
          <div className="container1">
            <form onSubmit={showAlert}>
              <div className="row1">
                <div className="col">
                  <h3 className="title">billing address</h3>
                  <div className="inputBox">
                    <span>full name :</span>
                    <input
                      type="text"
                      placeholder="john deo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>email :</span>
                    <input
                      type="email"
                      placeholder="example@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>address :</span>
                    <input
                      type="text"
                      placeholder="room - street - locality"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>city :</span>
                    <input
                      type="text"
                      placeholder="mumbai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex">
                    <div className="inputBox">
                      <span>state :</span>
                      <input
                        type="text"
                        placeholder="Maharashtra"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    <div className="inputBox">
                      <span>zip code :</span>
                      <input
                        type="text"
                        placeholder="123 456"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h3 className="title">payment</h3>
                  <div className="inputBox">
                    <span>name on card :</span>
                    <input
                      type="text"
                      placeholder="mr. john deo"
                      value={nameCard}
                      onChange={(e) => setNameCard(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>credit card number :</span>
                    <input
                      type="number"
                      placeholder="1111-2222-3333-4444"
                      value={cardNo}
                      onChange={(e) => setCardNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <span>exp month :</span>
                    <input
                      type="text"
                      placeholder="january"
                      value={expM}
                      onChange={(e) => setExpM(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex">
                    <div className="inputBox">
                      <span>exp year :</span>
                      <input
                        type="number"
                        placeholder="2022"
                        value={expY}
                        onChange={(e) => setExpY(e.target.value)}
                        required
                      />
                    </div>
                    <div className="inputBox">
                      <span>CVV :</span>
                      <input
                        type="text"
                        placeholder="1234"
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="billing">
                <h3>Items: {cart.length}</h3>
                <h3>Total: Rs.{total}</h3>
              </div>
              <hr />
              <input
                type="submit"
                value="proceed to checkout"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
      </Row>
      <Footer />
    </>
  );
}
