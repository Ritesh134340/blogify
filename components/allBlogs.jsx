import React from "react";
import BlogList from "./blogList";


const AllBlogs = ({data}) => {
   
  return (
    <div>
     { 
     data && data.map((ele)=> <BlogList key={ele._id} blog={ele}/>)
     }
   
     
    </div>
  );
};



export default AllBlogs;
