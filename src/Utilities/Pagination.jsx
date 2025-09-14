import { useState } from "react";
import clickEvent from "../Animations/onClick";
import { motion } from "framer-motion";

const Paginate = ({ data, children, ItemsPerPage = 10 }) => {
  const [pageNumber, setPageNumber] = useState(1); 
  const showItemsPerPage = ItemsPerPage;
  const totalPages = Math.ceil(data.length / showItemsPerPage);
  const IndexOfLastItem = pageNumber * showItemsPerPage; 
  const IndexOfFirstItem = IndexOfLastItem - showItemsPerPage;
  
  // serve sliced items when as children
  const paginatedChildren = Array.isArray(children)
    ? children.slice(IndexOfFirstItem, IndexOfLastItem)
    : children;

  const nextPage = () => {
    if (pageNumber == totalPages) return;
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    if (pageNumber == 1) return;
    setPageNumber(pageNumber - 1);
  };
  return (
    <div>
      {paginatedChildren}
      <div className="flex my-6 justify-center items-center gap-10">
        <motion.button
            disabled={pageNumber === 1}
          variants={clickEvent}
          initial="default"
          whileHover="hover"
          whileTap="click"
          className="button-style"
          onClick={prevPage}
        >
          Prev
        </motion.button>
        <div>{`${pageNumber} of ${totalPages}`}</div>
        <motion.button
            disabled={pageNumber === totalPages}

          variants={clickEvent}
          initial="default"
          whileHover="hover"
          whileTap="click"
          className="button-style "
          onClick={nextPage}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default Paginate;
