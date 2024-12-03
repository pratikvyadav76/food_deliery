import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router";



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

const Login = () => {
  const [issingup, setissignup] = useState(false)

  const handleForm=async(e)=>{
    e.preventDefault()
    let formdata = new FormData(e.target)
    try {
      toast.loading('please wait...')
      let postitem = await PostItem(issingup?'signup':'signin', formdata)
      localStorage.setItem('user', JSON.stringify(postitem?.data))
      window.location.replace('/home')
      toast.dismiss()
    } catch (error) {
      console.log(error)
      toast.dismiss()
      toast.error(error?.message)
    }  
  }

  return (
    <section className="authwinmain h-fit sm:h-screen">
      <div className="flex p-5 justify-center h-full 2xl:mx-32">
        <section className="authwininputs w-full">
          <div className="authwin1 flex flex-col h-full mx-auto justify-center gap-10 sm:p-6 md:p-8 max-w-[500px] md:min-w-[380px]">
            <div className="mx-auto">
              <img
                src="images/auth/logo.svg"
                className="w-28"
                alt="mainlogo"
                srcSet=""
              />
            </div>
            <div className="text-start">
              <h5 className="poppins text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-2">
                Welcome 👋
              </h5>
              <p className="poppins font-normal text-[14px] sm:text-[16px] md:text-[18px]">
                Today is a new day. It's your day. You shape it. Sign in to start
                ordering.
              </p>
            </div>
            <div>
              <form onSubmit={handleForm}>
                <div className="authwinform text-start flex flex-col gap-3">
                  {issingup &&
                   <>
                    <div className="inputitem flex flex-col">
                    <label
                      className="poppins font-normal text-[13px]"
                      style={{ color: "#0c1421" }}
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      placeholder="eg. John A"
                      className="border border-black/30 rounded-2xl h-[34px] text-black px-2 text-[13px]"
                      type="text"
                      name="name"
                      id=""
                    />
                  </div>
                  <div className="inputitem flex flex-col">
                    <label
                      className="poppins font-normal text-[13px]"
                      style={{ color: "#0c1421" }}
                      htmlFor="name"
                    >
                      Phone
                    </label>
                    <input
                      placeholder="Enter 10 digit phone number"
                      className="border border-black/30 rounded-2xl h-[34px] text-black px-2 text-[13px]"
                      type="text"
                      name="phone"
                      id=""
                    />
                  </div>
                  </>}
                  <div className="inputitem flex flex-col">
                    <label
                      className="poppins font-normal text-[13px]"
                      style={{ color: "#0c1421" }}
                      htmlFor="name"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Example@email.com"
                      className="border border-black/30 rounded-2xl h-[34px] text-black px-2 text-[13px]"
                      type="email"
                      name="email"
                      id=""
                    />
                  </div>
                  <div className="inputitem flex flex-col">
                    <label
                      className="poppins font-normal text-[13px]"
                      style={{ color: "#0c1421" }}
                      htmlFor="name"
                    >
                      Password
                    </label>
                    <input
                      placeholder="At least 8 characters"
                      className="border border-black/30 rounded-2xl h-[34px] text-black px-2 text-[13px]"
                      type="text"
                      name="password"
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <button
                      type='submit'
                      style={{ backgroundColor: "#fc8a06" }}
                      className="w-full rounded-2xl text-white py-1 font-semibold text-[16px]"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-center">
              <h6 className="text-black/80">
              {issingup ? "Already have an account?":"Create new account"} {""}
                
                  <button
                    onClick={()=>setissignup(!issingup)}
                    id="signlogclick"
                    className="text-orange-400 poppins font-semibold"
                  >
                   {issingup? "Log In" : "Sign Up"}
                  </button>
              </h6>
            </div>
          </div>
        </section>
        <section className="authwinimage hidden sm:hidden md:block w-full h-full">
          <div className="h-full">
            <img
              src="images/auth/authwall.png"
              className="mx-auto h-full w-full"
              alt=""
              srcSet=""
            />
          </div>
        </section>
      </div>
    </section>
  
  );
};
export default Login;
