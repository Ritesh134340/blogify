import React from "react";
import axios from "axios";
import Image from "next/image";
import BlogList from "@/components/blogList";

const SearchResult = ({ data }) => {
  // console.log(data);
  return (
    <div className="mt-[100px]">
      <div>
        <p className="text-lg font-bold text-gray-400 text-[15px] ml-[30px]">
          <span className="text-red-300 text-[18px] mr-[8px] ">{data.length}</span>result
          found
        </p>
      </div>

      <div className="mt-[10px]">
        {data &&
          data.map((ele) => (
            <div key={ele._id} className="flex gap-[20px]">
              <BlogList blog={ele} />
            </div>
          ))}
      </div>

  { (  data && data.length===0) && <div className="flex mt-[30px] items-center justify-center min-h-[64vh] sm:min-h-[70vh] md:min-h-[78vh] lg:min-h-[58vh]">
        <p className="text-green-500 text-[16px] font-bold"><span className="text-red-500 text-[18px] mr-[5px]">No</span>result found !</p>
      </div>}
    </div>
  );
};

export async function getServerSideProps({ req, res, params, query }) {
  let searchQuery = "";

  if (query.q) {
    searchQuery = query.q;
  }
  const response = await axios.get(
    `http://localhost:3000/api/article/search?q=${searchQuery}`
  );

  const data = response.data.articles;

  return {
    props: { data },
  };
}
export default SearchResult;
