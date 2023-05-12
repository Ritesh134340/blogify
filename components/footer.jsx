import React from "react";
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer >
      <div className="body-font text-[#89375F]  bg-white container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col  lg:static">
        <a className="flex title-font font-medium items-center md:justify-start justify-center">
          <span className="ml-3 text-xl  text-[#89375F]">Blogify<span className="pt-[8px] text-[10px]">.today</span></span>
        </a>
        <div className="hidden sm:block sm:h-[30px] sm:ml-[15px] sm:border-l-[2px]">

        </div>
        <p className="text-sm text-slate-600   sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4" >
          Copyright &copy; 2023 Blogify
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-[#89375F]" href="https://facebook.com" target="_blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-[#89375F]" href="https://twitter.com" target="_blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-[#89375F]" href="https://www.linkedin.com/in/ritesh134340" target="_blank">
            <FaLinkedin className="text-[20px]"/>
          
          </a>
          <a className="ml-3 text-[#89375F]"  href="https://github.com/Ritesh134340" target="_blank">
             <FaGithub className="text-[20px]"/>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
