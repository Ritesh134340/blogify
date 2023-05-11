import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  let pageToShow = 5;

  const arr = new Array(totalPages).fill(0);
  let firstIndex = currentPage - 1;
  let lastIndex = firstIndex + pageToShow;

  const pageArr = arr.map((ele, index) => {
    return (
      <div
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className="border-[1px] select-none p-[18px] w-[20px] h-[20px] flex items-center justify-center rounded-[5px] cursor-pointer"
        style={{
          backgroundColor:
            currentPage === index + 1 ? "rgb(137,55,95)" : "white",
          color: currentPage === index + 1 ? "white" : "black",
        }}
      >
        {index + 1}
      </div>
    );
  });

  const handlePrevious = () => {
    if (currentPage - pageToShow > 0) {
      handlePageChange(currentPage - pageToShow);
    } else {
      handlePageChange(1);
    }
  };

  const handleNext = () => {
    if (currentPage + pageToShow < totalPages) {
      handlePageChange(firstIndex + pageToShow + 1);
    } else if (currentPage + pageToShow >= totalPages) {
      handlePageChange(
        currentPage - (currentPage + pageToShow - totalPages) + 1
      );
    }
  };

  let pages = pageArr.slice(firstIndex, lastIndex);

  return (
    <div className="px-[5px] m-auto text-center mt-[30px] mb-[20px] flex items-center justify-center">
      <div
        className="border-[1px] select-none cursor-pointer"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <GrFormPrevious className="text-[24px] m-[5px] rounded-[6px]" />
      </div>
      {pages}
      <div
        className="border-[1px] select-none  cursor-pointer"
        onClick={handleNext}
        disabled={currentPage === totalPages - pageToShow}
      >
        <GrFormNext className="text-[24px] m-[5px] rounded-[6px]" />
      </div>
    </div>
  );
};

export default Pagination;
