import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Trash2, Pen, Star, StarOff } from "lucide-react";
import deleteRequest from "../../Utilities/deleteRequest";
import toggleFeatured from "../../services/toggleFeatured";
import BackButton from "../../ui/BackButton";

const PDPHeader = ({ title, category, subCategory, isFeatured }) => {
  const [loadingState, setLoadingState] = useState(false);
  const { productId } = useParams();

  const [featured, setFeatured] = useState(Boolean(isFeatured));
  const navigate = useNavigate();
  return (
    <>
      <BackButton />
      <div className="flex w-full flex-wrap gap-y-6 justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold ">{title}</h2>
          <div className="text-lg">
            Category : {category}/{subCategory}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              toggleFeatured(productId, !featured, setLoadingState, setFeatured)
            }
            className={`flex gap-2 items-center hover:underline md:text-lg border border-gray-400 rounded-lg  p-3 ${loadingState ? "cursor-progress" : "cursor-pointer"}`}
          >
            {featured ? <StarOff /> : <Star />} Feature
          </button>
          <button
            onClick={() => navigate(`/products/${productId}/edit`)}
            className=" flex gap-2 items-center hover:underline md:text-lg border border-gray-400 rounded-lg h p-3"
          >
            <Pen />
            Edit
          </button>
          <button
            onClick={() => deleteRequest(productId, setLoadingState)}
            className={`flex gap-2 items-center md:text-lg hover:underline border border-gray-400 rounded-lg p-3 ${
              loadingState ? "cursor-progress" : "cursor-pointer"
            }`}
          >
            {" "}
            <Trash2 />
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default PDPHeader;
