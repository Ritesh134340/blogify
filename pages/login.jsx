import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/components/loading";


const login = () => {
  const [email, setEmail] = useState("");
  const [loading,setLoading]=useState(false)
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true)
      axios.post("http://localhost:3000/api/user/login", {
        email:email,
        password:password,
      }).then((res)=>{
        if(res.status===200){
          toast.success(res.data.mesg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setLoading(false)
        }
     
      }).catch((err)=>{
        setLoading(false)
        toast.error(err.response.data.mesg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      
      })
    }
  };

  return (
    <>
     
   { 
      loading ? <Loading/> : <div className="border-[1px] rounded-[10px] shadow-lg p-[15px] m-auto mt-[130px] w-[27%] mb-[50px]">
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
          className="rounded-[5px] bg-[rgb(137,55,95)] text-white py-[8px] px-[15px] mb-[25px] mt-[40px] "
          onClick={handleLogin}
        >
          Submit
        </button>
      </form>
      </div>
    }
    <ToastContainer/>
    </>
   
  );
};




export default login;
