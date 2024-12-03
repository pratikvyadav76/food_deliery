import { useNavigate, useResolvedPath } from "react-router"
import { useGetUser } from "../customhooks"

const Header=({phonecart ,setphonecart})=>{
    const navi = useNavigate()
    const user  = useGetUser()
    const {pathname} = useResolvedPath()

    return(
        <header className="w-full">
        <section className="block lg:hidden ">
          <div className="upppersmalltop flex justify-between w-full items-center">
            <div className="logoImg p-2">
              <img src="images/auth/logo.svg" className="w-28" alt="" srcSet="" />
            </div>
            <div className="border-l">
              <img src="/images/auth/burdermenu.png" className="h-12 w-12" alt="" srcSet="" />
            </div>
          </div>
          {user?.data?.name && <div className="upppersmallbottom flex justify-between w-full items-center border h-[55px]">
            <div className="leftupperlarge h-full grow font-semibold text-[14px] flex justify-center items-center gap-2" style={{ backgroundColor: "#fc8a06" }}>
            <button className="flex gap-3 items-center" onClick={e=>navi('/profile')}>
              <img src="images/auth/profileicon.png" className="h-8" alt="" srcSet="" />
              <p>Hey {user?.data?.name}</p>
              </button>

            </div>
            {user?.data?.name &&
              <div className="rightupperlarge h-full grow font-semibold text-[14px] text-white flex justify-center items-center gap-2" style={{ backgroundColor: "#028643" }}>
                <button onClick={()=>setphonecart(true)} className="flex gap-3 items-center">
              <img src="images/auth/cart.png" className="h-8" alt="" srcSet="" />
              <p>My Cart</p>
              </button>
            </div>}
          </div>}
        </section>
        <section className="hidden lg:block">
          <div className="mainsectionlarge flex flex-col">
            <div className="upper flex justify-between items-center border w-full bg-gray-50 border rounded-b-lg px-3 h-[50px]">
              <h5 className="text-black font-semibold text-[14px]">
                Get 5% Off your first order, <span className="text-orange-500 font-semibold">Promo:ORDERS</span>
              </h5>
              <div className="group flex items-center justify-between">
                <div className="locccc flex items-center gap-2 hidden xl:flex">
                  <img src="images/home/Location.png" alt="" />
                  <h5 className="hidden xl:block">Regent Street, A4, A4201, London</h5>
                </div>
                <h5 className="mx-4 underline text-orange-500 font-semibold">Change Location</h5>
                <div style={{ backgroundColor: "#028643" }} className="flex gap-3 items-center px-3 py-2 rounded-b-lg">
               {
               user?.data?.name &&  <button onClick={()=>navi('/product/cart')} className="flex gap-2 items-center px-1">
                    <img className="w-6" src="images/home/Full Shopping Basket.png" alt="" />
                    <h6 className="text-white font-semibold">My Cart</h6>
                  </button>}
                  <div className="h-[30px] bg-white opacity-50 w-[1px]" />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <div className="h-[30px] bg-white opacity-50 w-[1px]" />
                  <img className="w-6" src="images/home/Forward Button.png" alt="" />
                </div>
              </div>
            </div>
            <div className="lowerlarge flex justify-between items-center mt-6">
              <div>
                <img className="w-[130px]" src="images/auth/logo.svg" alt="" />
              </div>
              <div>
                <ul className="flex h-[42px] items-center">
                  <button><li style={{backgroundColor: pathname =='/home' && '#FC8A06'}} onClick={()=>navi('/home')} className="rounded-3xl px-6 py-1 h-[30px] text-black font-semibold text-[12px]">Home</li></button>
                  <button><li style={{backgroundColor: pathname =='/browse' && '#FC8A06'}} onClick={()=>navi('/home')} className="rounded-3xl px-6 py-1 text-black font-semibold text-[12px] h-[30px]">Browse Menu</li></button>
                  <button><li style={{backgroundColor: pathname =='/sepecial' && '#FC8A06'}} onClick={()=>navi('/home')} className="rounded-3xl px-6 py-1 text-black font-semibold text-[12px] h-[30px]">Sepcial Offer</li></button>
                  <button><li style={{backgroundColor: ['/product', '/product/cart'].includes(pathname) && '#FC8A06'}} onClick={()=>navi('/home')} className="rounded-3xl px-6 py-1 text-black font-semibold text-[12px] h-[30px]">Resturants</li></button>
                  <button><li style={{backgroundColor: pathname =='/kdkdj' && '#FC8A06'}} onClick={()=>navi('/home')} className="rounded-3xl px-6 py-1 text-black font-semibold text-[12px] h-[30px]">Track Order</li></button>
                  {!user ?
                    <button onClick={e=>navi('/')} className="ms-5 bg-black justify-center rounded-3xl flex items-center gap-2 text-white font-semibold text-[12px] py-3 px-4">
                    <img className="w-5" src="images/home/Male User.png" alt="" srcSet="" /> Login/Signup
                  </button>:
                  <button onClick={e=>navi('/profile')} className="ms-5 bg-black justify-center rounded-3xl flex items-center gap-2 text-white font-semibold text-[12px] py-3 px-4">
                  <img className="w-5" src="images/home/Male User.png" alt="" srcSet="" /> {user?.data?.name}
                </button>
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>
      </header>
    )
}

export default Header