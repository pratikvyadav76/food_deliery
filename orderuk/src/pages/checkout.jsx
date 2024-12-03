import React, { useEffect, useState } from "react";
import "../css/checkout.css";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { useGetUser } from "../customhooks";
import { toast } from "react-toastify";


const getItems=async(path)=>{
  try {
    let items = await axios.get(`${process.env.REACT_APP_URL}/${path}`, {
      headers:{
        "Content-Type":'application/json'
      }
    })  
    return items
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.message||'some error occured')
  }
}


const checkoutData = {
  orderList: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.99,
      imgUrl: "/images/order/Rectangle 11.png",
      item: 1,
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 8.99,
      imgUrl: "/images/order/Rectangle 12.png",
      item: 1,
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      price: 10.99,
      imgUrl: "/images/order/Rectangle 13.png",
      item: 2,
    },
  ],
  deliveryAddress: {
    name: "John Doe",
    address: "123 Main Street, New York, NY, 10001",
  },
  totalItems: 32.97,
  tax: 2.99,
  totalPrice: 35.97,
};

const restaurantData = [
  {
    id: 1,
    imgUrl: "/images/restaurants/Group 16.png",
  },
  {
    id: 2,
    imgUrl: "/images/restaurants/Group 17.png",
  },
  {
    id: 3,
    imgUrl: "/images/restaurants/Group 18.png",
  },
  {
    id: 4,
    imgUrl: "/images/restaurants/Group 19.png",
  },
  {
    id: 5,
    imgUrl: "/images/restaurants/Group 20.png",
  },
  {
    id: 6,
    imgUrl: "/images/restaurants/Group 21.png",
  },
];


function Checkout() {
  let [cartitems, setcartitems] = useState([])
  const navi = useNavigate()

  const user = useGetUser()

  useEffect(()=>{
    getItems(`cart/${user?.data?._id}`).then(e=>{
      setcartitems(Object.values(e?.data?.cart||{}))
    })
  }, [user?.data?._id])

  return (
    <div className="checkout-page">
      <div className="backButton ">
      <GoArrowLeft className="icon"/>
      <span>Your Order Details</span>
      </div>

      <div className="section">
        {/* Left Section: Order List */}
        <div className="left-section ">
          <ul className="order-list">
            {checkoutData.orderList.map((item) => (
              <li key={item.id} className="order-item">
                <div className="order-item-left">
                  <img src={item.imgUrl} alt={item.name} className="item-img" />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-quantity">{item.item}x item</p>
                  </div>
                </div>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="notes-section">
            <label htmlFor="notes">Notes:</label>
            <input type="text" id="notes" placeholder="Add order notes" />
          </div>
        </div>

        {/* Right Section: Delivery and Summary */}
        <div className="right-section">
          <div className="delivery-address">
            <div className="left">
              <div className="icon-box">
                <HiLocationMarker className="icon" />
              </div>
               <button onClick={()=>navi('/profile/address')}><div className="address">
                <h3>Delivery Address</h3>
                <p>45,Green Street,Sector 12...</p>
              </div>
              </button>
            </div>
            <div className="GoTo">
              <FaAngleRight
                className="icon"
                style={{ color: "#ff6347", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="summary">
            <div className="sum-item">
              <span>Items</span>
              <span> ${checkoutData.totalItems}</span>
            </div>
            <div className="sum-item">
              <span>Sales Tax</span>
              <span> ${checkoutData.tax.toFixed(2)}</span>
            </div>
            <div className="sum-item sub-total">
              <span>Subtotal ({checkoutData.orderList.length} items)</span>
              <span className="price">
                {" "}
                ${checkoutData.totalPrice.toFixed(2)}
              </span>
            </div>

            <button onClick={()=>navi('/payment')} className="payment-button">Choose Payment Method</button>
          </div>
        </div>
      </div>

      {/* restaurants */}
      {/* Similar Restaurants Section */}
      <div className="similar-restaurants">
        <h1>Similar Restaurants</h1>
        <div className="restaurant-grid">
          {restaurantData.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img
                src={restaurant.imgUrl}
                alt={restaurant.name}
                className="restaurant-img"
              />
              <p className="restaurant-name">{restaurant.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
