import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HandleImages from "../AddProduct/HandleImages";
import AddKeyFeatures from "../AddProduct/AddKeyFeatures";

const EditProductCard = () => {
  const [images, setimages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  const product = {
    id: "1fd03e8b-2fb8-43b5-8cfd-c4f431ac16cd",
    title: "Sony Monitor",
    description: "This is a high-quality monitor by Sony.",
    category: "Appliances",
    subCategory: "Home",
    brand: "Sony",
    sku: "SON-1000",
    price: 1155.47,
    discount: {
      percentage: 25,
      priceAfterDiscount: 866.6,
    },
    stock: 118,
    rating: {
      average: 1.8,
      count: 154,
    },
    media: {
      thumbnail: "https://picsum.photos/200/200?random=4",
      images: [
        "https://picsum.photos/600/400?random=759",
        "https://picsum.photos/600/400?random=436",
        "https://picsum.photos/600/400?random=316",
      ],
    },
    isFeatured: false,
    timestamps: {
      createdAt: "2025-09-15T21:24:59.069268",
      updatedAt: "2025-09-28T21:24:59.069268",
    },
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product.title,
      description: product.description,
      category: product.category,
      subCategory: product.subCategory,
      brand: product.brand,
      price: product.price,
      discountPercentage: product.discount.percentage,
      priceAfterDiscount: product.discount.priceAfterDiscount,
      stock: product.stock,
      //   ratingAverage: product.rating.average,
      //   ratingCount: product.rating.count,
    },
  });

  function handleFormArrayChange(setter, fieldName, value) {
    setter(value);
    setValue(fieldName, value);
  }

  const editProduct = (data) => {
    console.log(data);
    // send updated data to backend here
  };

  return (
    <div className="overflow-y-scroll  h-screen pb-56 w-full">
      <form
        onSubmit={handleSubmit(editProduct)}
        className=" flex w-fullflex-wrap   md:gap-4"
      >
        <div className="flex flex-col gap-5 w-full">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="form-input-sections"
            {...register("title")}
          />
          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            className="form-input-sections"
            {...register("brand")}
          />

          <label htmlFor="description">Description</label>
          <textarea
            className="form-input-sections"
            id="description"
            {...register("description")}
          />

          <label htmlFor="category">Category</label>
          <input
            className="form-input-sections"
            id="category"
            {...register("category")}
          />

          <label htmlFor="sub-category">Sub-Category</label>
          <input
            id="sub-category"
            className="form-input-sections"
            {...register("subCategory")}
          />

          <label htmlFor="discounted-price">Price After Discount</label>
          <input
            id="discounted-price"
            className="form-input-sections"
            value={(
              product.price -
              (product.discount.percentage * product.price) / 100
            ).toFixed(2)}
            {...register("priceAfterDiscount")}
            readOnly
          />

          <label htmlFor="price">Price</label>
          <input
            id="price"
            className="form-input-sections"
            {...register("price")}
            type="text"
          />

          <label htmlFor="discount">Discount Percentage</label>
          <input
            id="discount"
            className="form-input-sections"
            {...register("discountPercentage")}
            type="number"
          />
          <label htmlFor="stock">Stock </label>
          <input
            id="stock"
            className="form-input-sections"
            {...register("stock")}
            type="number"
          />
        </div>

        <div className="flex flex-col w-full">
          <div className="w-full flex flex-wrap gap-3">
            <HandleImages
              imgs={(data) => handleFormArrayChange(setimages, "images", data)}
              thumbnails={(data) =>
                handleFormArrayChange(setThumbnails, "thumbnails", data)
              }
              defaultImgs={product.media.images}
              defaultThumbnails={Array.from(product.media.thumbnail)}
            />
          </div>

          <button
            className="bg-rose-800 w-fit px-6 py-4 rounded-2xl"
            type="submit"
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

export default EditProductCard;
