import AllBlogs from "@/components/allBlogs";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { HiOutlineSearch } from "react-icons/hi";


export default function Home({ data, heroData }) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    let searched = e.target.value;
    setSearchInput(searched);
    const data = heroData[0].searchKeyword;
    let newMatch =
      data &&
      data.filter((ele) => {
        return ele.keyword.toLowerCase().includes(searched.toLowerCase());
      });
    newMatch = newMatch.splice(0, 5);
    setSuggestion(newMatch);
  };

  const handleSearch = (text) => {
    console.log(text)
    router.push({
      pathname: "/article/search/result",
      query: { q: text },
    });
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/article/search/result",
        query: { q: searchInput },
      });
    }
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
            backgroundImage: `url('./assets/hero_image.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            opacity: "0.6",
          }}
        ></div>
        <div className="absolute top-[20%] w-[100%] text-white text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Looking something specific ?
          </h1>
          <div className="m-auto mt-[30px]  w-[95%] md:w-[50%] lg:w-[35%] ">
            <div className="flex items-center w-full relative  bg-white h-[43px] rounded-md border-[2px] box-content ">
              <input
                placeholder="Enter your query..."
                type="text"
                className="pl-[10px] h-[100%] outline-none border-none flex-[1] text-black box-border"
                value={searchInput}
                onKeyUp={handleEnterSearch}
                onChange={handleChange}
              />
              <BsSearch
                className="bg-[#D8D8D8] h-[100%] text-4xl text-slate-800 border-l-[2px] cursor-pointer  pl-[8px] pr-[8px]"
                onClick={() => handleSearch(searchInput)}
              />

              {searchInput && suggestion.length > 0 && (
                <div className="bg-white w-[100%] pb-[15px] shadow-lg box-border absolute top-[105%] left-0 ">
                  {suggestion &&
                    suggestion.map((ele) => {
                      return (
                        <div
                          key={ele._id}
                          className="pl-[15px] flex items-center gap-[13px]  text-left"
                        >
                          <HiOutlineSearch className="text-slate-400 text-2xl" />
                          <p
                            className="text-black  py-[9px] my-[5px] text-sm cursor-pointer"
                            onClick={() => {
                                handleSearch(ele.keyword);
                            }}
                          >
                            {ele.keyword}
                          </p>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AllBlogs data={data} />
    </main>
  );
}

export async function getServerSideProps({ req, res, params, query }) {
  const response = await axios.get(`${process.env.CLIENT_ADDRESS}/api/article/get`);

  const data = response.data.articles;
  const heroData = response.data.heroData;
  return {
    props: { data, heroData },
  };
}
