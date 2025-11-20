import React from "react";
import { useForm } from "react-hook-form";

const FilterData = ({ filterOptions, query, setQuery }) => {
  const { register, handleSubmit } = useForm();

  const filters = (data) => {
    setQuery({
      ...query,
      filters: data,
      page: 1,
    });
  };

  return (
    <div className="bg-black text-white absolute top-15 z-90 flex flex-col blur-bg w-fit border border-gray-400 rounded-xl ml-10">
      <h1 className="text-2xl mx-5 px-3 border-b border-gray-400 font-semibold py-4">
        Filters
      </h1>
      <form
        onSubmit={handleSubmit(filters)}
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
        <button type="submit" className="bg-rose-800 p-4 rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FilterData;
