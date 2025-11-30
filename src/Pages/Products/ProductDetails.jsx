import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PDPHeader from "../../Layout/ProductDetails/PDPHeader";
import ProductGallery from "../../Layout/ProductDetails/ProductGallery";
import ProductDesc from "../../Layout/ProductDetails/ProductDesc";
import PriceDetails from "../../Layout/ProductDetails/PriceDetails";
import MetaData from "../../Layout/ProductDetails/MetaData";
import { fetchAllDataById } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  const [imagesArr, setImages] = useState([]);
  const [thumbnails, setThumbnail] = useState("");

  useEffect(() => {
    if (!productId) return;

    fetchAllDataById("products", productId, setLoadingState, setError).then(
      (data) => setProduct(data),
    );
  }, [productId]);

  const {
    title = "",
    _id = "",
    description = "",
    category = "",
    subCategory = "",
    brand = "",
    sku = "",
    stock = 0,
    quantity = 0,
    price = 0,
    discount = {},
    rating = 0,
    media = {},
    isFeatured = false,
    timestamps = {},
  } = product ?? {};

  const { thumbnail = "", images = [] } = media || {};
  const { createdAt = "", updatedAt = "" } = timestamps;

  const discountPercentage = discount?.discount ?? discount?.value ?? 0;

  useEffect(() => {
    setImages(images);
    setThumbnail(thumbnail);
  }, [media?.images, media?.thumbnail]);

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (typeof product !== "object" || Object.keys(product).length === 0) {
    return <AsyncBoundary customMessage="No Product found." />;
  }
  return (
    <section className="flex h-screen overflow-y-auto scrollbar-hidden pb-56 flex-col gap-6 p-4 w-full">
      <PDPHeader
        title={title}
        category={category}
        subCategory={subCategory}
        id={_id}
        isFeatured={isFeatured}
      />
      <ProductGallery images={imagesArr} thumbnail={thumbnails} />
      <ProductDesc
        description={description}
        brand={brand}
        rating={rating}
        stock={stock ?? quantity}
        isFeatured={isFeatured}
      />
      <div className="flex min-h-64 gap-y-6 justify-between flex-wrap">
        <PriceDetails price={price} discount={discountPercentage} />
        <MetaData
          id={_id}
          sku={sku}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </div>
    </section>
  );
};

export default ProductDetails;
