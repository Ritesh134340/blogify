import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="shadow-md  h-[80px] flex items-center  fixed top-0 left-0 w-[100%] bg-white z-10">
      <div className=" flex items-center  w-full justify-between">
        <div className="ml-[15px] sm:ml-[50px] ">
          <Link href="/">
            {" "}
            <h1 className="text-2xl text-[rgb(137,55,95)] font-bold">
              Blogify.<span className="text-bold text-[13px] ">today</span>
            </h1>
          </Link>
        </div>

        <div
          className={`flex-col  bg-[#B71375] ${showSidebar ? 'left-0' : 'left-[-300px]'}  items-center justify-between absolute top-[80px] w-[300px] h-[100vh] ease duration-500 sm:flex sm:flex-row sm:bg-white sm:flex-[1] sm:top-0 sm:w-auto  sm:ml-[70px] sm:h-auto sm:static`}
        >
          <ul className="flex mt-[50px] flex-col items-center  gap-[30px] text-white sm:text-black sm:flex-row  sm:mt-0 ">
            <li className="cursor-pointer text-bold text-[17px] text-lg"  onClick={() => setShowSidebar(!showSidebar)}>
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer text-bold text-[17px] text-lg"  onClick={() => setShowSidebar(!showSidebar)} >
              <Link href="/article/create">Create</Link>
            </li>
            <li className="cursor-pointer text-bold text-[17px] text-lg"  onClick={() => setShowSidebar(!showSidebar)}>
              <Link href="/about">About</Link>
            </li>
          </ul>

          {!session && (
            <div className="text-center mt-[50px] sm:mt-0 sm:mr-[70px]">
              <Link href="/login">
                <button className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] "  onClick={() => setShowSidebar(!showSidebar)} >
                  Log in
                </button>
              </Link>
            </div>
          )}

          {session && (
            <div className="text-center mt-[50px] sm:mt-auto sm:mr-[70px]">
              <button
                className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] "
                onClick={() =>{ signOut(); setShowSidebar(!showSidebar)}}
              >
                Log out
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mr-[15px] sm:hidden">
          {!showSidebar ? (
            <FaBars
              className="cursor-pointer text-[28px]"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          ) : (
            <RxCross2
              className="cursor-pointer text-[28px]"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
