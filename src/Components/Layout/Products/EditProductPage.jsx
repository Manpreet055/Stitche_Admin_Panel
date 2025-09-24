import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HandleImages from "../AddProduct/HandleImages";
import axios from "axios";
import Products from "./products.json";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = Products.find((p) => String(p.id) === String(productId));

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: product.title,
      description: product.description,
      category: product.category,
      subCategory: product.subCategory,
      brand: product.brand,
      price: product.price,
      images: product.media.images,
      thumbnail: product.media.thumbnail,
      discountPercentage: product.discount.percentage,
      priceAfterDiscount: product.discount.priceAfterDiscount,
      stock: product.stock,
      //   ratingAverage: product.rating.average,
      //   ratingCount: product.rating.count,
    },
  });

  const watchPrice = watch("price");
  const watchDiscount = watch("discountPercentage");
  // useEffect(() => {
  //   setValue(
  //     "priceAfterDiscount",
  //     watchPrice - (watchDiscount * watchPrice) / 100
  //   ).toFixed(2);
  // });
  const editProduct = async (data) => {
    try {
      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          productId: product.id,
          title: data.title,
          brand: data.brand,
          category: data.category,
          description: data.description,
          discountPercentage: data.discountPercentage,
          images: data.images.map((img) =>
            typeof img === "string"
              ? {
                  url: img,
                  type: "existing",
                }
              : { file: img, type: "new" }
          ),
          thumbnail: Array.of(data.thumbnail).map((t) =>
            typeof t === "string"
              ? { url: t, type: "existing" }
              : {
                  file: t,
                  type: "new",
                }
          ),
          stock: data.stock,
          price: data.price,
          priceAfterDiscount: data.priceAfterDiscount,
          subCategory: data.subCategory,
        }
      );
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      if (error.response) {
        console.log("Server Error : ", error.response);
      } else if (error.request) {
        console.log("Network Error : ", error.request);
      } else {
        console.log("Something Went wrong..", error.message);
      }
    }
  };

  return (
    <div className="overflow-y-scroll scrollbar-hidden px-5  h-screen pb-56 w-full">
      <div className="w-full flex justify-start ">
        <button
          onClick={() => navigate(-1)}
          className="primary-bg px-5 py-4 my-4 rounded-2xl"
        >
          Back
        </button>
      </div>
      <form
        onSubmit={handleSubmit(editProduct)}
        className=" flex w-full flex-wrap justify-between   md:gap-4"
      >
        <div className="flex flex-col gap-5 w-full max-w-xl">
          <div className="flex flex-col gap-1">
            {" "}
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="form-input-sections"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              className="form-input-sections"
              {...register("brand")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-input-sections"
              id="description"
              {...register("description")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <input
              className="form-input-sections"
              id="category"
              {...register("category")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="sub-category">Sub-Category</label>
            <input
              id="sub-category"
              className="form-input-sections"
              {...register("subCategory")}
            />
          </div>

          <div className="flex w-full justify-between">
            {" "}
            <div className=" flex max-w-[48%] flex-col gap-1 w-fit">
              {" "}
              <label htmlFor="price">Price</label>
              <input
                id="price"
                className="form-input-sections"
                {...register("price")}
                type="text"
              />
            </div>
            <div className=" flex max-w-[48%]  flex-col gap-1">
              <label htmlFor="discount">Discount Percentage</label>
              <input
                id="discount"
                className="form-input-sections"
                {...register("discountPercentage")}
                type="number"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="discounted-price">Price After Discount</label>
            <input
              id="discounted-price"
              className="form-input-sections"
              onChange={setValue(
                "priceAfterDiscount",
                (watchPrice - (watchDiscount * watchPrice) / 100).toFixed(2)
              )}
              value={(watchPrice - (watchDiscount * watchPrice) / 100).toFixed(
                2
              )}
              {...register("priceAfterDiscount")}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="stock">Stock </label>
            <input
              id="stock"
              className="form-input-sections"
              {...register("stock")}
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-[49%]">
          <div className="w-full flex flex-wrap gap-3">
            <HandleImages
              imgs={(data) => setValue("images", data)}
              thumbnails={(data) => setValue("thumbnail", data)}
              defaultImgs={product.media.images}
              defaultThumbnails={Array.of(product.media.thumbnail)}
            />
          </div>

          <button
            className={` w-fit px-6 py-4 rounded-2xl
             ${isSubmitting ? "bg-rose-950 text-neutral-400" : "bg-rose-800"}`}
            type="submit"
            disabled={isSubmitting ? true : false}
          >
            Save
          </button>
        </div>

        {/* <label htmlFor="ratings">Ratings</label>
      <input id="ratings" className="form-input-sections" {...register("ratingAverage")} type="text" />

      <label htmlFor="reviews">Reviews</label>
      <input id="reviews" className="form-input-sections" {...register("ratingCount")} type="number" /> */}
      </form>
    </div>
  );
};

export default EditProductPage;
