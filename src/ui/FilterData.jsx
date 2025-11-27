import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronUp } from "lucide-react";

const FilterData = ({ filterOptions, query, setQuery }) => {
  const { register, handleSubmit } = useForm();
  const [filters, showFilters] = useState(false);

  const applyFilters = (data) => {
    setQuery((prev) => ({
      ...prev,
      page: 1,
      filters: data,
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
        <div className="bg-black text-white absolute z-90 flex flex-col blur-bg w-fit border border-gray-400 rounded-xl">
          <form
            onSubmit={handleSubmit(applyFilters)}
            className="overflow-auto w-fit p-4 flex flex-col gap-10"
          >
            <ul className="flex gap-5 px-6 py-3">
              {filterOptions.map((group, index) => (
                <li key={index}>
                  <label className="text-xl block mb-2">{group.name}</label>
                  {group.fields.map((field, fieldIndex) => (
                    <div className="flex gap-4" key={fieldIndex}>
                      <input
                        type="checkbox"
                        value={field.keyname} // value stored in array
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
