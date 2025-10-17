import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const ProductGallery = ({ images, thumbnail,loadingState }) => {
  
  if (loadingState) {
    return (
      <div className="flex border border-gray-300 rounded-lg justify-center items-center h-64 ">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <>
      <div className="flex border border-gray-300  rounded-lg items-center p-6 justify-evenly flex-wrap">
        <img src={thumbnail} className="h-64 w-96" alt="" />
        <ul className=" p-6 max-w-xs flex flex-col  gap-4">
          {images.map((img, index) => (
            <li key={index}>
              <img src={img} className="h-32" alt="" />{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductGallery;
