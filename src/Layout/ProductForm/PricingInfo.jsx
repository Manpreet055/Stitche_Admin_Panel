import React from "react";
import { useFormContext } from "react-hook-form";

const PricingInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="input-section">
        <h3 className="title">Pricing</h3>
        <label htmlFor="base-price">Base Price</label>
        <input
          type="number"
          {...register("price", {
            required: "Price is required",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Minimum price should be 1",
            },
            max: {
              value: 9999,
              message: "Maximum price will be 9999",
            },
          })}
          className={`form-input-sections ${
            errors.price
              ? "border border-red-500 focus:outline-red-500"
              : "border border-gray-300 focus:outline-gray-500"
          }`}
          placeholder="Price"
        />
        {errors.price && (
          <p className="text-red-500">*{errors.price.message}</p>
        )}

        <div className=" flex flex-col  justify-evenly gap-6">
          <div className="flex flex-col ">
            <label htmlFor="discount">
              Discount <i>(Optional)</i>
            </label>
            <input
              type="number"
              {...register("discount.discount", {
                valueAsNumber: true,
              })}
              defaultValue={0}
              id="discount"
              className={`form-input-sections mt-2 ${
                errors.discount
                  ? "border border-red-500 focus:outline-red-500"
                  : "border border-gray-300 focus:outline-gray-500"
              }`}
            />
          </div>

          {/* Discount-type input-field */}
          <div className=" flex flex-col justify-center">
            <label htmlFor="discount-type" className="mb-2">
              Discount Type
            </label>
            <select
              className=" form-input-sections text-gray-500"
              id="discount-type"
              {...register("discount.type", {
                required: true,
              })}
            >
              <option value="no-offers">No Discount</option>
              <option value="percentage">Percentage</option>
              <option value="amount">Amount</option>
              <option value="bundle-discount">Bundle Discount</option>
              <option value="Buy One Get 1">Buy One Get 1</option>
              <option value="Buy One Get 2">Buy One Get 2</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingInfo;
