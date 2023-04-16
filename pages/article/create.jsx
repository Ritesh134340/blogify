import React from "react";

const CreateArticle = () => {
  return (
    <div className="m-auto shadow-lg rounded-[10px] p-[15px] w-[40%] mt-[130px] mb-[50px]">
      <h3 className="text-center mb-[20px]">Create New Article</h3>
      <form className="w-[95%] m-auto">
        <label className="text-sm text-slate-500">Title</label>
        <br />
        <input
          type="text"
          placeholder="Enter title"
          className=" outline-none focus: border-[2px] focus:border-blue-600 h-[40px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
        />
        <br />
        <label className="text-sm text-slate-500">Image</label>
        <br />
        <input
          type="text"
          placeholder="Image link"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[40px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
        />
        <br />
        <label className="text-sm text-slate-500">Short Description</label>
        <br />
        <input
          type="text"
          placeholder="Short description"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[40px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
        />
        <br />
        <label className="text-sm text-slate-500">Details</label>
        <br />
        <textarea
          placeholder="Article description"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[180px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
        ></textarea>
        <br />
        <label className="text-sm text-slate-500">Category</label>
        <br />
        <input
          type="text"
          placeholder="Category"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[40px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
        />
        <br />
        <button className="rounded-[5px] bg-[rgb(137,55,95)] text-white py-[8px] px-[15px] mb-[25px] mt-[40px] ">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
