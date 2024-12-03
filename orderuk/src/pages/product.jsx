import { BiArrowFromLeft } from "react-icons/bi";
import "../css/products.css";
import { FaArrowCircleDown, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUser } from "../customhooks";
import { toast } from "react-toastify";
import { RiH4 } from "react-icons/ri";


const PostItem=async(path, body)=>{
  try {
    let post = await axios.post(`${process.env.REACT_APP_URL}/${path}`, body, {
      headers:{
        "Content-Type":'application/json'
      }
    })  
    return post
  } catch (error) {
    console.log(error)
    throw new Error(error?.response?.data?.message||'something went wrong')
  }
}

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


let screenproducts = [
  { imgurl: "/images/products/Rectangle 8.png", discount: "-20%", title: "McDonald’s East London", desc: "First Order Discount" },
  { imgurl: "/images/products/Rectangle 8 (1).png", discount: "-20%", title: "McDonald’s East London", desc: "Vegan Discount" },
  { imgurl: "/images/products/Rectangle 8 (2).png", discount: "-20%", title: "McDonald’s East London", desc: "Free ice Cream Offer" },
  { imgurl: "/images/products/Rectangle 8.png", discount: "-20%", title: "McDonald’s East London", desc: "First Order Discount" },
];

let burgers = [
  { img: "/images/products/Rectangle 46.png", title: "Royal Cheese Burger with extra Fries", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: "120" },
  { img: "/images/products/Rectangle 46.png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "120" },
  { img: "/images/products/Rectangle 46.png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "120" },
  { img: "/images/products/Rectangle 46.png", title: "Royal Cheese Burger with extra Fries", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: "120" },
  { img: "/images/products/Rectangle 46.png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "120" },
  { img: "/images/products/Rectangle 46.png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "120" },
];

let fries = [
  { img: "/images/products/Rectangle 46 (1).png", title: "Royal Cheese Fries with extra Fries", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: "70" },
  { img: "/images/products/Rectangle 46 (2).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "70" },
  { img: "/images/products/Rectangle 46 (3).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "70" },
  { img: "/images/products/Rectangle 46 (4).png", title: "Royal Cheese Burger with extra Fries", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: "70" },
  { img: "/images/products/Rectangle 46 (2).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "100" },
  { img: "/images/products/Rectangle 46 (1).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "200" },
];

let ColdDrinks = [
  { img: "/images/products/Rectangle 46 (5).png", title: "Royal Cheese Fries with extra Fries", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: "70" },
  { img: "/images/products/Rectangle 46 (6).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "70" },
  { img: "/images/products/Rectangle 46 (7).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "70" },
  { img: "/images/products/Rectangle 46 (8).png", title: "Royal Cheese Burger with extra Fries", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: "70" },
  { img: "/images/products/Rectangle 46 (6).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "100" },
  { img: "/images/products/Rectangle 46 (7).png", title: "The classics for 3", ingre: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "200" },
];

const reviews = [
  {
    profile: "/images/products/Ellipse 3.png",
    name: "St Glx",
    loc: "South London",
    rate: "",
    date: "24th September, 2023",
    comment: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    profile: "/images/products/Ellipse 3.png",
    name: "St Glx",
    loc: "South London",
    rate: "",
    date: "24th September, 2023",
    comment: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    profile: "/images/products/Ellipse 3.png",
    name: "St Glx",
    loc: "South London",
    rate: "",
    date: "24th September, 2023",
    comment: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    profile: "/images/products/Ellipse 3.png",
    name: "St Glx",
    loc: "South London",
    rate: "",
    date: "24th September, 2023",
    comment: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  // {profile:"/images/products/Ellipse 3.png", name:"St Glx", loc:"South London", rate:"", date:"24th September, 2023", comment:"The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying."},
  // {profile:"/images/products/Ellipse 3.png", name:"St Glx", loc:"South London", rate:"", date:"24th September, 2023", comment:"The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying."},
];

let resturents = [
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13.png", name: "McDonald’s London" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-1.png", name: "Papa Johns" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-2.png", name: "KFC West London" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-3.png", name: "Texas Chicken" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-4.png", name: "Burger King" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-5.png", name: "Shaurma 1" },
];

// const cartitems = [
//   { qty: 1, item: "Potato Veggies", rate: 120, desc: "With extra fries" },
//   { qty: 1, item: "Potato Veggies", rate: 120, desc: "With extra fries" },
//   { qty: 1, item: "Potato Veggies", rate: 120, desc: "With extra fries" },
// ];


const getSubtotal = (cartItems) => {
  const total = cartItems?.reduce((acc, r) => {
    return acc + (r?.qty || 0) * (r?.rate || 0);
  }, 0); 

  return total;
}

const ProductPage = ({phonecart ,setphonecart}) => {
 
  let [cartitems, setcartitems] = useState([])
  const user = useGetUser()

  useEffect(()=>{
    if(!user?.data?.name){
      return
    }
    getItems(`cart/${user?.data?._id}`).then(e=>{
      setcartitems(Object.values(e?.data?.cart||{}))
    })
  }, [user?.data?._id])

  let isinitalloadcart = true

  const updateCart=(obj)=>{
    let cartdata = Object.keys(obj)?.length>0?[...cartitems,obj]:cartitems
    PostItem(`cart/${user?.data?._id}`, cartdata).then(e=>{
      console.log('cart updated')
    }).catch(err=>{
      console.log(err)
    })
  }


  const updateCartRemove=(obj)=>{
    PostItem(`cart/${user?.data?._id}`, obj).then(e=>{
      console.log('cart updated')
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="productmain">
      <div className="productpart1">
        <div className="bannerpdoduct">
          <div className="imageoverly"></div>
          <div style={{ backgroundImage: "url('/images/products/Rectangle 43.png')" }} className="imageoverlay">
            <div className="leftpartbanner">
              <p style={{ fontSize: "2vw", color: "white" }} className="small">
                i'm lovin'it!
              </p>
              <p style={{ fontSize: "3vw", color: "white", fontWeight: "bold" }} className="big">
                McDonald’s East London
              </p>
              <div className="buttongroup" style={{ display: "flex", gap: "10px" }}>
                <button>
                  <img src="/images/products/Order Completed.png" alt="" />
                  Minimum Order: 12 GBP
                </button>
                <button>
                  {" "}
                  <img src="/images/products/Motocross.png" alt="" />
                  Delivery in 20-25 Minutes
                </button>
              </div>
            </div>
            <div className="rightbannerimage">
              <img src="/images/products/Rectangle 44.png" alt="" />
            </div>
          </div>
          <div className="timeban">
            <img style={{ width: "20px" }} src="/images/products/Clock.png" alt="" />
            <p>Open until 3:00 AM</p>
          </div>
        </div>
        <div className="donwimageoverfly">
          <div>
            <h5>All Offers from McDonald’s East London</h5>
          </div>
          <div className="searchbar">
            <input type="text" name="" id="" />
            <img src="/images/products/Search More.png" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="navbar">
        <ProductNav  />
      </div>
      <div className="productpart2">
        <div className="cardproductsection">
          <div className="left">
            <div className="imagedisplay">
              {screenproducts?.map((o) => (
                <ImageCards imgurl={o?.imgurl} discount={o?.discount} title={o?.title} desc={o?.desc} />
              ))}
            </div>
            <div className="Burgers">
              <h5>Burgers</h5>
              <div className="productdispalylist">
                {burgers?.map((b) => (
                  <ProductCard img={b?.img} price={b?.price} ingre={b.ingre} title={b?.title} setcartitems={setcartitems} updatecart={updateCart}/>
                ))}
              </div>
            </div>
          </div>
          <div className="cartleftleft">
         {(window.location.pathname?.endsWith('cart') && user?.data?.name) && <div className="right">
            <Cart cartitems={cartitems} setCartItems={setcartitems} updateCart={updateCartRemove}/>
          </div>}
          </div>
        </div>
        <div className="Fries">
          <h5>Fries</h5>
          <div className="productdispalylist">
            {fries?.map((b) => (
              <ProductCard img={b?.img} price={b?.price} ingre={b.ingre} title={b?.title} setcartitems={setcartitems} updatecart={updateCart}/>
            ))}
          </div>
        </div>
        <div className="ColdDrinks">
          <h5>Cold Drinks</h5>
          <div className="productdispalylist">
            {ColdDrinks?.map((b) => (
              <ProductCard img={b?.img} price={b?.price} ingre={b.ingre} title={b?.title} setcartitems={setcartitems} updatecart={updateCart}/>
            ))}
          </div>
        </div>
      </div>
      <div className="productinfocard">
        <ProductContactCard />
      </div>
      <div className="mapcard">
        <MapCard />
      </div>
      <div style={{ marginBottom: "300px" }} className="customreview">
        <div className="cr">
          <div className="head">
            <div className="title">
              <h5>Customer Reviews</h5>
            </div>
            <div className="navbutton">
              <button> &lt; </button>
              <button> &gt; </button>
            </div>
          </div>
          <div className="body">
            {reviews?.map((r) => (
              <ReviewCard profile={r?.profile} name={r?.name} loc={r?.loc} rate={1} date={r?.date} comment={r?.comment} />
            ))}
            {/* <img className='hek' style={{width:'120px'}} src="/images/products/Rectangle 64.png" alt="" srcset="" /> */}
          </div>
        </div>
      </div>
      <div className="resturants">
        <h5 style={{ fontSize: "26px", fontWeight: "700" }}>Similar Restaurants</h5>
        <div className="cardlist">
          {resturents?.map((f) => (
            <Resturentcard cover={f?.cover} name={f?.name} />
          ))}
        </div>
      </div>
      {phonecart && (
         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
         <div className="bg-white rounded-lg shadow-lg w-fit">
             <div className="">
              <Cart cartitems={cartitems} setCartItems={setcartitems} updateCart={updateCartRemove}/>
              <button onClick={()=>setphonecart(false)} className="bg-red-400 w-[90%] rounded-lg text-white font-semibold mb-1 py-2">close</button>
             </div>
         </div>
     </div>
      )}
    </div>
  );
};

const ProductNav = () => {
  return (
    <ul className="productnav">
      <li className="activenavproduct">Offers</li>
      <li>Burgers</li>
      <li>Fires</li>
      <li>Snacks</li>
      <li>Salads</li>
      <li>Cold drinks</li>
      <li>Happy Meal® </li>
      <li>Desserts</li>
      <li>Hod drinks</li>
      <li>Sauces</li>
      <li>Orbit® </li>
    </ul>
  );
};

const ImageCards = ({ imgurl, discount, title, desc }) => {
  return (
    <div className="productimagecard">
      <div className="imagecover">
        <img src={imgurl} alt="" srcset="" />
        <div className="imageoverlayback"></div>
        <div className="pi1">
          <div className="discount">{discount}</div>
          <div>
            <p>{title}</p>
            <h5>{desc}</h5>
          </div>
          <div className="curvedaddbutton">
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ img, title, ingre, price, setcartitems, updatecart}) => {
  return (
    <div className="card">
      <div className="left">
        <h6>{title}</h6>
        <p>{ingre}</p>
        <p>₹{price}</p>
      </div>
      <div className="cardimgg">
        <img src={img} alt="" />
        <div className="curvedaddbutton">
          <button onClick={j=>{
            let cartobje = {qty: 1, item:title, rate:price, desc: "With extra fries"}
            updatecart(cartobje)
            setcartitems(prev=>([...prev, cartobje]))
            }}>+</button>
        </div>
      </div>
    </div>
  );
};

const ProductContactCard = () => {
  return (
    <div className="main">
      <div className="part1">
        <div className="title">
          <img src="/images/products/Tracking.png" alt="" /> <p>Delivery information</p>
        </div>

        <p>
          <span>Monday</span>: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Tuesday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Wednesday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Thursday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Firday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Saturday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Sunday</span>: 8:00 AM–3:00 AM
        </p>
        <p className="estimate">
          <span>Estimated time until delivery</span>: 20 min
        </p>
      </div>
      <div className="part2">
        <div className="title">
          <img src="/images/products/ID Verified.png" alt="" /> <p>Contact information</p>
        </div>

        <p style={{ lineHeight: "24px", fontSize: "13px", overflow: "wrap" }}>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
        <p style={{ fontWeight: "600" }}>Phone number</p>
        <p>+934443-43</p>
        <p>Website</p>
        <p>
          <a style={{ fontSize: "16px" }} href="http://mcdonalds.uk/">
            http://mcdonalds.uk/
          </a>
        </p>
      </div>
      <div className="part3">
        <div className="title">
          <img src="/images/products/Clock (1).png" alt="" /> <p>Operational Times</p>
        </div>

        <p>
          <span>Monday</span>: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Tuesday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Wednesday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Thursday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Firday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Saturday</span>: 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Sunday</span>: 8:00 AM–3:00 AM
        </p>
        <p className="estimate">
          <span>Estimated time until delivery</span>: 20 min
        </p>
      </div>
    </div>
  );
};

const MapCard = () => {
  return (
    <div style={{ backgroundImage: `url("/images/products/map.png")` }} className="mapcardoverlay">
      <div className="part1">
        <p style={{ fontSize: "18px", fontWeight: "800", color: "white" }}>McDonald’s</p>
        <p style={{ color: "#FC8A06", fontWeight: "600", fontSize: "14px" }}>South London</p>
        <p style={{ textAlign: "start", color: "white", fontSize: "12px" }}>Tooley St, London Bridge, London SE1 2TF United Kingdom</p>
        <p style={{ color: "white", fontSize: "16px" }}>Phone number</p>
        <p style={{ color: "#FC8A06" }}>+934443-43</p>
        <p style={{ color: "white" }}>Website</p>
        <a style={{ color: "#FC8A06" }} href="http://mcdonalds.uk/">
          http://mcdonalds.uk/
        </a>
      </div>
      <div style={{ width: "100%" }} className="part2">
        <div style={{ textAlign: "start" }}>
          <p style={{ fontSize: "12px", fontWeight: "600" }}>McDonald’s</p>
          <p style={{ color: "black", fontWeight: "400", fontSize: "14px" }}>South London</p>
        </div>
        <img src="/images/products/Previous Location.png" alt="" />
      </div>
    </div>
  );
};

const ReviewCard = ({ profile, name, loc, rate, date, comment }) => {
  return (
    <div className="rcard">
      <div className="upper">
        <div className="upper1">
          <img style={{ width: "30px", height: "100%" }} src={profile} alt="" />
          <div className="typoprofile">
            <p style={{ fontSize: "12px", fontWeight: "600" }}>{name}</p>
            <p style={{ fontSize: "10px", fontWeight: "500", color: "#FC8A06" }}>{loc}</p>
          </div>
        </div>
        <div className="ratedate">
          <img style={{ height: "10px" }} src="images/products/Group 52.png" alt="" />
          <div>
            <img style={{ width: "20px" }} src="images/products/Time Span.png" alt="" />
            <p style={{ fontSize: "12px", fontWeight: "500" }}>{date}</p>
          </div>
        </div>
      </div>
      <div className="lower" style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "12px", textAlign: "start" }}>{comment}</p>
      </div>
    </div>
  );
};

const Resturentcard = ({ cover, name }) => {
  return (
    <div className="resturentcard">
      <img src={cover} alt="" />
      <h5 style={{ whiteSpace: "nowrap" }}>{name}</h5>
    </div>
  );
};

const Cart = ({ cartitems, setCartItems, updateCart}) => {
  const navi = useNavigate()
  
  const removeItem = (index) => {
    const updatedCartItems = cartitems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    updateCart(updatedCartItems);

};

  return (
    <div style={{width:'600px'}} className="cartmain">
      <div className="header">
        <div className="basket">
          <img style={{width:'40px'}} src="/images/cart/Full Shopping Basket.png" alt="" />
          <h5>My Basket</h5>
        </div>
      </div>
      <div className="itemslist" style={{maxHeight:'600px', overflowY:'auto'}}>
        <ul>
          {cartitems?.map((item, cartindex) => {
            return (<li>
                <div className="itemlist1">
                  <div style={{
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex', padding:'20px', backgroundColor:'#FC8A06', width:'20px', height:'20px', borderRadius:'20px',
                    fontWeight:'800',
                    color:'white',
                    }} className="qty">{item?.qty}X</div>
                </div>
                <div className="itemlist2">
                  <p style={{color:"#028643", fontWeight:'600'}}>₹{item?.rate}</p>
                  <p style={{fontSize:'14px', fontWeight:'700'}}>{item?.item}</p>
                  <p style={{fontSize:'12px', fontWeight:'500'}}>{item?.desc}</p>
                </div>
                <div style={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }} className="itemlist3">
                  <button onClick={h=>removeItem(cartindex)}> <img src="/images/cart/Remove.png" alt="" srcset="" /></button>
                </div>
            </li>);
          })}
          {cartitems?.length<=0&&
          <h4 style={{marginTop:'50%', fontWeight:'600', fontSize:'30px'}}>No Items</h4>
          }
        </ul>
      </div>
      <div className="totalsection">
        <li>
          <p>Sub Total: </p><p>₹{getSubtotal(cartitems)}</p></li>
          <li><p>Discounts: </p><p>-₹3.00</p></li>
          
          <li><p>Delivery Fee: </p><p>₹3.00</p></li>
        
      </div>
      <hr style={{color:'black', width:'100%', height:'2px'}} />
      <div className="totalpaybutton">
          <button className="totoalpay" style={{color:"white", fontWeight:'600'}}>
            <p>Total to pay</p>
            <h5>₹{getSubtotal(cartitems)-3+3}</h5>
          </button>
          <button>
            <p>Choose your free item..</p>
            <FaArrowCircleDown/>
          </button>
          <button>
            <p>Choose your free item..</p>
            <FaArrowCircleRight/>
          </button>
      </div>
      <hr style={{color:'black', width:'100%', height:'2px'}} />
      <div className="duoscootycollection" style={{padding:'20px'}}>
        <button className="scooty">
          <img src="/images/cart/Delivery Scooter.png" alt="" srcset="" />
          <div>
            <p>Delivery</p>
            <p>Starts at 17:50</p>
          </div>
        </button>
        <button className="collection">
          <img src="/images/cart/New Store.png" alt="" srcset="" />
          <div>
            <p>Collection</p>
            <p>Starts at 16:50</p>
          </div>
        </button>
      </div>
      <button disabled={(getSubtotal(cartitems)-3+3)<20} onClick={()=>navi('/checkout')} className="lastbutton" style={{opacity:(getSubtotal(cartitems)-3+3)<20?0.4:1 ,marginBottom:'20px', color:'white', fontWeight:'600', backgroundColor:(getSubtotal(cartitems)-3+3)<20?'red':'green'}}>
          <FaArrowCircleRight/> <p style={{marginLeft:'30%'}} >Checkout!</p>
      </button>
    </div>
  );
};
export default ProductPage;
