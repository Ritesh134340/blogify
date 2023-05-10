import React from "react";
import BlogList from "./blogList";


const AllBlogs = ({data,handleDeleteBlog}) => {
   
  return (
    <div>
     { 
     data && data.map((ele)=> <BlogList handleDeleteBlog={handleDeleteBlog} key={ele._id} blog={ele}/>)
     }
   
     
    </div>
  );
};



export default AllBlogs;
