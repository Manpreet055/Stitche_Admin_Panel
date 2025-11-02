import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Pen, Star, StarOff } from "lucide-react";
import deleteRequest from "../../Utilities/deleteRequest";
import toggleStarred from "../../Utilities/toggleStarred";
import BackButton from "../../ui/BackButton";

const PDPHeader = ({ id, title, category, subCategory, isFeatured }) => {
  const [loadingState, setLoadingState] = useState(false);

  const [starred, setStarred] = useState(isFeatured);
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
              toggleStarred(!starred, id, setStarred, setLoadingState)
            }
            className=" flex gap-2 items-center hover:underline md:text-lg border border-gray-400 rounded-lg h p-3"
          >
                {isFeatured ? (<StarOff />):(<Star/>)} Feature
          </button>
          <button
            onClick={() => navigate(`/products/${id}/edit`)}
            className=" flex gap-2 items-center hover:underline md:text-lg border border-gray-400 rounded-lg h p-3"
          >
            <Pen />
            Edit
          </button>
          <button
            onClick={() => deleteRequest(id, setLoadingState)}
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
