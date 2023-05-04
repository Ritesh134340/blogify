import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/components/loading";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import {FcGoogle} from "react-icons/fc"

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleGoogleLogin=()=>{
    signIn("google",{redirect:false,callbackUrl:"/"})
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const status = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: "/",
    });
  
    if (status.ok) {
      toast.success("Login successful !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push(status.url);
    }
    if(status.error){
      toast.error(status.error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="border-[1px] rounded-[10px] shadow-lg p-[15px] m-auto mt-[150px] md:mt-[200px] lg:mt-[130px] w-[95%]  mb-[50px] md:w-[45%] lg:w-[27%]">
          <h3 className="text-center pb-[20px] font-bold text-lg">Log in</h3>
          <form className="m-[auto] w-[95%]">
            <label className="text-sm text-slate-700">Email</label>
            <br />

            <input
              type="email"
              placeholder="Enter Email"
              className="outline-none focus: border-[2px] focus:border-blue-600 h-[40px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label className="text-sm text-slate-700">password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              className="outline-none focus: border-[2px] focus:border-blue-600 h-[40px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              className="rounded-[5px] bg-[rgb(137,55,95)] text-white py-[8px] px-[15px] mt-[30px] w-[100%] mb-[20px] "
              onClick={handleLogin}
            >
              Submit
            </button>
            <div className="border-b-[1px] border-b-gray-300 relative h-[20px]">
           <div className="absolute flex items-center justify-center top-[0%] left-[45%] bg-white p-2 rounded-[50%] w-[35px] h-[35px]">or</div>
           </div>
          
         

          <div className='flex box-border border-[1px] py-[5px] border-black rounded-[5px] cursor-pointer items-center justify-center gap-[9px] mt-[35px] mb-[30px]' onClick={handleGoogleLogin}>
            <FcGoogle className="text-[25px]"/><p className="text-[14px] font-semibold">Continue with Google</p>
          </div>
          </form>
          
          
         
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
