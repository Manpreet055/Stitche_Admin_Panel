import { useState } from "react";

const Paginate = ({ currentPage, setCurrentPage, totalPages }) => {
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <div className="flex my-6 justify-center items-center gap-10">
        <button
          disabled={currentPage === 1}
          onClick={prevPage}
          className="button-style primary-bg"
        >
          Prev
        </button>
        <div>{`${currentPage} of ${totalPages}`}</div>

        <button
          disabled={currentPage === totalPages}
          onClick={nextPage}
          className="button-style primary-bg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginate;
