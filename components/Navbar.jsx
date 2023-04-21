import React from "react";
import Link from "next/link";
import { useSession,signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
 
  
  return (
    <div className="border-[1px] shadow-md  h-[80px] flex items-center  fixed top-0 left-0 w-[100%] bg-white z-10">
      <div className=" flex items-center border-[3px] w-full justify-between">

        
        <div className="ml-[50px]  ">
          <Link href="/">
            {" "}
            <h1 className="text-2xl text-[rgb(137,55,95)] font-bold">Blogify.<span className="text-bold text-[13px] ">today</span></h1>
          </Link>
        </div>

        <div className="flex w-full ml-[70px] items-center justify-between border-[3px] absolute top-0 h-[100vh] bg-white md:h-auto  md:staic">
          <ul className="flex items-center  gap-[30px]">
            <li className="cursor-pointer text-bold text-[17px] text-lg"><Link href="/">Home</Link></li>
            <li className="cursor-pointer text-bold text-[17px] text-lg"><Link href="/article/create">Create</Link></li>
            <li className="cursor-pointer text-bold text-[17px] text-lg"><Link href="/about">About</Link></li>
          </ul>

          {
      !session && <div className="mr-[40px]">
        <Link href="/login">
          <button className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] ">
            Log in
          </button>
        </Link>
      </div>
      }

     {
     session && <div className="mr-[40px]">
       
          <button className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] " onClick={() => signOut()}>
            Log out
          </button>
        
      </div>
      }
        </div>


      </div>

     
    </div>
  );
};




export default Navbar;
