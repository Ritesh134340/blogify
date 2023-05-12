import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const createArray=(pageToShow,currentPage,totalPages)=>{
  let start=currentPage-Math.floor(pageToShow/2)
  if(start<1){
    start=1
  }

  let end=start+pageToShow-1;
  if(end>totalPages){
    end=totalPages
    start=totalPages-pageToShow+1;
    if(start<1){
      start=1
    }
  }
  return new Array(end - start + 1).fill(start).map((ele,index)=>{
    return ele+index
  })
}

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  let pageToShow = 5;


  const arr=createArray(pageToShow,currentPage,totalPages)

  const pages = arr.map((ele, index) => {
    return (
      <div
        key={index}
        onClick={() => handlePageChange(ele)}
        className="border-[1px] select-none p-[18px] w-[20px] h-[20px] flex items-center justify-center rounded-[5px] cursor-pointer"
        style={{
          backgroundColor: currentPage === ele ? "rgb(137,55,95)" : "white",
          color: currentPage === ele ? "white" : "black",
        }}
      >
        {index + 1}
      </div>
    );
  });

  return (
    <div className="px-[5px] m-auto text-center mt-[30px] mb-[20px] flex items-center justify-center">
      <button
        className="border-[1px] select-none cursor-pointer"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage===1}
      >
        <GrFormPrevious className="text-[24px] m-[5px] rounded-[6px]" />
      </button>
      {pages}
      <button
        className="border-[1px] select-none  cursor-pointer"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={totalPages === currentPage}
      >
        <GrFormNext className="text-[24px] m-[5px] rounded-[6px]" />
      </button>
    </div>
  );
};

export default Pagination;
