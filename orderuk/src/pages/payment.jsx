import React, { useState } from "react";
import "../css/payment.css";
import { FaAngleRight, FaArrowLeft, FaWallet } from "react-icons/fa";
import { GoArrowLeft, GoPlus } from "react-icons/go";

function Payment() {

  let [amount, setamount] = useState(0)

  return (
    <div className="payment-page">
      <div className="backButton ">
        <GoArrowLeft
        className="icon" />
        <span>Choose and Pay</span>
      </div>

      <div className="payment-section">
        {/* Left Section: Order List */}
        <div className="left-section ">
          <div className="border-b pb-2 border-black">
            <div className="payment-method">
              <div className="left">
                <div className="icon-box">
                  <FaWallet className="icon" />
                </div>
                <div className="payment">
                  <h3>Wallet</h3>
                  <p>Available Balance: $300</p>
                </div>
              </div>
              <div className="GoTo">
                <FaAngleRight
                  className="icon"
                  style={{ color: "#ff6347", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div className="payment-method options">
            <div className="left">
              <div className="icon-box">M</div>
              <div className="payment">
                <h3>Mastercard</h3>
              </div>
            </div>
            <div className="GoTo">
              <input type="radio" name="" id="" />
            </div>
          </div>
          <div className="payment-method options">
            <div className="left">
              <div className="icon-box">P</div>
              <div className="payment">
                <h3>Paypal</h3>
              </div>
            </div>
            <div className="GoTo">
              <input type="radio" name="" id="" />
            </div>
          </div>

          <div className="payment-method options">
            <div className="left">
              <div className="icon-box">S</div>
              <div className="payment">
                <h3>Stripe</h3>
              </div>
            </div>
            <div className="GoTo">
              <input type="radio" name="" id="" />
            </div>
          </div>
          <div className="payment-method debit-card">
            <div className="left">
              <div style={{ display: "flex",gap:"0.2rem",alignItems:"center",fontSize:"13px",fontWeight:"600" }}>
                <GoPlus size={16} />
                <h3>Add Debit Card</h3>
              </div>
            </div>
          
          </div>
        </div>

        {/* Right Section: Delivery and Summary */}
        <div className="right-section-payment">
            <div className="content">
                <input onChange={e=>setamount(e.target.value)} className="outline-0  w-full mx-2" type="number" name="" id="" />
                <h3>$240</h3>
            </div>
             <a href="success"><button onClick={e=>('')} disabled={Number(amount)<240} className="payment-button disabled:bg-gray-200">Proceed Payment</button>
             </a> 

        </div>
      </div>
      
    </div>
  );
}

export default Payment;
