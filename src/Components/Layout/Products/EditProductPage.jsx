import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronLeft } from "lucide-react";
import HandleImages from "../AddProduct/HandleImages";
import axios from "axios";
import Products from "./products.json";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {
  const navigate = useNavigate(); // For navigate to the prev page

  const { productId } = useParams(); //destructring the product id from url
  const product = Products.find((p) => String(p.id) === String(productId)); // finding the product using Id provided from url

  // Destructring the react-hook-form variable and setting the default values dynamically
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

  //This block handle the price after discount section using useEffect hook
  const watchPrice = watch("price");
  const watchDiscount = watch("discountPercentage");
  useEffect(() => {
    if (watchDiscount && watchPrice >= 0) {
      const discountedPrice = (
        watchPrice -
        (watchDiscount * watchPrice) / 100
      ).toFixed(2);
      setValue("priceAfterDiscount", discountedPrice);
    }
  }, [watchDiscount, watchPrice, setValue]);

  //This function is responsible for succesfully sending the patch request to the backend
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
       <button
          onClick={() => navigate(-1)}
          className="hover:underline p-4 border mb-6 border-gray-400 rounded-2xl"
        >
          Back
        </button>
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
              {...register("title", {
                required: { value: true, message: "This cannot be empty" },
              })}
            />
            {errors.title && (
              <p className="text-red-600">*{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              className="form-input-sections"
              {...register("brand", {
                required: { value: true, message: "This cannot be empty" },
              })}
            />
            {errors.brand && (
              <p className="text-red-600">*{errors.brand.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-input-sections"
              id="description"
              {...register("description", {
                required: { value: true, message: "This cannot be empty" },
              })}
            />
            {errors.description && (
              <p className="text-red-600">*{errors.description.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <input
              className="form-input-sections"
              id="category"
              {...register("category", {
                required: { value: true, message: "This cannot be empty" },
              })}
            />
            {errors.category && (
              <p className="text-red-600">*{errors.category.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="sub-category">Sub-Category</label>
            <input
              id="sub-category"
              className="form-input-sections"
              {...register("subCategory", {
                required: { value: true, message: "This cannot be empty" },
              })}
            />
            {errors.subCategory && (
              <p className="text-red-600">*{errors.subCategory.message}</p>
            )}
          </div>

          <div className="flex w-full justify-between">
            {" "}
            <div className=" flex max-w-[48%] flex-col gap-1 w-fit">
              {" "}
              <label htmlFor="price">Price</label>
              <input
                id="price"
                className="form-input-sections"
                {...register("price", {
                  required: { value: true, message: "This cannot be empty" },
                  valueAsNumber: true,
                })}
                type="text"
              />
              {errors.price && (
                <p className="text-red-600">*{errors.price.message}</p>
              )}
            </div>
            <div className=" flex max-w-[48%]  flex-col gap-1">
              <label htmlFor="discount">Discount Percentage</label>
              <input
                id="discount"
                className="form-input-sections"
                {...register("discountPercentage", {
                  required: { value: true, message: "This cannot be empty" },
                  valueAsNumber: true,
                })}
                type="number"
              />
              {errors.discountPercentage && (
                <p className="text-red-600">
                  *{errors.discountPercentage.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="discounted-price">Price After Discount</label>
            <input
              id="discounted-price"
              className="form-input-sections"
              {...register("priceAfterDiscount")}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="stock">Stock </label>
            <input
              id="stock"
              className="form-input-sections"
              {...register("stock", {
                required: { value: true, message: "This cannot be empty" },
                valueAsNumber: true,
              })}
              type="number"
            />
            {errors.stock && (
              <p className="text-red-600">*{errors.stock.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:w-[49%]">
          <div className="w-full flex flex-wrap gap-3">
            {/* Images and thumnail upload section*/}
            <HandleImages
              imgs={(data) => setValue("images", data)}
              thumbnails={(data) => setValue("thumbnail", data)}
              defaultImgs={product.media.images}
              defaultThumbnails={Array.of(product.media.thumbnail)}
            />
          </div>

          <button
            className={` w-fit px-6 py-4 rounded-2xl
              primary-bg mt-5
             ${isSubmitting ? "cursor-progress" :"cursor-pointer"}`}
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
