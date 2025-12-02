import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronUp } from "lucide-react";
import capitalizeFirstLetter from "../Utilities/capitalizeLetter";

const FilterData = ({ filterOptions, setQuery }) => {
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {},
  });
  const [filters, showFilters] = useState(false);

  const applyFilters = (data) => {
    const currentValues = getValues();
    const changedData = {};

    for (const key in currentValues) {
      if (currentValues[key] && currentValues[key].length > 0) {
        changedData[key] = currentValues[key];
      }
    }

    setQuery((prev) => ({
      ...prev,
      page: 1,
      filters: changedData,
    }));
  };

  return (
    <div>
      <button
        onClick={() => showFilters((prev) => !prev)}
        className=" flex items-center gap-3"
      >
        Filters
        <span
          className={`${!filters ? "rotate-180" : "rotate-0"} transition-all ease-in-out duration-300`}
        >
          <ChevronUp />
        </span>
      </button>
      {filters && (
        <div className="bg-black text-white absolute z-90 flex flex-col blur-bg w-fit border  border-gray-400 rounded-xl">
          <form
            onSubmit={handleSubmit(applyFilters)}
            className="overflow-auto w-fit p-4 flex flex-col gap-10"
          >
            <ul className="flex flex-wrap gap-5 px-6 max-w-sm py-3">
              {filterOptions.map((group, index) => (
                <li key={index}>
                  <label className="text-xl block mb-2">
                    {capitalizeFirstLetter(group.name)}
                  </label>
                  {group.fields.map((field, fieldIndex) => (
                    <div className="flex gap-4" key={fieldIndex}>
                      <input
                        type="checkbox"
                        value={field.keyname ?? field.fieldName} // value stored in array
                        {...register(group.name)} // grouped under parent name
                      />
                      <label>{field.fieldName}</label>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
            <button
              type="submit"
              className="hover:bg-[#edcfb1] hover:text-[#554840] scale-transition will-change-transform p-4 rounded-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterData;
