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

          {/* sku Details */}
          <div className="flex flex-col w-full max-w-lg">
            <label htmlFor="sku" className="mb-2">
              SKU{" "}
            </label>
            <input
              {...register("sku", {
                required: "SKU is required",
                minLength: {
                  value: 6,
                  message: "SKU must be atleast 6 digits",
                },
              })}
              className={`form-input-sections ${
                errors.barcode
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
              id="sku"
              placeholder="Type sku details"
            />
            {errors.sku && (
              <p className="text-red-500">*{errors.sku.message}</p>
            )}
          </div>

          <div className="flex flex-col w-full max-w-lg">
            <label htmlFor="stock" className="mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="stock"
              {...register("stock", {
                valueAsNumber: true,
              })}
              defaultValue="0"
              className={`form-input-sections ${
                errors.quantity
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
              placeholder="Type Stock Quantity"
            />
            {errors.stock && (
              <p className="text-red-500">*{errors.stock.message}</p>
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
              <option value={Boolean(true)}>Yes</option>
              <option value={Boolean(false)}>No</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockDetails;
