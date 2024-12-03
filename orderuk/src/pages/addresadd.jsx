import { GoArrowLeft } from "react-icons/go";
import "../css/address.css";
import { useState } from "react";
import Modal from "../components/modalpopup";
import { CiLocationArrow1, CiLocationOn } from "react-icons/ci";

const address = [
  { name: "Mike Ross", address: "45, Green Street, Sector 12, New Delhi, 110001, India", phone: "8734637468", default: false },
  { name: "Mike Ross", address: "45, Green Street, Sector 12, New Delhi, 110001, India", phone: "8734637468", default: false },
  { name: "Mike Ross", address: "45, Green Street, Sector 12, New Delhi, 110001, India", phone: "8734637468", default: true },
];

const Address = () => {
  const [addwindow, isaddwindow] = useState(false);

  return (
    <div className="addaddress h-screen mt-10 lg:mt-0">
      <div className="backButton ">
        <GoArrowLeft className="icon" />
        <span>Your Addresses</span>
      </div>
      <div className="addresscards">
        <div className="flex w-full justify-center items-center addresscard w-[300px] h-[200px] border border-gray-500 rounded-lg border-dotted">
          <button onClick={(e) => isaddwindow(true)} className="bg-red-100 w-16 h-16 rounded-[30px] text-[30px] text-red-500">
            +
          </button>
        </div>
        {address?.map((ad) => {
          return (
            <div className="flex p-10 w-full justify-center flex-col gap-4 items-start addresscard w-[300px] h-[200px] border border-gray-500 rounded-lg">
              <div className="header w-full flex justify-between items-between">
                <p className="font-bold">{ad?.name}</p>
                {ad?.default && <p className="px-3 bg-orange-100 rounded-[20px] text-sm text-orange-500">default</p>}
              </div>
              <p className="text-start text-sm">{ad?.address}</p>
              <p className="whitespace-nowrap">Phone Number:{ad?.phone}</p>
              <div className="footer flex">
                <button className="text-orange-400 border-r-2 border-gray-300 pe-4">Edit</button>
                <button className="text-orange-400 px-4">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
      {addwindow && (
        <Modal setClose={(e) => isaddwindow(false)} title="">
          <div className="addaddress flex flex-col gap-3">
            <div className="header flex items-center justify-start">
              <CiLocationOn />
              <p>Add Address</p>
            </div>
            <div className="middle flex items-center gap-6 justify-between flex-wrap lg:flex-nowrap ">
              <select className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" name="" id="">
                <option value="">Delhi</option>
                <option value="">Karnantak</option>
              </select>
              <input placeholder="City/District" class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
              <input placeholder="Pincode"       class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
              <input placeholder="Phone Number"  class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
            </div>
            <textarea placeholder="Phone Number" rows={10}  class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          </div>
          <div className="flex justify-end">
          <button className="text-white py-2 px-6 rounded-lg mt-4" style={{backgroundColor:'#FC8A06'}}>Save</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Address;
