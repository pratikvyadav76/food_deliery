import { useNavigate } from "react-router";
import "../css/home.css";

let categories = [
  { img: "/images/home/Rectangle 13.png", name: "Burgers & Fast food", desc: "21 Restaurants" },
  { img: "/images/home/Rectangle 15.png", name: "Salads", desc: "32 Restaurants" },
  { img: "/images/home/Rectangle 17.png", name: "Pasta & Casuals", desc: "4 Restaurants" },
  { img: "/images/home/Rectangle 19.png", name: "Pizza", desc: "32 Restaurants" },
  { img: "/images/home/Rectangle 21.png", name: "Breakfast", desc: "4 Restaurants" },
  { img: "/images/home/Rectangle 23.png", name: "Soups", desc: "32 Restaurants" },
];

let resturents = [
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13.png", name: "McDonald’s London" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-1.png", name: "Papa Johns" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-2.png", name: "KFC West London" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-3.png", name: "Texas Chicken" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-4.png", name: "Burger King" },
  { cover: "/images/products/Food Delivery Website & App Design (Final2)/Rectangle 13-5.png", name: "Shaurma 1" },
];

const Home = () => {
  const navi = useNavigate()
  return (
    <>
      <section className="mt-6">
        <div className="mainsectionn w-full h-full">
          <div className="bg-indigo-950 lg:bg-gray-50 ps-2 lg:ps-10 pt-1 lg:pt-10 banner relative border gap-3 items-center lg:items-start lg:text-start flex justify-center flex-col justify-start h-[300px] lg:h-[500px] border-gray-300 rounded-lg">
            <p className="text-white lg:text-black text-sm">Order Restaurant food, takeaway and groceries.</p>
            <p className="text-white lg:text-black text-4xl font-bold">Feast Your Senses,</p>
            <p style={{ color: "#fc8a06" }} className="text-4xl font-bold mb-5">
              Fast and Fresh
            </p>
            <p className="text-white lg:text-black text-[12px]">Enter a postcode to see what we deliver</p>
            <div className="bg-white flex rounded-full border border-slate-400 overflow-hidden w-[250px] lg:w-[300px] poppins text-black">
              <input type="text" placeholder="e.g. EC4R 3TE" className="w-full outline-none bg-white pl-4 text-sm" />
              <button type="button" style={{ backgroundColor: "#fc8a06" }} className="font-semibold transition-all text-white text-sm rounded-full px-10 py-2.5">
                Search
              </button>
            </div>
            <img className="hidden lg:block absolute bottom-0" style={{ height: "400px", width: "auto", translate: "translate(50%, 0)", left: "50%", transform: "translateX(-50%)", zIndex: 10 }} src="images/home/geatpizza.png" alt="First Image" />
            <img className="hidden lg:block absolute" style={{ height: "380px", width: "300px", translate: "translate(50%, 0)", left: "50%", transform: "translateX(40%)", bottom: "0px", zIndex: 5 }} src="images/home/geatspa.png" alt="First Image" />
            <img className="hidden lg:block absolute" style={{ height: "100%", width: "40vw", translate: "translate(50%, 0)", right: "0%", bottom: "0px", zIndex: 0 }} src="images/home/orageback.png" alt="First Image" />
            <div className="hidden lg:block z-20 absolute right-40 top-20 border notif1 grid grid-cols-12 gap-8 bg-white border p-2 rounded-xl justify-between	">
              <div className="col-span-10 flex flex-col justify-start">
                <img className="w-16 mb-3" src={"images/auth/logo.svg"} alt="" srcset="" />
                <p className="text-sm text-black font-semibold">We’ve Received your order!</p>
                <p className="text-sm">Awaiting Restaurant acceptance </p>
              </div>
              <div className="text-end col-span-2">
                <p className="text-sm text-gray-500">now</p>
              </div>
            </div>
            <div className="hidden lg:block z-20 absolute right-20 top-[200px] border notif1 grid grid-cols-12 gap-8 bg-white border p-2 rounded-xl justify-between	">
              <div className="col-span-10 flex flex-col justify-start">
                <img className="w-16 mb-3" src={"images/auth/logo.svg"} alt="" srcset="" />
                <p className="text-sm text-black font-semibold">We’ve Received your order!</p>
                <p className="text-sm">Awaiting Restaurant acceptance </p>
              </div>
              <div className="text-end col-span-2">
                <p className="text-sm text-gray-500">now</p>
              </div>
            </div>
            <div className="hidden lg:block z-20 absolute right-[150px] top-[350px] border notif1 grid grid-cols-12 gap-8 bg-white border p-2 rounded-xl justify-between	">
              <div className="col-span-10 flex flex-col justify-start">
                <img className="w-16 mb-3" src={"images/auth/logo.svg"} alt="" srcset="" />
                <p className="text-sm text-black font-semibold">We’ve Received your order!</p>
                <p className="text-sm">Awaiting Restaurant acceptance </p>
              </div>
              <div className="text-end col-span-2">
                <p className="text-sm text-gray-500">now</p>
              </div>
            </div>
          </div>
          <div className="foodmenu">
            <div className="flex justify-between items-center my-10">
              <h5 className="text-black font-bold text-[24px]">Up to -40% 🎊 Order.uk exclusive deals</h5>
              <ul className="flex h-[50px] items-center hidden lg:flex">
                <li className="rounded-3xl px-6 py-2 text-black font-semibold h-[38px] font-semibold text-[14px]">Vegan</li>
                <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Sushi</li>
                <li style={{ border: "1px solid #fc8a06", color: "#fc8a06" }} className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">
                  Pizza &amp; Fast food
                </li>
                <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Others</li>
              </ul>
            </div>
            <div className="flex h-[250px]  gap-6 justify-between overflow-auto mt-10 lg:mt-0">
              <div
                className="min-w-[250px] bg-no-repeat px-10 flex flex-col justify-between items-end h-full w-[600px] bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 58%, rgba(3, 8, 31, 0.89) 100%), url("images/home/Rectangle 8.png")`,
                  borderRadius: 20,
                }}
              >
                <div className="h-full">
                  <h5 className="bg-black text-lg text-white font-bold p-5 rounded-b-lg">- 40%</h5>
                </div>
                <div className="hidden lg:block h-full text-start w-full flex flex-col items-start justify-end mb-10">
                  <h5 style={{ color: "#FC8A06" }} className="text-md font-bold">
                    Restaurant
                  </h5>
                  <h5 className="text-2xl text-white font-bold">Chef Burgers London</h5>
                </div>
              </div>
              <div
                className="min-w-[250px] bg-no-repeat px-10 flex flex-col justify-between items-end h-full w-[600px] bg-cover"
                style={{
                  background: `linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 58%, rgba(3, 8, 31, 0.89) 100%), url("images/home/Rectangle 8 (1).png")`,
                  borderRadius: 20,
                }}
              >
                <div className="h-full">
                  <h5 className="bg-black text-lg text-white font-bold p-5 rounded-b-lg">- 20%</h5>
                </div>
                <div className="hidden lg:block h-full text-start w-full flex flex-col items-start justify-end mb-10">
                  <h5 style={{ color: "#FC8A06" }} className="text-md font-bold">
                    Restaurant
                  </h5>
                  <h5 className="text-2xl text-white font-bold">Grand Ai Cafe London</h5>
                </div>
              </div>
              <div
                className="min-w-[250px] bg-no-repeat px-10 flex flex-col justify-between items-end h-full w-[600px] bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 58%, rgba(3, 8, 31, 0.89) 100%), url("images/home/Rectangle 8 (2).png")`,
                  borderRadius: 20,
                }}
              >
                <div className="h-full">
                  <h5 className="bg-black text-lg text-white font-bold p-5 rounded-b-lg">- 17%</h5>
                </div>
                <div className="hidden lg:block h-full text-start w-full flex flex-col items-start justify-end mb-10">
                  <h5 style={{ color: "#FC8A06" }} className="text-md font-bold">
                    Restaurant
                  </h5>
                  <h5 className="text-2xl text-white font-bold">Butterbrot Caf’e London</h5>
                </div>
              </div>
              <div
                className="hidden xl:flex bg-no-repeat  px-10 flex flex-col justify-between items-end h-full w-[600px] bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 58%, rgba(3, 8, 31, 0.89) 100%), url("images/home/Rectangle 8 (2).png")`,
                  borderRadius: 20,
                }}
              >
                <div className="h-full">
                  <h5 className="bg-black text-lg text-white font-bold p-5 rounded-b-lg">- 40%</h5>
                </div>
                <div className="h-full text-start w-full flex flex-col items-start justify-end mb-10">
                  <h5 style={{ color: "#FC8A06" }} className="text-md font-bold">
                    Restaurant
                  </h5>
                  <h5 className="text-2xl text-white font-bold">Chef Burgers London</h5>
                </div>
              </div>
            </div>
            <div />
            <div className="categories my-10 text-start">
              <h5 className="text-black font-bold text-[24px]">Order.uk Popular Categories 🤩</h5>
              <div className="categrorireslist mt-8">
                {categories?.map((c, idd) => {
                  return (
                    <div key={idd} className="cardcategory">
                      <img className="w-full h-full" src={c?.img} alt="" srcset="" />
                      <div className="detailscat w-[250px] px-6 py-2 text-start rounded-b-lg" style={{ backgroundColor: "#F5F5F5" }}>
                        <h5 className="text-sm font-semibold">{c?.name}</h5>
                        <p className="text-sm text-amber-500">{c?.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="categories my-10 text-start">
              <h5 className="text-black font-bold text-[24px]">Popular Restaurants</h5>
              <div className="resturnatlist mt-8">
                {resturents?.map((c, idd) => {
                  return (
                    
                    <button onClick={()=>navi('/product')} key={idd} className="resturnatlistlistsub">
                      <img className="w-full h-full" src={c?.cover} alt="" srcset="" />
                      <div className="detailscat w-full px-6 text-white py-2 text-center rounded-b-lg" style={{ backgroundColor: "#FC8A06" }}>
                        <h5 className="text-sm font-semibold">{c?.name}</h5>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="smiling relative categories mt-40 mb-10 text-start">
              <div className="background py-10 lg:py-0 h-fit lg:h-[550px] flex flex-col pe-0 lg:pe-[150px] flex-col gap-4 items-center lg:items-end justify-center bg-[linear-gradient(180deg,#EEEEEE_0%,#E0E1DC_100%)]" style={{ backgroundColor: "" }}>
                <p className="text-lg lg:text-5xl font-bold">
                  Order <span className="m-0 relative bottom-[10px] inline-block -rotate-90 text-lg bg-amber-600 px-1">.UK</span> ing Is More
                </p>
                <div className="roundedlen bg-none lg:bg-black rounded-[30px] p-3 text-white lg:ps-[400px]">
                  <p className="text-black lg:text-white text-lg lg:text-3xl font-semibold" style={{whiteSpace:'nowrap'}}>
                    <span className="text-lg lg:text-3xl underline" style={{ color: "#FC8A06" }}>
                      Personalised
                    </span>{" "}
                    & Instant
                  </p>
                </div>
                <p className="font-normal text-sm lg:text-lg text-center lg:text-start">Download the Order.uk app for faster ordering</p>
                <div className="applegoodle flex items-center justify-between gap-4">
                  <img className="h-[30px] lg:h-[46px] rounded-lg" src="/images/footer/app_store.png" alt="" srcset="" />
                  <img className="h-[30px] lg:h-[46px] rounded-lg" src="/images/footer/google_play.png" alt="" srcset="" />
                </div>
                <img className="block lg:hidden" src="/images/home/friends-laughing-using-mobiles 2.png" alt="" srcset="" />
              </div>
              <img className="hidden lg:block lg:absolute bottom-0 left-0" src="/images/home/friends-laughing-using-mobiles 2.png" alt="" srcset="" />
            </div>

            <div className="perks w-full flex justify-center flex-wrap items-center h-fit gap-10 mb-[50px]">
              <div
                className="h-[350px] bg-no-repeat flex-grow px-10 flex flex-col justify-between items-start bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 58%, rgba(3, 8, 31, 0.89) 100%), url("images/home/perks/Rectangle 8.png")`,
                  borderRadius: 20,
                }}
              >
                <div className="h-full">
                  <h5 className="bg-white text-lg text-black font-bold p-5 rounded-b-lg">Earn more with lower fees</h5>
                </div>
                <div className="h-full text-start w-full flex flex-col items-start justify-end mb-2">
                  <h5 style={{ color: "#FC8A06" }} className="text-md font-bold">
                    Signup as a business
                  </h5>
                  <h5 className="text-3xl text-white font-bold">Partner with us</h5>
                </div>
                <button style={{ backgroundColor: "#FC8A06" }} className="mb-10 bg-amber-600 text-white font-semibold py-3 px-6 rounded-[30px]">
                  Get Started
                </button>
              </div>

              <div
                className="h-[350px] bg-no-repeat flex-grow px-10 flex flex-col justify-between items-start  bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(3, 8, 31, 0.19) 58%, rgba(3, 8, 31, 0.89) 100%), url("images/home/perks/Rectangle 8-1.png")`,
                  borderRadius: 20,
                }}
              >
                <div className="h-full">
                  <h5 className="bg-white text-lg text-black font-bold p-5 rounded-b-lg">Earn more with lower fees</h5>
                </div>
                <div className="h-full text-start w-full flex flex-col items-start justify-end mb-2">
                  <h5 style={{ color: "#FC8A06" }} className="text-md font-bold">
                    Signup as a rider
                  </h5>
                  <h5 className="text-3xl text-white font-bold">Ride with us</h5>
                </div>
                <button style={{ backgroundColor: "#FC8A06" }} className="mb-10 bg-amber-600 text-white font-semibold py-3 px-6 rounded-[30px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <KnowMore />
          <Stats/>
        </div>
      </section>
    </>
  );
};

const KnowMore = () => {
  return (
    <div className="h-fit py-10" style={{ backgroundColor: "#D9D9D9" }}>
       <h5 className="block lg:hidden text-xl text-black font-bold">Know more about us!</h5>
      <div className="hidden lg:flex upper flex justify-center gap-10 items-center pt-20">
        <div>
          <h5 className="text-xl text-black font-bold">Know more about us!</h5>
        </div>
        <ul className="flex h-[50px] items-center">
          <li className="rounded-3xl px-6 py-2 text-black font-semibold h-[38px] font-semibold text-[14px]">Frequent Questions</li>
          <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Who we are?</li>
          <li style={{ border: "1px solid #fc8a06", color: "#fc8a06" }} className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">
            Partner Program
          </li>
          <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Help & Support</li>
        </ul>
      </div>
      <div className="lower bg-white p-4 mt-10 flex flex-wrap lg:flex-nowrap items-center justify-between rounded-xl mx-1 lg:mx-[80px] h-fit">
        <div className="left p-10 w-full h-full">
          <ul className="flex flex-col gap-10 items-center justify-between">
            <li style={{ backgroundColor: "#fc8a06" }} className="rounded-3xl px-6 py-2 text-black font-semibold h-[38px] font-semibold text-[14px]">
              How does Order.UK work?
            </li>
            <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">What payment methods are accepted?</li>
            <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Can I track my order in real-time?</li>
            <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Are there any special discounts or promotions available?</li>
            <li className="rounded-3xl px-6 py-2 text-black font-semibold text-[14px] h-[38px]">Is Order.UK available in my area?</li>
          </ul>
        </div>
        <div className="right flex flex-col gap-4">
          <div className="upper flex flex-wrap lg:flex-nowrap items-center justify-center gap-3">
            <div style={{ backgroundColor: "#D9D9D9" }} className="cards h-[230px] flex flex-col items-center rounded-lg p-3">
              <p className="font-semibold">Place an Order!</p>
              <img className="h-full" src="/images/home/order-food 1.png" alt="" srcset="" />
              <p className="text-sm">Place order through our website or Mobile app</p>
            </div>
            <div style={{ backgroundColor: "#D9D9D9" }} className="cards h-[230px] flex flex-col items-center rounded-lg p-3">
              <p className="font-semibold">Place an Order!</p>
              <img src="/images/home/food 1.png" alt="" srcset="" />
              <p className="text-sm">Place order through our website or Mobile app</p>
            </div>
            <div style={{ backgroundColor: "#D9D9D9" }} className="cards h-[230px] flex flex-col items-center rounded-lg p-3">
              <p className="font-semibold">Place an Order!</p>
              <img src="/images/home/order 1.png" alt="" srcset="" />
              <p className="text-sm">Place order through our website or Mobile app</p>
            </div>
          </div>
          <div className="lower">
            <p>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats=()=>{
  return(
    <div className="p-10 flex flex-wrap gap-10 items-center justify-center mt-12 rounded-xl" style={{backgroundColor:"#FC8A06"}}>
      <div className="statsdiv">
        <p className="text-5xl font-light text-white">546+</p>
        <p className="text-white text-xl font-semibold">Registered Riders</p>
      </div>
      <div className="statsdiv">
        <p className="text-5xl font-light text-white">789,900+</p>
        <p className="text-white text-xl font-semibold">Orders Delivered</p>
      </div>
      <div className="statsdiv">
        <p className="text-5xl font-light text-white">690+</p>
        <p className="text-white text-xl font-semibold">Restaurants Partnered</p>
      </div>
      <div className="statsdiv">
        <p className="text-5xl font-light text-white">17,457+</p>
        <p className="text-white text-xl font-semibold">Food items</p>
      </div>
    </div>
  )
}

export default Home;
