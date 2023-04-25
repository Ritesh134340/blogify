import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="shadow-md  h-[80px] flex items-center  fixed top-0 left-0 w-[100%] bg-white z-10">
      <div className=" flex items-center  w-full justify-between">
        <div className="ml-[50px]  ">
          <Link href="/">
            {" "}
            <h1 className="text-2xl text-[rgb(137,55,95)] font-bold">
              Blogify.<span className="text-bold text-[13px] ">today</span>
            </h1>
          </Link>
        </div>

        <div className="flex-col border-[1px] bg-red-600 left-0 items-center justify-between absolute top-[80px] w-[300px] h-[100vh] sm:flex-row  sm:flex-[1] sm:top-0 sm:w-auto sm:bg-white sm:ml-[70px] sm:h-auto sm:static">
          <ul className="flex border-[1px] mt-[50px] flex-col items-center  gap-[30px] sm:flex-row sm:mt-0">
            <li className="cursor-pointer text-bold text-[17px] text-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer text-bold text-[17px] text-lg">
              <Link href="/article/create">Create</Link>
            </li>
            <li className="cursor-pointer text-bold text-[17px] text-lg">
              <Link href="/about">About</Link>
            </li>
          </ul>

          {!session && (
            <div className="text-center mt-[50px] sm:mt-0 sm:mr-[70px]">
              <Link href="/login">
                <button className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] ">
                  Log in
                </button>
              </Link>
            </div>
          )}

          {session && (
            <div className="text-center mt-[50px] border-[1px] sm:mt-auto sm:mr-[70px]">
              <button
                className="p-[13px] text-sm  bg-[#89375F] font-bold rounded-[6px] text-white pb-[6px] pt-[6px] "
                onClick={() => signOut()}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
