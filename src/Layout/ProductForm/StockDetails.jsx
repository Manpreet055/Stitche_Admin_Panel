import React from "react";
import { useFormContext } from "react-hook-form";

const StockDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {" "}
      <div className="input-section ">
        <h3 className="title">Inventory</h3>

        {/*Input fields  */}
        <div className="flex flex-wrap justify-evenly gap-4">
          <div className="flex flex-col w-full max-w-lg">
            <label htmlFor="barcode" className="mb-2">
              Barcode
            </label>
            <input
              {...register("barcode", {
                required: "Barcode is required",
                valueAsNumber: true,
                pattern: {
                  value: /^\d{6}$/,
                  message: "Barcode must be atleast 6 digits",
                },
              })}
              className={`form-input-sections ${
                errors.barcode
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
              type="number"
              id="barcode"
              placeholder="Type product Barcode"
            />
            {errors.barcode && (
              <p className="text-red-500">*{errors.barcode.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full max-w-lg">
            <label htmlFor="quantity" className="mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", {
                valueAsNumber: true,
              })}
              defaultValue="0"
              className={`form-input-sections ${
                errors.quantity
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
              placeholder="Type product Quantity"
            />
            {errors.quantity && (
              <p className="text-red-500">*{errors.quantity.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-3 max-w-lg">
            <label htmlFor="category">Featured</label>
            <select
              name="featured"
              id="featured"
              className="form-input-sections text-gray-500"
              {...register("isFeatured", {
                required: true,
              })}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockDetails;
