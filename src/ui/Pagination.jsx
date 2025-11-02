import { useState } from "react";

const Paginate = ({ setPage, currentPage, totalPages }) => {
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <div className="flex my-6 justify-center items-center gap-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
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
