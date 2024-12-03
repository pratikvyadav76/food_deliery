import React, { useEffect, useRef, useState } from "react";
import "../css/profile.css";
import { FaAngleRight, FaWallet, FaEdit, FaPlus } from "react-icons/fa";
import { GoArrowLeft, GoPlus } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import { useGetUser } from "../customhooks";
import Modal from "../components/modalpopup";


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


function Profile() {
  const [editpaymetn, seteditpayment] = useState(false)
  const [isprofileedit, setprofileedti] = useState(false)
  const [profiledata, setprofiledata] = useState()
  const user = useGetUser()
  let handlechage = useRef(false)

  useEffect(()=>{
    getItems(`profile/${user?.data?._id}`).then(f=>{
      setprofiledata(f?.data)
    })
  }, [])

  const handleForm=async()=>{
    if(!handlechage.current){
      return
    }
    try {
      toast.loading('please wait...')
      let postitem = await PostItem(`profile/${user?.data?._id}`, profiledata)
      toast.success("profile updated")
      toast.dismiss()
    } catch (error) {
      console.log(error)
      toast.dismiss()
      toast.error(error?.message)
    }  
  }


  const hanldeProfileChange=(e)=>{
    e.preventDefault()
    let {name, value} = e.target
    setprofiledata(prev=>({...prev, [name]:value}))
    handlechage.current = true
  }


  return (
    <div className="profile-page">
      {/* Back Button */}
      <div className="backButton">
        <GoArrowLeft className="icon" />
        <span>My Profile</span>
      </div>

      {/* Profile Picture and Name */}
      <div style={{display:'flex', alignItems:'center'}} className="profile-header">
        <div style={{flexGrow:'1'}}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <img
          src="/images/auth/profileicon.png"
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-name">
          <h3>John Doe</h3>
        </div>
        </div>
        </div>
        <button 
        onClick={  ()=>{
          isprofileedit && handleForm()
          setprofileedti(!isprofileedit)
          }} style={{backgroundColor:"#FC8A06", color:'white', padding:'3px 10px', fontSize:'16px', fontWeight:'600'}}>
          {isprofileedit ? "Save":"Edit"}
        </button>
      </div>

      {/* Input Fields */}
      <div className="profile-inputs">
        <div className="input-row">
          <div className="input-group">
            <label>Full Name</label>
            <input onChange={hanldeProfileChange} name="name" value={profiledata?.name} type="text" />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input onChange={hanldeProfileChange} name="email" value={profiledata?.email} type="email" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label>Gender</label>
            <select style={{padding:'8px 10px', fontSize:'12px'}} onChange={hanldeProfileChange} name="gender" id="">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            {/* <input onClick={hanldeProfileChange} name="gender" value={profiledata?.gender} type="text" /> */}
          </div>
          <div className="input-group">
            <label>Country</label>
            <input onChange={hanldeProfileChange} name="country" value={profiledata?.country} type="text" />
          </div>
        </div>
      </div>

      {/* Saved Payment Methods */}
      <div className="saved-payments">
        <h4>Saved Payment Methods</h4>
        <div className="payment-cards">
          {[1, 2, 3].map((_, index) => (
            <div className="payment-card" key={index}>
              <div className="card-left">
                <div className="card-icon">
                  <IoWalletOutline />
                </div>
                <div className="card-details">
                  <p className="account-number">XXXX XXXX XXXX 1234</p>
                  <p className="account-name">John's Wallet</p>
                </div>
              </div>
              <button onClick={()=>seteditpayment(true)}><RiEdit2Line className="edit-icon" /></button>
            </div>
          ))}
          <div className="payment-card card-new">
            <div className="card-icon">
            <FaPlus size={16}/>
                        </div>
            <div className="card-details">
              <p className="account-number">Add New Card</p>
            </div>
          </div>
        </div>
      </div>
      {editpaymetn && <Modal setClose={(e) => seteditpayment(false)} title="">
          <div className="addaddress flex flex-col w-fit">
            <div className="header flex items-center justify-start">
              {/* <CiLocationOn /> */}
              <p className="text-lg font-semibold">Edit Payment Method</p>
            </div>
            <div className="body w-full flex flex-col gap-2">
              <div className="inputpaygroup items-center grid grid-cols-1 md:grid-cols-2">
                <label className="flex whitespace-nowrap text-md" htmlFor="">Card Number</label>
              <input placeholder="XXXX XXXX XXXX 1234" class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
              </div>
              <div className="inputpaygroup items-center grid grid-cols-1 md:grid-cols-2">
                <label className="flex whitespace-nowrap text-md" htmlFor="">Expiration</label>
              <input placeholder="11/26" class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
              </div>
              <div className="inputpaygroup items-center grid grid-cols-1 md:grid-cols-2">
                <label className="flex whitespace-nowrap text-md" htmlFor="">CVC</label>
              <input placeholder="XXX" class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
              </div>
              <div className="inputpaygroup items-center grid grid-cols-1 md:grid-cols-2">
                <label className="flex whitespace-nowrap text-md" htmlFor="">Name on Card</label>
              <input placeholder="Mike Rose" class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 font-semibold text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-b-lg mt-4" style={{backgroundColor:'#FC8A06'}}>
            <button className="px-4 py-2 bg-orange-900 hidden md:block text-white font-semibold text-sm rounded-lg">Remove</button>
            <div className="right flex items-center">
            <button className="px-4 py-2 text-white font-semibold text-sm rounded-lg">Cancel</button>
            <button className="px-10 py-2 bg-white text-black font-semibold text-sm rounded-lg">Save Changes</button>
            </div>

          </div>
        </Modal>}
    </div>
  );
}

export default Profile;
