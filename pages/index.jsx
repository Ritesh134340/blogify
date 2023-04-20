import AllBlogs from "@/components/allBlogs";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Home({ data, heroImage }) {
  const heroImageLink = heroImage[0].heroImage;
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setSearchInput(e.target.value)
   
    
  };

  const handleSearch = () => {
    router.push({pathname:"/article/search/result",query:{q:searchInput}});
  };

  return (
    <main className="mt-[80px]">
      <div
        style={{
          height: "450px",
          boxSizing: "border-box",
          width: "100%",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            content: "''",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${heroImageLink})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            opacity: "0.6",
          }}
        ></div>
        <div className="absolute top-[20%] w-[100%] text-white text-center">
          <h1 className="text-3xl font-semibold">
            Looking something specific ?
          </h1>
          <div className="m-auto  w-[33%] mt-[30px] ">
            <div className="flex items-center  bg-white h-[43px] rounded-md border-[2px] box-content">
              <input
                placeholder="Enter your query..."
                type="text"
                className="pl-[10px] h-[100%] outline-none border-none flex-[1] text-black"
                value={searchInput}
                onChange={handleChange}
              />
              <BsSearch
                className="bg-[#D8D8D8] h-[100%] text-4xl text-slate-800 border-l-[2px] cursor-pointer  pl-[8px] pr-[8px]"
                onClick={handleSearch}
              />
            </div>

            {searchInput && (
              <div className="bg-white w-[100%] h-[350px] border-t-[1px] shadow-lg box-border "></div>
            )}
          </div>
        </div>
      </div>

      <AllBlogs data={data} />
    </main>
  );
}

export async function getServerSideProps({ req, res, params, query }) {
 
  const response = await axios.get("http://localhost:3000/api/article/get");

  const data = response.data.articles;
  const heroImage = response.data.heroImage;
  return {
    props: { data, heroImage },
  };
}
