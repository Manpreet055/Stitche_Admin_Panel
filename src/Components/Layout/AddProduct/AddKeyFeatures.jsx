import React, { useState } from "react";
import { X } from "lucide-react";
const KeyFeature = ({ onFeatureChange }) => {
  const [keyFeatures, addNewKeyFeatures] = useState([""]);

  // This function handle the new State and add it to the exiting state.
  const handleChanges = (index, value) => {
    const updateValue = [...keyFeatures]; 
    updateValue[index] = value; 
    addNewKeyFeatures(updateValue); 
    onFeatureChange(updateValue);
  };

  // This function filter out the clicked element from the array and state
  const removeFeature = (index) => {
    const updatedArray = keyFeatures.filter((_, i) => i != index);
    addNewKeyFeatures(updatedArray);
  };

  return (
    <div>
      <h3 className="title flex justify-between items-center">
        Key Features
        <button
          onClick={() => addNewKeyFeatures([...keyFeatures, ""])}
          type="button"
          className="px-4 hover:bg-blue-300/60 text-xl scale-transition rounded-2xl p-2 "
        >
          Add +{" "}
        </button>{" "}
      </h3>

      {/* List of all input fields for key features */}
      <ul className="flex flex-col gap-2 items-center w-full">
        {/* rendering all states as input field */}
        {keyFeatures.map((feature, index) => (
          <li className="w-full flex items-center gap-7" key={index}>
            <input
              className="w-full pl-3 form-input-sections"
              value={feature}
              placeholder="Key Feautre"
              onChange={(event) => handleChanges(index, event.target.value)}
              type="text"
            />
            {/* button to remove the input field */}
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="text-2xl cursor-pointer p-4 font-thin"
            >
              <X />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeature;
