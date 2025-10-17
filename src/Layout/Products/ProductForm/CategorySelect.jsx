import React from "react";
import { useFormContext } from "react-hook-form";

const CategorySelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="input-section">
      <h3 className="title">Category</h3>
      <label htmlFor="category">Product Category</label>
      <select
        name="category"
        id="category"
        className="form-input-sections text-gray-500"
        {...register("category", {
          required: true,
        })}
      >
        <option value="mens-wear">Men's Wear</option>
        <option value="womens-wear">Women's Wear</option>
        <option value="footwear">Footwear</option>
        <option value="accessories">Accessories</option>
        <option value="kids">Kids</option>
      </select>

      <label htmlFor="sub-category">Sub Category</label>
      <input
        type="text"
        {...register("subCategory", {
          required: "sub-category is required is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        })}
        className={`form-input-sections ${
          errors.title
            ? "border border-red-500 focus:outline-red-500"
            : "border border-gray-300 focus:outline-gray-500"
        }`}
        id="sub-category"
        placeholder="Enter Sub category"
      />
    </div>
  );
};

export default CategorySelect;
