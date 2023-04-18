import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="border-[1px] shadow-md  h-[80px] flex items-center justify-between fixed top-0 left-0 w-[100%] bg-white z-10">
      <div className=" flex items-center">
        <div className="ml-[50px] ">
          <Link href="/">
            {" "}
            <h1 className="font-extrabold text-2xl text-[#89375F]">Blogify</h1>
          </Link>
        </div>

        <div className="ml-[70px]">
          <ul className="flex items-center gap-[55px]">
            <li className="cursor-pointer text-bold text-[20px] text-lg"><Link href="/">Home</Link></li>
            <li className="cursor-pointer text-bold text-[20px] text-lg"><Link href="/article/create">Create</Link></li>
            <li className="cursor-pointer text-bold text-[20px] text-lg"><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>

      <div className="mr-[50px]">
        <Link href="/login">
          <button className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] ">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};




export default Navbar;
