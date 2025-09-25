import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Spinner } from "flowbite-react";

const FilterComp = ({ fieldArr, ApiPath }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  // This function is responible for sending the filter form data to the backend

  const filters = async (data) => {
    try {
      const response = await axios.post(
        ApiPath || "https://jsonplaceholder.typicode.com/posts",
        { filters: data }
      );
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      if (error.response) {
        console.log("Server Error : ", error.response);
      } else if (error.request) {
        console.log("Network Error : ", error.request);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="bg-black text-white absolute top-15 left-50 lg:left-120  z-90 flex flex-col blur-bg w-fit border border-gray-400 rounded-xl">
      <h1 className="text-2xl mx-5 px-3 border-b border-gray-400 font-semibold py-4">
        Filters
      </h1>
      <form
        onSubmit={handleSubmit(filters)}
        className="overflow-auto w-fit p-4 flex flex-col gap-10"
      >
        {/*
        This renders the items which is provided diffrently according to the page
        form data and its key is also dynamic we only had to provide array of listed items
        */}
        <ul className="flex gap-5 px-6 py-3 flex-wrap">
          {fieldArr.map((group, index) => (
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
          disabled={isSubmitting ? true : false}
          type="submit"
          className={`${
            isSubmitting ? " bg-rose-900" : "bg-rose-600"
          } p-4 rounded-2xl`}
        >
          {isSubmitting ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FilterComp;
