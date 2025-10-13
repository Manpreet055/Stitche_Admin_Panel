import React from "react";
import { useFormContext } from "react-hook-form";

const BasicInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="input-section">
        <h3 className="title">General Information</h3>

        <label htmlFor="title">Product Name</label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
          className={`form-input-sections ${
            errors.title
              ? "border border-red-500 focus:outline-red-500"
              : "border border-gray-300 focus:outline-gray-500"
          }`}
          id="title"
          placeholder="Enter Product Name"
        />
        {errors.name && <p className="text-red-500">*{errors.title.message}</p>}

        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Minimum length should be 10",
            },
          })}
          placeholder="Description"
          name="description"
          id="description"
          className={`form-input-sections scrollbar-hidden h-[150px] resize-y ${
            errors.description
              ? "border border-red-500 focus:outline-red-500"
              : "border border-gray-300 focus:outline-gray-500"
          }`}
        ></textarea>
        {errors.description && (
          <p className="text-red-500">*{errors.description.message}</p>
        )}
      </div>
    </>
  );
};

export default BasicInfo;
