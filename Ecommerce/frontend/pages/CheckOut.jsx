
import React, { useState } from "react";
import "../css/checkOut.css";

function CheckOut() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1999,
      quantity: 2,
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = 50;
  const finalAmount = totalPrice + deliveryCharge;

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="successPage">
        <div className="successBox">
          <i className="fa-solid fa-circle-check"></i>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for shopping with Shopsy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkoutPage">
      <h1>Checkout</h1>

      <div className="checkoutContainer">

        {/* Customer Details */}

        <div className="checkoutForm">
          <h2>Delivery Information</h2>

          <form onSubmit={handleSubmit}>
            <div className="checkoutField">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={customer.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkoutField">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={customer.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkoutField">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={customer.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkoutField">
              <label>Delivery Address</label>
              <textarea
                name="address"
                placeholder="Enter your full address"
                value={customer.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkoutRow">
              <div className="checkoutField">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={customer.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkoutField">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={customer.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="checkoutField">
              <label>PIN Code</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter PIN code"
                value={customer.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="placeOrderBtn">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}

        <div className="orderSummary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div className="summaryItem" key={item.id}>
              <div>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <div className="summaryTotal">
            <p>Subtotal</p>
            <span>₹{totalPrice}</span>
          </div>

          <div className="summaryTotal">
            <p>Delivery Charge</p>
            <span>₹{deliveryCharge}</span>
          </div>

          <div className="finalTotal">
            <h3>Total Amount</h3>
            <h3>₹{finalAmount}</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CheckOut;
