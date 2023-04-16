import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div className="border-[1px] shadow-md  h-[80px] flex items-center justify-between fixed top-0 left-0 w-[100%] bg-white ">
      <div className="ml-[30px]">
        <Link href="/">    <h1 className="font-extrabold text-2xl text-[#89375F]">Blogify</h1></Link>
    
      </div>

      <div className="mr-[50px]">
        <Link href="/login">
        <button className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] ">Log in</button>
        </Link>
      </div>
   
    </div>
  )
}

export default Navbar